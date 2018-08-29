using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kb_app.Models;
using Microsoft.AspNetCore.Mvc;
using kb_app.DAL;


namespace kb_app.Controllers
{
    
[Route("kbapi/[controller]")]  // set route attribute to make request as 'api/country'  
public class CountryController: Controller {  
    private readonly KBAppContext _context;  
    
    // initiate database context  
    public CountryController(KBAppContext context) {  
            _context = context;  
        }  



    [HttpGet]  
    [Route("getAllCountry")]  
    public IEnumerable <Country> GetAll() {  
            
            return _context.Country.ToList();  // fetch all country records  
        }  


    [HttpGet("{id}")]  
    [Route("getCountry")]  
    public IActionResult GetById(long id) {  
            
            var item = _context.Country.FirstOrDefault(t => t.CountryID == id);  // filter country records by country id  
            if (item == null) {  
                return NotFound();  
            }  
            return new ObjectResult(item);  
        }  
        
        
    [HttpPost]  
    [Route("addCountry")]  
  public IActionResult Create([FromBody] Country item) {  
            
            if (item == null) {  
                return BadRequest();  // set bad request if country data is not provided in body  
            }  
            _context.Country.Add(new Country {  
                     CountryName = item.CountryName,  
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
                message = "Country is added successfully."  
            });  
        }  

    [HttpPut("{id}")]
    [Route("updateCountry")]
    public IActionResult Update(long id,[FromBody] Country item)
    {
        if(item == null || id == 0)
        {
            return BadRequest();
        }
        
        var country1 = _context.Country.FirstOrDefault(t => t.CountryID == id);
        
        if(country1 == null){
            return NotFound();
        }
            
          country1.CountryName = item.CountryName;  
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
         country1.UpdatedOn=DateTime.Now;
        country1.UpdatedBy=1;//item.UpdatedBy;

        _context.Country.Update(country1);
         _context.SaveChanges();
        return Ok(new {  
                 message = "Country is updated successfully."  
            });


    }

   

    // [HttpDelete("{id}")]  
    //     [Route("deleteCountry")]  
    // public IActionResult Delete(long id) {  
    //     var country = _context.Country.FirstOrDefault(t => t.CountryID == id);  
    //     if (country == null) {  
    //         return NotFound();  
    //     }  
    //     _context.Country.Remove(country);  
    //     _context.SaveChanges();  
    //     return Ok(new {  
    //         message = "Country is deleted successfully."  
    //     });  
    // }  


}
}




 
