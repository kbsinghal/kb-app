using System;
using System.Collections.Generic;
//using System.Linq;
//using System.Web;

namespace kb_app.Models
{
    public class Event
    {
        public int EventID { get; set; }
        public string EventName { get; set; }
        public string EventDescription { get; set; }

        public DateTime EventStartDate { get; set; }

        public DateTime EventEndDate { get; set; }

        public DateTime EventStartTime { get; set; }

        public DateTime EventEndTime { get; set; }

        public string EventAddress { get; set; }

        public float EventVenueLatitude { get; set; }

        public float EventVenueLongitude { get; set; }

        //public string CountryName { get; set; }
        public int CountryID { get; set; }

        //public string StateName { get; set; }

        public int StateID { get; set; }
        //public string CityName { get; set; }
        public int CityID { get; set; }
        //public string AreaName { get; set; }
        public int AreaID { get; set; }



        public int IsActive { get; set; }

        //public List<EventBanner> EventBanners{get;set;}

        //public List<EventOrganizer> EventOrganizers { get;set;}

         public int CreatedBy { get; set; }

        public int UpdatedBy { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime UpdatedOn { get; set; }
    }
}