using System;
using System.Collections.Generic;
using System.Linq;
//using System.Threading.Tasks;
using kb_app.Models;
using Microsoft.AspNetCore.Mvc;
//using kb_app.DAL;
//using System.Reflection;

namespace kb_app.Controllers
{
    
[Route("kbapi/[controller]")]  // set route attribute to make request as 'api/state'  
public class StateController: Controller {  
    private readonly KBAppContext _context;  
    
    // initiate database context  
    public StateController(KBAppContext context) {  
            _context = context;  
        }  


    [HttpGet]  
    [Route("getAllState")]  
    public List<StateModel> GetAll() {  
            
             
             List<StateModel> lstStateModel=new List<StateModel>();
             List<Country> lstCountry=_context.Country.ToList();
             List<State> lstState=_context.State.ToList();

            //return _context.State.ToList();  // fetch all state records 
          //_context.State.ToList().ForEach(aa=>{StateModel stateModel=new StateModel();stateModel.StateID=aa.StateID;stateModel.CountryID=aa.CountryID; stateModel.StateName=aa.StateName;lstStateModel.Add(stateModel);});  // fetch all state records  

          lstStateModel= (from lc in lstCountry join ls in lstState on lc.CountryID equals ls.CountryID  select new StateModel(){StateID = ls.StateID, StateName = ls.StateName, CountryID=lc.CountryID,CountryName= lc.CountryName}).ToList<StateModel>();
             return lstStateModel;

        }  


    [HttpGet("{id}")]  
    [Route("getState")]  
    public IActionResult GetById(long id) {  
            
            //var item = _context.State.FirstOrDefault(t => t.StateID == id);  // filter state records by state id  
            State st=_context.State.Where<State>(t => t.StateID == id).FirstOrDefault();
            
            StateModel item=null;

            if (st == null) {  
                return NotFound();  
            }  
            else
            {
                 item=new StateModel();
                item.CountryID=st.CountryID;
                item.StateID=st.StateID;
                item.StateName=st.StateName;
                
            }
            return new ObjectResult(item);  
        }  
      
    [HttpPost]  
    [Route("addState")]  
  public IActionResult Create([FromBody] StateModel item) {  
            
            if (item == null) {  
                return BadRequest();  // set bad request if country data is not provided in body  
            }  
            _context.State.Add(new State {  
                     StateName = item.StateName,
                     CountryID = item.CountryID,  
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
                message = "State is added successfully."  
            });  
        }  

    [HttpPut("{id}")]
    [Route("updateState")]
    public IActionResult Update(long id,[FromBody] StateModel item)
    {
        if(item == null || id == 0)
        {
            return BadRequest();
        }
        
        var state1 = _context.State.FirstOrDefault(t => t.StateID == id);
        
        if(state1 == null){
            return NotFound();
        }
            
          state1.StateName = item.StateName;  
          state1.CountryID = item.CountryID;  
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
         state1.UpdatedOn=DateTime.Now;
        state1.UpdatedBy=item.UserID;//item.UpdatedBy;

        _context.State.Update(state1);
         _context.SaveChanges();
        return Ok(new {  
                 message = "State is updated successfully."  
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




 
