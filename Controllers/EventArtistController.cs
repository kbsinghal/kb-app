using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kb_app.Models;
using Microsoft.AspNetCore.Mvc;
using kb_app.DAL;
using System.Reflection;

namespace kb_app.Controllers
{
    
[Route("kbapi/[controller]")]  // set route attribute to make request as 'api/EventArtist'  
public class EventArtistController: Controller {  
    private readonly KBAppContext _context;  
    
    // initiate database context  
    public EventArtistController(KBAppContext context) {  
            _context = context;  
        }  


    [HttpGet]  
    [Route("getAllEventArtist")]  
    public List<EventArtistModel> GetAll() {  
            
             
             List<EventArtistModel> lstEventArtistModel=new List<EventArtistModel>();
             List<Event> lstEvent=_context.Event.ToList();
             List<Entity> lstArtist=_context.Entity.ToList();
             List<EventArtist> lstEventArtist=_context.EventArtist.ToList();

            //return _context.State.ToList();  // fetch all state records 
          //_context.State.ToList().ForEach(aa=>{StateModel stateModel=new StateModel();stateModel.StateID=aa.StateID;stateModel.CountryID=aa.CountryID; stateModel.StateName=aa.StateName;lstStateModel.Add(stateModel);});  // fetch all state records  

           //DateTime parsedTimeObj;

          lstEventArtistModel= (from le in lstEvent join lea in lstEventArtist on le.EventID equals lea.EventID 
                                 join la in lstArtist on lea.ArtistID equals la.EntityID             


           select new EventArtistModel(){
               
               EventArtistID=lea.EventArtistID,
               EventID = le.EventID, 
               EventName = le.EventName, 
               ArtistID=la.EntityID,
               ArtistName= la.Name,
               IsActive=lea.IsActive,
               StartTime=lea.StartTime,
               EndTime=lea.EndTime,
               //StartTime=lea.StartTime==null?string.Empty:lea.StartTime.ToShortTimeString();


               //StartTime=(DateTime.TryParse(lea.StartTime, out parsedTimeObj)) ? parsedTimeObj.Value.ToShortTimeString() : string.Empty;


               //EndTime=lea.EndTime==null?string.Empty:Convert.ToString(lea.EndTime,"hh:mm:ss"),
               }).ToList<EventArtistModel>();
             return lstEventArtistModel;

        }  


    [HttpGet("{id}")]  
    [Route("getEventArtist")]  
    public IActionResult GetById(long id) {  
            
            //var item = _context.State.FirstOrDefault(t => t.StateID == id);  // filter state records by state id  
            EventArtist st=_context.EventArtist.Where<EventArtist>(t => t.EventArtistID == id).FirstOrDefault();
            
            EventArtistModel item=null;

            if (st == null) {  
                return NotFound();  
            }  
            else
            {
                 item=new EventArtistModel();
                item.EventArtistID=st.EventArtistID;
                item.EventID=st.EventID;
                item.ArtistID=st.ArtistID;
                item.StartTime=st.StartTime;
                item.EndTime=st.EndTime;
                item.IsActive=st.IsActive;
                //item.StateName=st.StateName;
                
            }
            return new ObjectResult(item);  
        }  
      
    [HttpPost]  
    [Route("addEventArtist")]  
  public IActionResult Create([FromBody] EventArtistModel item) {  
            
            if (item == null) {  
                return BadRequest();  // set bad request if country data is not provided in body  
            }  
            //DateTime starttime,endtime;
            //DateTime.TryParse(default(DateTime)+" "+ item.StartTime,out starttime);
            //DateTime.TryParse(default(DateTime)+" "+ item.EndTime,out endtime);

            _context.EventArtist.Add(new EventArtist {  
                     ArtistID = item.ArtistID,
                     EventID = item.EventID,
                     StartTime= item.StartTime,
                     EndTime=item.EndTime,  
                     IsActive=item.IsActive,
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
                message = "EventArtist is added successfully."  
            });  
        }  

    [HttpPut("{id}")]
    [Route("updateEventArtist")]
    public IActionResult Update(long id,[FromBody] EventArtistModel item)
    {
        if(item == null || id == 0)
        {
            return BadRequest();
        }
        
        var state1 = _context.EventArtist.FirstOrDefault(t => t.EventArtistID == id);
        
        if(state1 == null){
            return NotFound();
        }

            //DateTime starttime,endtime;
            //DateTime.TryParse(default(DateTime)+" "+ item.StartTime,out starttime);
            //DateTime.TryParse(default(DateTime)+" "+ item.EndTime,out endtime);

            
          state1.EventID = item.EventID;  
          state1.ArtistID = item.ArtistID;
           state1.StartTime = item.StartTime;//item.StartTime.ToString();
           state1.EndTime = item.EndTime;
           state1.IsActive = item.IsActive;
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

        _context.EventArtist.Update(state1);
         _context.SaveChanges();
        return Ok(new {  
                 message = "EventArtist is updated successfully."  
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




 
