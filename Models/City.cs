using System;

namespace kb_app.Models
{
    public class City
    {
        public int CityID { get; set; }

        public string CityName { get; set; }

        public int StateID { get; set; }

        public int CreatedBy { get; set; }

        public int UpdatedBy { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime UpdatedOn { get; set; }


    }
}

