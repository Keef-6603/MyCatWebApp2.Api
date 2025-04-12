using Microsoft.EntityFrameworkCore;
using MyCatWebApp2.Api.Data;
using MyCatWebApp2.Api.Repository;
using System.Text.Json.Serialization;

namespace MyCatWebApp2.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers().AddJsonOptions(x =>
            {
                // serialize enums as strings in api responses (e.g. Role)
                x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());

                // ignore omitted parameters on models to enable optional params (e.g. User update)
                x.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
            }); ;
            builder.Services.AddEndpointsApiExplorer();
            
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
            });

            builder.Services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
                {
                    Version = "v1",
                    Title = "CatBoxRequest.API",
                    Description = ""
                });
                options.DescribeAllParametersInCamelCase();

            });
            builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlite("Data Source=CatWebAppDb.db;"), ServiceLifetime.Scoped);
            //builder.Services.AddScoped(typeof(ApplicationDbContext));
            builder.Services.AddScoped<ICatProfileRepo, CatProfileRepo>();
            var app = builder.Build();


            // Configure the HTTP request pipeline.

            app.UseAuthorization();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(options =>
                {
                    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
                    options.RoutePrefix = string.Empty;
                    
                });
            }
            // Configure the HTTP request pipeline.

            //app.UseHttpsRedirection();
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
            //app.MapControllers();

            // Enable CORS for all origins, methods, and headers
            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            app.Run();
        }
    }
}
