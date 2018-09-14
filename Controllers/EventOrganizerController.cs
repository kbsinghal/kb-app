using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kb_app.Models;
using Microsoft.AspNetCore.Mvc;
using kb_app.DAL;
using Microsoft.EntityFrameworkCore;


namespace kb_app.Controllers
{
    
[Route("kbapi/[controller]")]  // set route attribute to make request as 'api/eventorganizer'  
public class EventOrganizerController: Controller {  
    private readonly KBAppContext _context;  
    
    // initiate database context  
    public EventOrganizerController(KBAppContext context) {  
            _context = context;  
        }  


    [HttpGet]  
    [Route("getAllEventOrganizer")]  
    public List<EventOrganizerModel> GetAll() {  
            
            //return _context.EventOrganizer.ToList();  // fetch all EventOrganizer records  
            // var o= _context.EventOrganizer.GroupBy(p => p.EventID)
            //        .Select(g => new { EventID = g.EventID, EntityID = g.Count() });

            EventOrganizerModel objEventOrganizerModel;//; = new EventOrganizerModel();

           List<int> lstEventID = _context.EventOrganizer.Select(p=>p.EventID).Distinct().ToList();
           List<EventOrganizer> lstEventOrganizer = _context.EventOrganizer.ToList();
           List<Entity> lstEntity=_context.Entity.ToList();
           List<EventOrganizerModel> lstEventOrganizerModel=new List<EventOrganizerModel>();
           List<Event> lstEvent=_context.Event.ToList();

           foreach (int eventid in lstEventID)
           {
           objEventOrganizerModel = new EventOrganizerModel();
           
           objEventOrganizerModel.EventID=eventid;
           
           objEventOrganizerModel.EventName=lstEvent.FirstOrDefault(e=> e.EventID==eventid).EventName;
           objEventOrganizerModel.EventOrganizerID=eventid;

           objEventOrganizerModel.EntityList= (from le in lstEntity join leo in lstEventOrganizer on le.EntityID equals leo.EntityID where leo.EventID == eventid select new Entity(){EntityID = le.EntityID, Name = le.Name}).ToList<Entity>();
           

          var aa=(from le in lstEntity join leo in lstEventOrganizer on le.EntityID equals leo.EntityID where leo.EventID == eventid select le.EntityID).ToList();

           objEventOrganizerModel.EntityIDs=aa.Select( n => Convert.ToInt32(n)).ToArray();

           
           lstEventOrganizerModel.Add(objEventOrganizerModel);
           }
         return lstEventOrganizerModel;
        }  


    [HttpGet("{id}")]  
    [Route("getEventOrganizer")]  
    public IActionResult GetById(long id) {  
            
            //List<EventOrganizer> item = _context.EventOrganizer.Where(t => t.EventOrganizerID == id).ToList();  // filter EventOrganizer records by EventOrganizer id  
         //   EventOrganizerModel item = _context.EventOrganizer.Where(t => t.EventOrganizerID == id);  // filter EventOrganizer records by EventOrganizer id  

          EventOrganizerModel objEventOrganizerModel;//; = new EventOrganizerModel();
        List<EventOrganizer> lstEventOrganizer = _context.EventOrganizer.Where(a=>a.EventID==id).ToList();
           List<Entity> lstEntity=_context.Entity.ToList();
           

           
           objEventOrganizerModel = new EventOrganizerModel();
           
           objEventOrganizerModel.EventID=(int)id;
           objEventOrganizerModel.EntityList=new List<Entity>();
           objEventOrganizerModel.EventName=string.Empty;

           //objEventOrganizerModel.EntityList= (from le in lstEntity join leo in lstEventOrganizer on le.EntityID equals leo.EntityID where leo.EventID == id select new Entity(){EntityID = le.EntityID, Name = le.Name}).ToList<Entity>();
//objEventOrganizerModel.EntityIDs
           
          //var aa = 

          //int[] ia = aa.
           
           //int[] ints = aa.Select(x => int.Parse(x)).ToArray();

var aa=(from le in lstEntity join leo in lstEventOrganizer on le.EntityID equals leo.EntityID where leo.EventID == id select le.EntityID).ToList();
           //objEventOrganizerModel.EntityIDs=aa.Select( n => Convert.ToInt32(n)).ToArray();
           objEventOrganizerModel.EntityIDs=aa.Select( n => Convert.ToInt32(n)).ToArray();
           
            if (objEventOrganizerModel == null) {  
                return NotFound();  
            }  
            return new ObjectResult(objEventOrganizerModel);  
        }  
        
        
    [HttpPost]  
    [Route("addEventOrganizer")]  
  public IActionResult Create([FromBody] EventOrganizerModel item) {  
            
            if (item == null) {  
                return BadRequest();  // set bad request if EventOrganizer data is not provided in body  
            }  
foreach(int e in item.EntityIDs){
    _context.EventOrganizer.Add( new EventOrganizer {  
                    EventID=item.EventID,
                     EntityID=e,
                     CreatedOn=DateTime.Now,
                    UpdatedOn=DateTime.Now,
                    CreatedBy=item.UserID
    });
            _context.SaveChanges();  }
            
            // _context.EventOrganizer.Add(new EventOrganizer {  
            //          //AreaName = item.AreaName,
            //          //CityID = item.CityID,  
            //          EventID=item.EventID,
            //          EntityID=item.EntityID,
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
            //         CreatedBy=1,//item.CreatedBy
            //         //UpdatedBy=1,//item.UpdatedBy

                   
            // });  
            return Ok(new {  
                message = "EventOrganizer is added successfully."  
            });  
        }  

    [HttpPut("{id}")]
    [Route("updateEventOrganizer")]
    public IActionResult Update(long id,[FromBody] EventOrganizerModel item)
    {
        if(item == null || id == 0)
        {
            return BadRequest();
        }
        
        /*var eventOrganizer1 = _context.EventOrganizer.FirstOrDefault(t => t.EventID == id);
        
        if(eventOrganizer1 == null){
            return NotFound();
        }*/
        _context.EventOrganizer.RemoveRange(_context.EventOrganizer.Where(aa=>aa.EventID == id));
        _context.SaveChanges();  

           foreach(int eid in item.EntityIDs){
                    _context.EventOrganizer.Add( new EventOrganizer {  
                    EventID=item.EventID,
                     EntityID=eid,
                     CreatedOn=DateTime.Now,
                    UpdatedOn=DateTime.Now,
                    CreatedBy=item.UserID,
            });
          }
        _context.SaveChanges();
         
        //  country1.EventDescription = item.EventDescription; 
        //  country1.EventStartDate = item.EventStartDate;  
        //  country1.EventEndDate = item.EventEndDate;  
        //  country1.EventAddress = item.EventAddress;
        //  country1.EventStartTime = item.EventStartTime;
        //  country1.EventEndTime=item.EventEndTime;
        //  country1.EventVenueLatitude = item.EventVenueLatitude;
        //  country1.EventVenueLongitude = item.EventVenueLongitude;
        //  country1.CountryID = item.CountryID;
        //  country1.StateID = item.StateID;
        //  country1.CityID = item.CityID;
        //  country1.AreaID = item.AreaID;
        // country1.IsActive = item.IsActive;
        //item.UpdatedBy;

        
        return Ok(new {  
                 message = "EventOrganizer is updated successfully."  
            });


    }

   

    // [HttpDelete("{id}")]  
    //     [Route("deleteEventOrganizer")]  
    // public IActionResult Delete(long id) {  
    //     var eventOrganizer1 = _context.City.FirstOrDefault(t => t.EventOrganizerID == id);  
    //     if (eventOrganizer1 == null) {  
    //         return NotFound();  
    //     }  
    //     _context.EventOrganizer.Remove(eventOrganizer1);  
    //     _context.SaveChanges();  
    //     return Ok(new {  
    //         message = "EventOrganizer is deleted successfully."  
    //     });  
    // }  


}
}




 
