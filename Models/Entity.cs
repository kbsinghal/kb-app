using System;

namespace kb_app.Models
{
    public class Entity
    {
         public int EntityID { get; set; }

        public string Name { get; set; }

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string LastName { get; set; }

        public string NickName { get; set; }

        public string Description { get; set; }

        public string EntityType { get; set; }

        public int NoOfFollowers { get; set; }

        public int NoOfUpcomingEvents { get; set; }

        public int NoOfPastEvents { get; set; }

        public short IsRegistered { get; set; }

        public string RegisteredAddress { get; set; }

        //public string RegisteredCity { get; set; }

        public int RegisteredCityID { get; set; }

        //public string RegisteredState { get; set; }

        public int RegisteredStateID { get; set; }

        public int RegisteredAreaID { get; set; }

        public int RegisteredCountryID { get; set; }

        //public string AreaName { get; set; }

        public string EmailAddress { get; set; }

        public string WebsiteAddress { get; set; }


        public byte[] Logo { get; set; }


        public string FacebookAddress { get; set; }

        public string YouTubeAddress { get; set; }

        public string TwitterAddress { get; set; }

        public string GooglePlusAddress { get; set; }

        public short IsActive { get; set; }

        public int CreatedBy { get; set; }

        public int UpdatedBy { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime UpdatedOn { get; set; }
    }
}