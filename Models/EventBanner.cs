namespace kb_app.Models
{
    public class EventBanner
    {
         public int EventBannerID { get; set; }
         
         public int EventID { get; set; }

         public byte[] Banner { get; set; }
    }
}