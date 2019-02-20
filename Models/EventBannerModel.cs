namespace kb_app.Models
{
    public class EventBannerModel
    {
         public int EventBannerID { get; set; }

         public string EventName { get; set; }
         
         public int EventID { get; set; }

         public byte[] Banner { get; set; }

          public int IsActive { get; set; }

          public int UserID { get; set; }

       
    }
}