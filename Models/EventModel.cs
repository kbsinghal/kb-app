using System;
using System.Collections.Generic;
//using System.Linq;
//using System.Web;

namespace kb_app.Models
{
    public class EventModel
    {
        public int EventID { get; set; }
        public string EventName { get; set; }
        public string EventDescription { get; set; }

        public DateTime EventStartDate { get; set; }

        public DateTime EventEndDate { get; set; }

        public TimeSpan EventStartTime { get; set; }

        public TimeSpan? EventEndTime { get; set; }

        public string EventAddress { get; set; }

        public float? EventVenueLatitude { get; set; }

        public float? EventVenueLongitude { get; set; }

        
        public int CountryID { get; set; }

        public string CountryName { get; set; }

        

        public int StateID { get; set; }

        public string StateName { get; set; }

        
        public int CityID { get; set; }

        public string CityName { get; set; }
        
        public int AreaID { get; set; }

        public string AreaName { get; set; }


        public int IsActive { get; set; }

        //public List<EventBannerModel> EventBanners{get;set;}

        //public List<EventOrganizerModel> EventOrganizers { get;set;}

        public string EventOccurence{get;set;}
         public int UserID { get; set; }

        
    }
}