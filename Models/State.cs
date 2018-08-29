using System;

namespace kb_app.Models
{
    public class State
    {
        public int StateID { get; set; }

        public string StateName { get; set; }

        public int CountryID { get; set; }

        public int CreatedBy { get; set; }

        public int UpdatedBy { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime UpdatedOn { get; set; }


    }
}