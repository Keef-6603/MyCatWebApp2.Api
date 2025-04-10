using Microsoft.EntityFrameworkCore;
using MyCatWebApp2.Api.Models;

namespace MyCatWebApp2.Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<CatProfile> CatProfiles { get; set; }  
        public DbSet<CatBox> CatBoxes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
