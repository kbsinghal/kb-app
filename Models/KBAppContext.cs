using Microsoft.EntityFrameworkCore;

namespace kb_app.Models
{
    public class KBAppContext: DbContext
    {
        public KBAppContext(DbContextOptions<KBAppContext> options): base(options)
        {
        }

        public DbSet<Event> Event { get; set; }
        public DbSet<Entity> Entity { get; set; }

        public DbSet<Country> Country { get; set; }

        public DbSet<State> State { get; set; }

        public DbSet<City> City { get; set; }

        public DbSet<Area> Area { get; set; }

        public DbSet<EventOrganizer> EventOrganizer { get; set; }

        public DbSet<EventArtist> EventArtist { get; set; }
    }
}