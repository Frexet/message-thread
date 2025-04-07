using Microsoft.EntityFrameworkCore;
using MessageThreadAPI.Models;

namespace MessageThreadAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<Message> Messages => Set<Message>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Message>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Author).IsRequired().HasColumnType("longtext");
                entity.Property(e => e.Text).IsRequired().HasColumnType("longtext");
                entity.Property(e => e.Timestamp).IsRequired().HasColumnType("datetime(6)");
            });
        }
    }
}