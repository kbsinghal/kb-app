using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kb_app.Models;
using Microsoft.AspNetCore.Mvc;
using kb_app.DAL;


namespace kb_app.Controllers
{
    
[Route("kbapi/[controller]")]  // set route attribute to make request as 'api/area'  
public class AreaController: Controller {  
    private readonly KBAppContext _context;  
    
    // initiate database context  
    public AreaController(KBAppContext context) {  
            _context = context;  
        }  


    [HttpGet]  
    [Route("getAllArea")]  
    public IEnumerable <Area> GetAll() {  
            
            return _context.Area.ToList();  // fetch all Area records  
        }  


    [HttpGet("{id}")]  
    [Route("getArea")]  
    public IActionResult GetById(long id) {  
            
            var item = _context.Area.FirstOrDefault(t => t.AreaID == id);  // filter Area records by Area id  
            if (item == null) {  
                return NotFound();  
            }  
            return new ObjectResult(item);  
        }  
        
        
    [HttpPost]  
    [Route("addArea")]  
  public IActionResult Create([FromBody] Area item) {  
            
            if (item == null) {  
                return BadRequest();  // set bad request if Area data is not provided in body  
            }  
            _context.Area.Add(new Area {  
                     AreaName = item.AreaName,
                     CityID = item.CityID,  
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
                message = "Area is added successfully."  
            });  
        }  

    [HttpPut("{id}")]
    [Route("updateArea")]
    public IActionResult Update(long id,[FromBody] Area item)
    {
        if(item == null || id == 0)
        {
            return BadRequest();
        }
        
        var area1 = _context.Area.FirstOrDefault(t => t.AreaID == id);
        
        if(area1 == null){
            return NotFound();
        }
            
          area1.AreaName = item.AreaName;  
          area1.CityID = item.CityID;  
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
         area1.UpdatedOn=DateTime.Now;
        area1.UpdatedBy=1;//item.UpdatedBy;

        _context.Area.Update(area1);
         _context.SaveChanges();
        return Ok(new {  
                 message = "Area is updated successfully."  
            });


    }

   

    // [HttpDelete("{id}")]  
    //     [Route("deleteArea")]  
    // public IActionResult Delete(long id) {  
    //     var area = _context.City.FirstOrDefault(t => t.AreaID == id);  
    //     if (area == null) {  
    //         return NotFound();  
    //     }  
    //     _context.Area.Remove(area);  
    //     _context.SaveChanges();  
    //     return Ok(new {  
    //         message = "Area is deleted successfully."  
    //     });  
    // }  


}
}




 
