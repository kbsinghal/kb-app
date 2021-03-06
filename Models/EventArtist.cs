using System;

namespace kb_app.Models
{
    public class EventArtist
    {
         public int EventArtistID{ get; set; }
         public int EventID { get; set; }

         public int ArtistID { get; set; } 


       public TimeSpan? StartTime { get; set; }

       public TimeSpan? EndTime { get; set; }

        public int IsActive { get; set; }

        public int CreatedBy { get; set; }

       public int UpdatedBy { get; set; }

       public DateTime CreatedOn { get; set; }

       public DateTime UpdatedOn { get; set; }
    }
}