using Microsoft.EntityFrameworkCore;
using MessageThreadAPI.Models;

namespace MessageThreadAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<Message> Messages => Set<Message>();
    }
}