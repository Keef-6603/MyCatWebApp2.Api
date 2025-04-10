using Microsoft.EntityFrameworkCore;
using MyCatWebApp2.Api.Data;
using MyCatWebApp2.Api.Repository;

namespace MyCatWebApp2.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            
            builder.Services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
                {
                    Version = "v1",
                    Title = "CatBoxRequestWebsite",
                    Description = "Aims to streamline the process of designing and requesting cat boxes tailored to Your Cat(s) Need"
                });
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
            // Disable CORS since angular will be running on port 4200 and the service on port 5258.
            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            app.Run();
        }
    }
}
