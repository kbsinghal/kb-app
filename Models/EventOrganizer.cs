using System;

namespace kb_app.Models
{
    public class EventOrganizer
    {
         public int EventOrganizerID{ get; set; }
         public int EventID { get; set; }

         public int EntityID { get; set; } 

        public int CreatedBy { get; set; }

       public int UpdatedBy { get; set; }

       public DateTime CreatedOn { get; set; }

       public DateTime UpdatedOn { get; set; }
    }
}