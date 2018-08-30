using System;

namespace kb_app.Models
{
    public class Area
    {
        public int AreaID { get; set; }

        public string AreaName { get; set; }

        public int CityID { get; set; }

        public int CreatedBy { get; set; }

        public int UpdatedBy { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime UpdatedOn { get; set; }


    }
}

