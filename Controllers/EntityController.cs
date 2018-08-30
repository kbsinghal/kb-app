using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kb_app.Models;
using Microsoft.AspNetCore.Mvc;
using kb_app.DAL;


namespace kb_app.Controllers
{
    
[Route("kbapi/[controller]")]  // set route attribute to make request as 'api/entity'  
public class EntityController: Controller {  
    private readonly KBAppContext _context;  
    
    // initiate database context  
    public EntityController(KBAppContext context) {  
            _context = context;  
        }  



    [HttpGet]  
    [Route("getAllEntity")]  
    public IEnumerable <Entity> GetAll() {  
            
            return _context.Entity.ToList();  // fetch all entity records  
        }  


    [HttpGet("{id}")]  
    [Route("getEntity")]  
    public IActionResult GetById(long id) {  
            
            var item = _context.Entity.FirstOrDefault(t => t.EntityID == id);  // filter entity records by entity id  
            if (item == null) {  
                return NotFound();  
            }  
            return new ObjectResult(item);  
        }  
        
        
    [HttpPost]  
    [Route("addEntity")]  
  public IActionResult Create([FromBody] Entity item) {  
            
            if (item == null) {  
                return BadRequest();  // set bad request if entity data is not provided in body  
            }  
            _context.Entity.Add(new Entity {  
                     Name = item.Name,  
                     FirstName = item.FirstName,
                     MiddleName = item.MiddleName,
                     LastName = item.LastName,
                     NickName = item.NickName,
                     Description = item.Description,
                     //IsRegistered = item.IsRegistered,
                     RegisteredAddress = item.RegisteredAddress,
                     RegisteredCityID = item.RegisteredCityID,
                     RegisteredStateID = item.RegisteredStateID,
                     RegisteredAreaID = item.RegisteredAreaID,
                     RegisteredCountryID = item.RegisteredCountryID,
                     EmailAddress = item.EmailAddress,
                     WebsiteAddress = item.WebsiteAddress,
                     FacebookAddress = item.FacebookAddress,
                     YouTubeAddress = item.YouTubeAddress,
                     TwitterAddress = item.TwitterAddress,
                     GooglePlusAddress = item.GooglePlusAddress,
                     IsActive = item.IsActive
                    // EventDescription = item.EventDescription,  
                    // EventStartDate = item.EventStartDate,  
                    // EventEndDate = item.EventEndDate,  
                    // EventAddress = item.EventAddress,
                    // EventStartTime=item.EventStartTime,
                    // EventEndTime=item.EventEndTime,
                    // EventVenueLatitude=item.EventVenueLatitude,
                    // EventVenueLongitude=item.EventVenueLongitude,
                    // CountryID=item.CountryID,
                    // StateID=item.StateID,
                    // CityID=item.CityID,
                    // AreaID=item.AreaID,
                    // IsActive=item.IsActive
                    //CreatedOn=DateTime.Now,
                    //CreatedBy=item.CreatedBy
            });  
            _context.SaveChanges();  
            return Ok(new {  
                message = "Entity is added successfully."  
            });  
        }  

    [HttpPut("{id}")]
    [Route("updateEntity")]
    public IActionResult Update(long id,[FromBody] Entity item)
    {
        if(item == null || id == 0)
        {
            return BadRequest();
        }
        
        var entity1 = _context.Entity.FirstOrDefault(t => t.EntityID == id);
        
        if(entity1 == null){
            return NotFound();
        }



         entity1.Name = item.Name;
         entity1.FirstName = item.FirstName;
         entity1.MiddleName = item.MiddleName;
         entity1.LastName = item.LastName;
         entity1.NickName = item.NickName;
         entity1.Description = item.Description;
         entity1.IsRegistered = item.IsRegistered;
         entity1.RegisteredAddress = item.RegisteredAddress;
         entity1.RegisteredCityID = item.RegisteredCityID;
         entity1.RegisteredStateID = item.RegisteredStateID;
         entity1.RegisteredAreaID = item.RegisteredAreaID;
         entity1.RegisteredCountryID = item.RegisteredCountryID;
         entity1.EmailAddress = item.EmailAddress;
         entity1.WebsiteAddress = item.WebsiteAddress;
         entity1.FacebookAddress = item.FacebookAddress;
         entity1.YouTubeAddress = item.YouTubeAddress;
         entity1.TwitterAddress = item.TwitterAddress;
         entity1.GooglePlusAddress = item.GooglePlusAddress;
         entity1.IsActive = item.IsActive;

        //  entity1.EventName = item.EventName;  
        //  entity1.EventDescription = item.EventDescription; 
        //  entity1.EventStartDate = item.EventStartDate;  
        //  entity1.EventEndDate = item.EventEndDate;  
        //  entity1.EventAddress = item.EventAddress;
        //  entity1.EventStartTime = item.EventStartTime;
        //  entity1.EventEndTime=item.EventEndTime;
        //  entity1.EventVenueLatitude = item.EventVenueLatitude;
        //  entity1.EventVenueLongitude = item.EventVenueLongitude;
        //  entity1.CountryID = item.CountryID;
        //  entity1.StateID = item.StateID;
        //  entity1.CityID = item.CityID;
        //  entity1.AreaID = item.AreaID;
        // entity1.IsActive = item.IsActive;
         //event1.UpdatedOn=DateTime.Now;
        //event1.UpdatedBy=item.UpdatedBy;

        _context.Entity.Update(entity1);
         _context.SaveChanges();
        return Ok(new {  
                 message = "Entity is updated successfully."  
            });


    }

   

    // [HttpDelete("{id}")]  
    // [Route("deleteEntity")]  
    // public IActionResult Delete(long id) {  
    //     var entity = _context.Entity.FirstOrDefault(t => t.EntityID == id);  
    //     if (entity == null) {  
    //         return NotFound();  
    //     }  
    //     _context.Entity.Remove(entity);  
    //     _context.SaveChanges();  
    //     return Ok(new {  
    //         message = "Entity is deleted successfully."  
    //     });  
    // }  


}
}




 
