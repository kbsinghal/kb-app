using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kb_app.Models;
using Microsoft.AspNetCore.Mvc;
using kb_app.DAL;


namespace kb_app.Controllers
{
    
[Route("kbapi/[controller]")]  // set route attribute to make request as 'api/event'  
public class EventController: Controller {  
    private readonly KBAppContext _context;  
    
    // initiate database context  
    public EventController(KBAppContext context) {  
            _context = context;  
        }  



    [HttpGet]  
    [Route("getAllEvent")]  
    public List<EventModel> GetAll() {  
            
            //return _context.Event.ToList();  // fetch all event records  

            List<EventModel> lstEventModel=new List<EventModel>();
             List<Country> lstCountry=_context.Country.ToList();
             List<State> lstState=_context.State.ToList();
             List<City> lstCity=_context.City.ToList();
             List<Area> lstArea=_context.Area.ToList();
             List<Event> lstEvent=_context.Event.ToList();
          

          lstEventModel= (
                          from e in lstEvent join a in lstArea on e.AreaID equals a.AreaID 
                          join lci in lstCity on a.CityID equals lci.CityID
                          join  ls in lstState  on lci.StateID equals ls.StateID
                          join   lc in lstCountry  on ls.CountryID  equals lc.CountryID  

                          select new EventModel(){
                              EventID = e.EventID,  
                              EventName = e.EventName,  
                              EventDescription = e.EventDescription,  
                              EventStartDate = e.EventStartDate,
                              EventEndDate = e. EventEndDate,
                              EventStartTime = e.EventStartTime,  
                              EventEndTime = e.EventEndTime,  
                              EventAddress = e.EventAddress,
                              EventVenueLatitude = e.EventVenueLatitude,
                              EventVenueLongitude = e.EventVenueLongitude,
                              AreaID = a.AreaID, 
                              AreaName = a.AreaName, 
                              CityID = lci.CityID, 
                              CityName = lci.CityName, 
                              StateID = ls.StateID, 
                              StateName = ls.StateName, 
                              CountryID =lc.CountryID, 
                              CountryName = lc.CountryName,
                              IsActive=e.IsActive
                              }).ToList<EventModel>();
             return lstEventModel;
        }  


    [HttpGet("{id}")]  
    [Route("getEvent")]  
    public IActionResult GetById(long id) {  
            
            // var item = _context.Event.FirstOrDefault(t => t.EventID == id);  // filter event records by event id  
            // if (item == null) {  
            //     return NotFound();  
            // }  
            // return new ObjectResult(item);  

              Event et=_context.Event.Where<Event>(t => t.EventID == id).FirstOrDefault();
            
            EventModel item=null;

            if (et == null) {  
                return NotFound();  
            }  
            else
            {
                 item=new EventModel();
                item.EventID=et.EventID;
                item.EventName=et.EventName;
                item.EventDescription=et.EventDescription;
                item.EventStartDate=et.EventStartDate;
                item.EventEndDate=et.EventEndDate;
                item.EventStartTime=et.EventStartTime;
                item.EventEndTime=et.EventEndTime;
                item.EventAddress=et.EventAddress;
                item.EventVenueLatitude=et.EventVenueLatitude;
                item.EventVenueLongitude=et.EventVenueLongitude;
                item.CountryID=et.CountryID;
                //item.CountryName=et.CountryName;
                item.StateID=et.StateID;
                //item.StateName=et.StateName;
                item.CityID=et.CityID;
                //item.CityName=et.CityName;
                item.AreaID=et.AreaID;
                //item.AreaName=et.AreaName;
                item.IsActive=et.IsActive;

            }
            
            return new ObjectResult(item);   
        }  
        
        
    [HttpPost]  
    [Route("addEvent")]  
  public IActionResult Create([FromBody] EventModel item) {  
            
            if (item == null) {  
                return BadRequest();  // set bad request if event data is not provided in body  
            }  
            _context.Event.Add(new Event {  
                    EventName = item.EventName,  
                    EventDescription = item.EventDescription,  
                    EventStartDate = item.EventStartDate,  
                    EventEndDate = item.EventEndDate,  
                    EventAddress = item.EventAddress,
                    EventStartTime=item.EventStartTime,
                    EventEndTime=item.EventEndTime,
                    EventVenueLatitude=item.EventVenueLatitude,
                    EventVenueLongitude=item.EventVenueLongitude,
                    CountryID=item.CountryID,
                    StateID=item.StateID,
                    CityID=item.CityID,
                    AreaID=item.AreaID,
                    IsActive=item.IsActive,
                    CreatedOn=DateTime.Now,
                    CreatedBy=item.UserID
            });  
            _context.SaveChanges();  
            return Ok(new {  
                message = "Event is added successfully."  
            });  
        }  

    [HttpPut("{id}")]
    [Route("updateEvent")]
    public IActionResult Update(long id,[FromBody] EventModel item)
    {
        if(item == null || id == 0)
        {
            return BadRequest();
        }
        
        var event1 = _context.Event.FirstOrDefault(t => t.EventID == id);
        
        if(event1 == null){
            return NotFound();
        }

         event1.EventName = item.EventName;  
         event1.EventDescription = item.EventDescription; 
         event1.EventStartDate = item.EventStartDate;  
         event1.EventEndDate = item.EventEndDate;  
         event1.EventAddress = item.EventAddress;
         event1.EventStartTime = item.EventStartTime;
         event1.EventEndTime=item.EventEndTime;
         event1.EventVenueLatitude = item.EventVenueLatitude;
         event1.EventVenueLongitude = item.EventVenueLongitude;
         event1.CountryID = item.CountryID;
         event1.StateID = item.StateID;
         event1.CityID = item.CityID;
         event1.AreaID = item.AreaID;
        event1.IsActive = item.IsActive;
        event1.UpdatedOn=DateTime.Now;
        event1.UpdatedBy=item.UserID;//item.UpdatedBy;
        

        _context.Event.Update(event1);
         _context.SaveChanges();
        return Ok(new {  
                 message = "Event is updated successfully."  
            });


    }

   

    // [HttpDelete("{id}")]  
    //     [Route("deleteEvent")]  
    // public IActionResult Delete(long id) {  
    //     var event = _context.Event.FirstOrDefault(t => t.EventID == id);  
    //     if (event == null) {  
    //         return NotFound();  
    //     }  
    //     _context.Event.Remove(event);  
    //     _context.SaveChanges();  
    //     return Ok(new {  
    //         message = "Event is deleted successfully."  
    //     });  
    // }  


}
}




 
