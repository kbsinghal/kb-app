using System;

namespace kb_app.Models
{
    public class Country
    {
         public int CountryID { get; set; }

        public string CountryName { get; set; }

        public int CreatedBy { get; set; }

        public int UpdatedBy { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime UpdatedOn { get; set; }


    }
}