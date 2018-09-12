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
    public List<AreaModel> GetAll() {  
            
            //return _context.Area.ToList();  // fetch all Area records  

              List<AreaModel> lstAreaModel=new List<AreaModel>();
             List<Country> lstCountry=_context.Country.ToList();
             List<State> lstState=_context.State.ToList();
             List<City> lstCity=_context.City.ToList();
             List<Area> lstArea=_context.Area.ToList();

          

          lstAreaModel= (from a in lstArea 
                          join lci in lstCity on a.CityID equals lci.CityID
                          join  ls in lstState  on lci.StateID equals ls.StateID
                          join   lc in lstCountry  on ls.CountryID  equals lc.CountryID  

                          select new AreaModel(){AreaID=a.AreaID, AreaName=a.AreaName, CityID=lci.CityID, CityName = lci.CityName, StateID = ls.StateID, StateName = ls.StateName, CountryID=lc.CountryID, CountryName= lc.CountryName}).ToList<AreaModel>();
             return lstAreaModel;
        }  


    [HttpGet("{id}")]  
    [Route("getArea")]  
    public IActionResult GetById(long id) {  
            
            // var item = _context.Area.FirstOrDefault(t => t.AreaID == id);  // filter Area records by Area id  
            // if (item == null) {  
            //     return NotFound();  
            // }  
            // return new ObjectResult(item); 

              Area ar=_context.Area.Where<Area>(t => t.AreaID == id).FirstOrDefault();
            
            AreaModel item=null;

            if (ar == null) {  
                return NotFound();  
            }  
            else
            {
                 item=new AreaModel();
                item.CityID=ar.CityID;
                item.AreaID=ar.AreaID;
                item.AreaName=ar.AreaName;
                
            }
            return new ObjectResult(item);   
        }  
        
        
    [HttpPost]  
    [Route("addArea")]  
  public IActionResult Create([FromBody] AreaModel item) {  
            
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
                    CreatedBy=item.UserID,//item.CreatedBy
                    //UpdatedBy=1,//item.UpdatedBy

                   
            });  
            _context.SaveChanges();  
            return Ok(new {  
                message = "Area is added successfully."  
            });  
        }  

    [HttpPut("{id}")]
    [Route("updateArea")]
    public IActionResult Update(long id,[FromBody] AreaModel item)
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
        area1.UpdatedBy=item.UserID;//item.UpdatedBy;

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




 
