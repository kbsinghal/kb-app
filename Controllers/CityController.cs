using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kb_app.Models;
using Microsoft.AspNetCore.Mvc;
using kb_app.DAL;


namespace kb_app.Controllers
{
    
[Route("kbapi/[controller]")]  // set route attribute to make request as 'api/city'  
public class CityController: Controller {  
    private readonly KBAppContext _context;  
    
    // initiate database context  
    public CityController(KBAppContext context) {  
            _context = context;  
        }  


    [HttpGet]  
    [Route("getAllCity")]  
    public IEnumerable <City> GetAll() {  
            
            return _context.City.ToList();  // fetch all city records  
        }  


    [HttpGet("{id}")]  
    [Route("getCity")]  
    public IActionResult GetById(long id) {  
            
            var item = _context.City.FirstOrDefault(t => t.CityID == id);  // filter city records by city id  
            if (item == null) {  
                return NotFound();  
            }  
            return new ObjectResult(item);  
        }  
        
        
    [HttpPost]  
    [Route("addCity")]  
  public IActionResult Create([FromBody] City item) {  
            
            if (item == null) {  
                return BadRequest();  // set bad request if country data is not provided in body  
            }  
            _context.City.Add(new City {  
                     CityName = item.CityName,
                     StateID = item.StateID,  
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
                    CreatedOn=DateTime.Now,
                    UpdatedOn=DateTime.Now,
                    CreatedBy=1,//item.CreatedBy
                    //UpdatedBy=1,//item.UpdatedBy

                   
            });  
            _context.SaveChanges();  
            return Ok(new {  
                message = "City is added successfully."  
            });  
        }  

    [HttpPut("{id}")]
    [Route("updateCity")]
    public IActionResult Update(long id,[FromBody] City item)
    {
        if(item == null || id == 0)
        {
            return BadRequest();
        }
        
        var city1 = _context.City.FirstOrDefault(t => t.CityID == id);
        
        if(city1 == null){
            return NotFound();
        }
            
          city1.CityName = item.CityName;  
          city1.StateID = item.StateID;  
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
         city1.UpdatedOn=DateTime.Now;
        city1.UpdatedBy=1;//item.UpdatedBy;

        _context.City.Update(city1);
         _context.SaveChanges();
        return Ok(new {  
                 message = "City is updated successfully."  
            });


    }

   

    // [HttpDelete("{id}")]  
    //     [Route("deleteCity")]  
    // public IActionResult Delete(long id) {  
    //     var city = _context.City.FirstOrDefault(t => t.CityID == id);  
    //     if (city == null) {  
    //         return NotFound();  
    //     }  
    //     _context.City.Remove(country);  
    //     _context.SaveChanges();  
    //     return Ok(new {  
    //         message = "City is deleted successfully."  
    //     });  
    // }  


}
}




 
