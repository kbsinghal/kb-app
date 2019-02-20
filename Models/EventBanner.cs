using System;

namespace kb_app.Models
{
    public class EventBanner
    {
         public int EventBannerID { get; set; }
         
         public int EventID { get; set; }

         public Byte[] Banner { get; set; }

          public int IsActive { get; set; }

          public int CreatedBy { get; set; }

       public int UpdatedBy { get; set; }

       public DateTime CreatedOn { get; set; }

       public DateTime UpdatedOn { get; set; }
    }
}