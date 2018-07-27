namespace kb_app.Models
{
    public class EventOrganizer
    {
         public int EventOrganizerID{ get; set; }
         public int EventID { get; set; }

         public int EntityID { get; set; }

        public Entity EntityOrganizer { get; set; }
    }
}