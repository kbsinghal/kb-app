using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kb_app.Models;
using Microsoft.AspNetCore.Mvc;
//using Microsoft.AspNetCore.Http;
using kb_app.DAL;
using System.Reflection;
using System.Net.Http.Formatting;
//using System.Web.Mvc;
//using System.Collections.Specialized;
//using System.Collections.CollectionBase;
//using System.Web.Http;
//using System.Net.Http;
//using Microsoft.AspNet.WebApi.Core;
//using Microsoft.AspNetCore.WepApi.client;
using System.Web;
using System.Net.Http;
using System.IO;
//using System.Net;
//using System.Web.Http;
//using System.Net.Http.Formatting;

namespace kb_app.Controllers
{
    
[Route("kbapi/[controller]")]  // set route attribute to make request as 'api/EventBanner'  

//public class EventBannerController: System.Web.Http.ApiController {  
    public class EventBannerController: Controller {  
    private readonly KBAppContext _context;  
     //private readonly System.Net.Http.HttpRequestMessage Request;     
    // initiate database context  
    public EventBannerController(KBAppContext context) {  
            _context = context;  

            //var notFoundResponse = new HttpResponseMessage(System.Net.HttpStatusCode.NotFound);
             //throw new HttpResponseException(notFoundResponse);
             //throw new Exception();

//           Request= new System.Net.Http.HttpRequestMessage();

            //var response = request.CreateResponse(System.Net.HttpStatusCode.OK, context.Courses);

        }  


    [HttpGet]  
    [Route("getAllEventBanner")]  
    public List<EventBannerModel> GetAll() {  
            
             
             List<EventBannerModel> lstEventBannerModel=new List<EventBannerModel>();
             List<Event> lstEvent=_context.Event.ToList();
             List<Entity> lstArtist=_context.Entity.ToList();
             List<EventBanner> lstEventBanner=_context.EventBanner.ToList();

            //return _context.State.ToList();  // fetch all state records 
          //_context.State.ToList().ForEach(aa=>{StateModel stateModel=new StateModel();stateModel.StateID=aa.StateID;stateModel.CountryID=aa.CountryID; stateModel.StateName=aa.StateName;lstStateModel.Add(stateModel);});  // fetch all state records  

           //DateTime parsedTimeObj;

           lstEventBannerModel= (from leb in lstEventBanner join le in lstEvent on leb.EventID equals le.EventID 
                                  //join la in lstArtist on lea.ArtistID equals la.EntityID             


           select new EventBannerModel(){
               
               //EventBannerID=leb.EventBannerID,
               EventID = le.EventID, 
               EventName = le.EventName, 
               IsActive=leb.IsActive,
               Banner=leb.Banner
               
               //StartTime=lea.StartTime==null?string.Empty:lea.StartTime.ToShortTimeString();


               //StartTime=(DateTime.TryParse(lea.StartTime, out parsedTimeObj)) ? parsedTimeObj.Value.ToShortTimeString() : string.Empty;


               //EndTime=lea.EndTime==null?string.Empty:Convert.ToString(lea.EndTime,"hh:mm:ss"),
               }).ToList<EventBannerModel>();
             return lstEventBannerModel;

        }  


    [HttpGet("{id}")]  
    [Route("getEventBanner")]  
    public IActionResult GetById(long id) {  
            
            //var item = _context.State.FirstOrDefault(t => t.StateID == id);  // filter state records by state id  
            //EventBanner st=_context.EventBanner.Where<EventBanner>(t => t.EventBannerID == id).FirstOrDefault();
            
             EventBannerModel item=null;

            //  if(st == null) {  
            //      return NotFound();  
            //  }  
            //  else
            //  {
                  item=new EventBannerModel();
            //     item.EventArtistID=st.EventArtistID;
            //     item.EventID=st.EventID;
            //     item.ArtistID=st.ArtistID;
            //     item.StartTime=st.StartTime;
            //     item.EndTime=st.EndTime;
            //     item.IsActive=st.IsActive;
            //     //item.StateName=st.StateName;
                
            //}
            return new ObjectResult(item);  
        }  
      

// public static NameValueCollection Convert(FormDataCollection formDataCollection)
// {
//     //Validate.IsNotNull("formDataCollection", formDataCollection);

//     IEnumerator<KeyValuePair<string, string>> pairs = formDataCollection.GetEnumerator();

//     NameValueCollection collection = new NameValueCollection();

//     while (pairs.MoveNext())
//     {
//         KeyValuePair<string, string> pair = pairs.Current;

//         collection.Add(pair.Key, pair.Value);
//     }

//     return collection;
//  }


        // [HttpPost]  
        // [Route("uploadEventBanner")]  
        // public async void  BannerUpload()  
        // {  
        //     // Check if the request contains multipart/form-data.  
        //     if (!Request.Content.IsMimeMultipartContent())  
        //     {  
        //         throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);  
        //     }  
  
        //     var provider = await Request.Content.ReadAsMultipartAsync<InMemoryMultipartFormDataStreamProvider>(new InMemoryMultipartFormDataStreamProvider());  
        //     //access form data  
        //     NameValueCollection formData = provider.FormData;  
        //     //access files  
        //     IList<HttpContent> files = provider.Files;  
  
        //     HttpContent file1 = files[0];  
        //     var thisFileName = file1.Headers.ContentDisposition.FileName.Trim('\"');  
        // }


[HttpPost]  
    [Route("addEventBanner")]  
    public IActionResult Create(List<Microsoft.AspNetCore.Http.IFormFile> lstFiles)  
    {  
        //var tet=System.Web.HttpContext.Current.Request.Files;    

        //if (!Request.Content.IsMimeMultipartContent())  
        //{  
            //throw new System.Web.Http.HttpResponseException(HttpStatusCode.Status415UnsupportedMediaType);  
            //throw new System.Web.Http.HttpResponseException(HttpStatusCode.Status415UnsupportedMediaType);  
            //throw new Exception();
            //throw new System.Web.Http.HttpResponseException(Request.CreateResponse(System.Net.HttpStatusCode.UnsupportedMediaType));
        //}  
  
  
        
        

        // var root = HttpContext.Current.Server.MapPath("~/App_Data/Uploadedfiles/Banner");  
        
        // System.IO.Directory.CreateDirectory(root);  
        // var provider = new System.Net.Http.MultipartFormDataStreamProvider(root);  
        // var result = await Request.Content.ReadAsMultipartAsync(provider);  
        //var result = await Request.Content.ReadAsMultipartAsync();
             
  
         //var model = result.FormData["eventbanner"];  
        // if (model == null)  
        // {  
        //     //throw new System.Web.Http.HttpResponseException(HttpStatusCode.BadRequest);  
        //     //throw new System.Web.Http.HttpResponseException(Microsoft.AspNetCore.Http.StatusCodes.Status400BadRequest); 

        //     //var notFoundResponse = new HttpResponseMessage(HttpStatusCode.NotFound);
        //      //throw new HttpResponseException(Microsoft.AspNetCore.Http.StatusCodes.Status400BadRequest);

        //     throw new Exception();
        // }  

        
        
         
        //get the posted files  
        foreach (Microsoft.AspNetCore.Http.IFormFile file in lstFiles)  
        {  
             _context.EventBanner.Add(new EventBanner {  
                     EventID =2,
                     //Banner =  file,//System.Text.Encoding.ASCII.GetBytes(formData.Get("file"+c)),
                     //Banner=System.IO.File.ReadAllBytes(file);//System.Text.Encoding.Unicode.GetBytes(file),
                     //Banner=System.IO.File.ReadAllBytes("TESTING"), //System.Text.Encoding.Unicode.GetBytes(file),

                     
                     //IsActive=item[0].IsActive,
             }); 
        } 

        _context.SaveChanges();  
             return Ok(new {  message = "Event Banner is updated successfully."  });
  
//        return Request.CreateResponse(HttpStatusCode.OK, "success!");  

        //HttpRequestMessage request = new HttpRequestMessage();

        //using System.Net;
//using System.Web.Http;




        //return Request.CreateResponse(System.Net.HttpStatusCode.OK, "success!");  
        
    }  


//     [HttpPost]  
//     [Route("addEventBanner")]  
//   //public IActionResult Create([FromBody] EventBannerModel[] item) {  
//   public IActionResult Create1(FormDataCollection formData) {  
            
//             if (formData == null) {  
//                 return BadRequest();  // set bad request if country data is not provided in body  
//             }
            // if (item == null) {  
            //     return BadRequest();  // set bad request if country data is not provided in body  
            // }  
            //DateTime starttime,endtime;
            //DateTime.TryParse(default(DateTime)+" "+ item.StartTime,out starttime);
            //DateTime.TryParse(default(DateTime)+" "+ item.EndTime,out endtime);
            //byte[] bytes=System.Text.Encoding.ASCII.GetBytes("testing");
             
//for(var c=0;c<=1;c++)
//{
//    _context.EventBanner.Add(new EventBanner {  
//                      EventID =2,
//                      Banner =  bytes,//System.Text.Encoding.ASCII.GetBytes(formData.Get("file"+c)),
//                      //IsActive=item[0].IsActive,
//              });   
//}

//NameValueCollection nvc=Convert(formData);
// foreach(var i=0;i<=MyNameValueCollection.Count-1;i++)
// {
//     _context.EventBanner.Add(new EventBanner {  
//                      EventID =2,
//                      Banner = System.Text.Encoding.ASCII.GetBytes(nv["file"+c]),
//                      //IsActive=item[0].IsActive,
//              });   

// }

            // _context.EventBanner.Add(new EventBanner {  
            //          EventID = item[0].EventID,
            //          Banner = item[0].Banner,
            //          IsActive=item[0].IsActive,
            //          //StartTime= item.StartTime,
            //          //EndTime=item.EndTime,  
                     
            //         // EventDescription = item.EventDescription,  
            //         // EventStartDate = item.EventStartDate,  
            //         // EventEndDate = item.EventEndDate,  
            //         // EventAddress = item.EventAddress,
            //         // EventStartTime=item.EventStartTime,
            //         // EventEndTime=item.EventEndTime,
            //         // EventVenueLatitude=item.EventVenueLatitude,
            //         // EventVenueLongitude=item.EventVenueLongitude,
            //         // CountryID=item.CountryID,
            //         // StateID=item.StateID,
            //         // CityID=item.CityID,
            //         // AreaID=item.AreaID,
            //         // IsActive=item.IsActive
            //         CreatedOn=DateTime.Now,
            //         UpdatedOn=DateTime.Now,
            //         CreatedBy=item[0].UserID,
            //         UpdatedBy=item[0].UserID,
            //         //item.CreatedBy
            //         //UpdatedBy=1,//item.UpdatedBy

                   
            // });  
           // _context.SaveChanges();  
        //     return Ok(new {  
        //         message = "Event Banner is added successfully."  
        //     });  
        // }  

    // [HttpPut("{id}")]
    // [Route("updateEventBanner")]
    // public IActionResult Update(long id,[FromBody] EventBannerModel[] item)
    // {
    //     if(item == null || id == 0)
    //     {
    //         return BadRequest();
    //     }
        
    //     var state1 = _context.EventBanner.FirstOrDefault(t => t.EventBannerID == id);
        
    //     if(state1 == null){
    //         return NotFound();
    //     }

    //         //DateTime starttime,endtime;
    //         //DateTime.TryParse(default(DateTime)+" "+ item.StartTime,out starttime);
    //         //DateTime.TryParse(default(DateTime)+" "+ item.EndTime,out endtime);

            
    //       state1.EventID = item[0].EventID;  
    //       state1.Banner = item[0].Banner;
    //        state1.IsActive = item[0].IsActive;
    //        state1.UpdatedOn=DateTime.Now;
    //        state1.UpdatedBy=item[0].UserID;//item.UpdatedBy;

    //     //  country1.EventDescription = item.EventDescription; 
    //     //  country1.EventStartDate = item.EventStartDate;  
    //     //  country1.EventEndDate = item.EventEndDate;  
    //     //  country1.EventAddress = item.EventAddress;
    //     //  country1.EventStartTime = item.EventStartTime;
    //     //  country1.EventEndTime=item.EventEndTime;
    //     //  country1.EventVenueLatitude = item.EventVenueLatitude;
    //     //  country1.EventVenueLongitude = item.EventVenueLongitude;
    //     //  country1.CountryID = item.CountryID;
    //     //  country1.StateID = item.StateID;
    //     //  country1.CityID = item.CityID;
    //     //  country1.AreaID = item.AreaID;
    //     // country1.IsActive = item.IsActive;

    //     _context.EventBanner.Update(state1);
    //      _context.SaveChanges();
    //     return Ok(new {  
    //              message = "Event Banner is updated successfully."  
    //         });


    // }

   

    // [HttpDelete("{id}")]  
    //     [Route("deleteEventBanner")]  
    // public IActionResult Delete(long id) {  
    //     var eventbanner = _context.EventBanners.FirstOrDefault(t => t.EventBannerID == id);  
    //     if (eventbanner == null) {  
    //         return NotFound();  
    //     }  
    //     _context.EventBanners.Remove(eventbanner);  
    //     _context.SaveChanges();  
    //     return Ok(new {  
    //         message = "Event Banner is deleted successfully."  
    //     });  
    // }  


}
}




 
