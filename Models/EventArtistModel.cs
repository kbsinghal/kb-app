using System;

namespace kb_app.Models
{
    public class EventArtistModel
    {
         public int EventArtistID{ get; set; }
         public int EventID { get; set; }

         public string EventName { get; set; }

         public int ArtistID { get; set; } 

         public string ArtistName { get; set; } 

       public TimeSpan? StartTime { get; set; }

        
       public TimeSpan? EndTime { get; set; }

        public int IsActive { get; set; }

        public int UserID { get; set; }

    }
}