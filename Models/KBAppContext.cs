using Microsoft.EntityFrameworkCore;

namespace kb_app.Models
{
    public class KBAppContext: DbContext
    {
        public KBAppContext(DbContextOptions<KBAppContext> options): base(options)
        {
        }

        public DbSet<Event> Event { get; set; }
    }
}