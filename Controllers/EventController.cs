using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kb_app.Models;
using Microsoft.AspNetCore.Mvc;
//using System.Web.Http;
using kb_app.DAL;


namespace kb_app.Controllers
{
    // set route attribute to make request as 'api/contact'  
[Route("kbapi/[controller]")]  
public class EventController: Controller {  
    private readonly KBAppContext _context;  
    // initiate database context  
    public EventController(KBAppContext context) {  
            _context = context;  
        }  



    [HttpGet]  
    [Route("getAllEvent")]  
    public IEnumerable < Event > GetAll() {  
            // fetch all contact records  
            return _context.Event.ToList();  
        }  


    [HttpGet("{id}")]  
    [Route("getEvent")]  
    public IActionResult GetById(long id) {  
            // filter contact records by contact id  
            var item = _context.Event.FirstOrDefault(t => t.EventID == id);  
            if (item == null) {  
                return NotFound();  
            }  
            return new ObjectResult(item);  
        }  
        
        
    [HttpPost]  
    [Route("addEvent")]  
  //public IActionResult Create([FromBody] Event item) {  
  public IActionResult Create([FromBody] Event item) {  
  //  public IActionResult Create(Event item) {  
            // set bad request if contact data is not provided in body  
            if (item == null) {  
                return BadRequest();  
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
                    IsActive=item.IsActive
                    //,message = item.message  
            });  
            _context.SaveChanges();  
            return Ok(new {  
                message = "Event is added successfully."  
            });  
        }  
    

    //      [HttpPut("{id}")]  
    //     [Route("updateContact")]  
    // // public IActionResult Update(long id, [FromBody] Event item) {  
    //         // set bad request if contact data is not provided in body  
    //         if (item == null || id == 0) {  
    //             return BadRequest();  
    //         }  
    //         var event = _context.Event.FirstOrDefault(t => t.EventID == id);  
    //         if (event == null) {  
    //             return NotFound();  
    //         }  
    //         event.EventName = item.EventName;  
    //         event.EventDescription = item.EventDescription;  
    //         event.EventStartDate = item.EventStartDate;  
    //         event.EventEndDate = item.EventEndDate;  
    //         event.EventAddress = item.EventAddress;  
    //         //event.message = item.message;  
    //         _context.Event.Update(event);  
    //         _context.SaveChanges();  
    //         return Ok(new {  
    //             message = "Event is updated successfully."  
    //         });  
    //     }

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
    //         message = "Contact is deleted successfully."  
    //     });  
    // }  


}
}




 
