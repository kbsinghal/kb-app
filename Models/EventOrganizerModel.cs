using System.Collections.Generic;
using System;

namespace kb_app.Models
{
    public class EventOrganizerModel
    {
         public int EventOrganizerID{ get; set; }
         public int EventID { get; set; }

         public string EventName{get;set;}

         public List<Entity> EntityList { get; set; } //It will be problem while saving

         public int[] EntityIDs{ get; set; }
    
         public int UserID { get; set; }

        
    }
}