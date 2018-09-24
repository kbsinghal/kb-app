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
    public IEnumerable <EntityModel> GetAll() {  
            
            //return _context.Entity.ToList();  // fetch all entity records  

             List<EntityModel> lstEntityModel=new List<EntityModel>();
             List<Area> lstArea=_context.Area.ToList();
             List<Country> lstCountry=_context.Country.ToList();
             List<State> lstState=_context.State.ToList();
             List<City> lstCity=_context.City.ToList();
             List<Entity> lstEntity=_context.Entity.ToList();


            //return _context.State.ToList();  // fetch all state records 
          //_context.State.ToList().ForEach(aa=>{StateModel stateModel=new StateModel();stateModel.StateID=aa.StateID;stateModel.CountryID=aa.CountryID; stateModel.StateName=aa.StateName;lstStateModel.Add(stateModel);});  // fetch all state records  

          lstEntityModel= (from en in lstEntity join ar in lstArea on en.RegisteredAreaID equals ar.AreaID
                            join ci in lstCity on ar.CityID equals ci.CityID
                            join st in lstState on ci.StateID equals st.StateID
                            join co in lstCountry on st.CountryID equals co.CountryID
          
                            //lc in lstCountry join ls in lstState on lc.CountryID equals ls.CountryID  
                           //join ct in lstCity on ls.StateID equals ct.StateID 
                           //join ar in lstArea on ct.CityID equals ar.CityID
                           //join et in lstEntity on ar.CityID equals et.RegisteredCityID  
          select new EntityModel()
          {
          RegisteredCountryID=co.CountryID,
          CountryName= co.CountryName,    
          RegisteredStateID = st.StateID, 
          StateName = st.StateName, 
          RegisteredCityID=ci.CityID,
          CityName = ci.CityName,
          RegisteredAreaID=ar.AreaID,
          AreaName = ar.AreaName,
          Name = en.Name,
          FirstName = en.FirstName,
          MiddleName = en.MiddleName,
          LastName = en.LastName,
          NickName = en.NickName,
          Description = en.Description,
          EntityType = en.EntityType,
          IsRegistered = en.IsRegistered,
          RegisteredAddress= en.RegisteredAddress,
          EmailAddress = en.EmailAddress,
          WebsiteAddress = en.WebsiteAddress,
          Logo = en.Logo,
          FacebookAddress = en.FacebookAddress,
          YouTubeAddress = en.YouTubeAddress,
          TwitterAddress = en.TwitterAddress,
           GooglePlusAddress = en.GooglePlusAddress,
           IsActive = en.IsActive,
           EntityID=en.EntityID
            
          }).ToList<EntityModel>();
             return lstEntityModel;

        }  


    [HttpGet("{id}")]  
    [Route("getEntity")]  
    public IActionResult GetById(long id) {  
            
            // var item = _context.Entity.FirstOrDefault(t => t.EntityID == id);  // filter entity records by entity id  
            // if (item == null) {  
            //     return NotFound();  
            // }  
            // return new ObjectResult(item);  

            Entity ey=_context.Entity.Where<Entity>(t => t.EntityID == id).FirstOrDefault();
            
            EntityModel item=null;

            if (ey == null) {  
                return NotFound();  
            }  
            else
            {
                 item=new EntityModel();
                
                item.EntityID=ey.EntityID;
                 item.RegisteredCountryID=ey.RegisteredCountryID;
          //CountryName= lc.CountryName,    
          item.RegisteredStateID = ey.RegisteredStateID;
          //StateName = ls.StateName, 
          item.RegisteredCityID=ey.RegisteredCityID;
          //CityName = ct.CityName,
          item.RegisteredAreaID=ey.RegisteredAreaID;
          //AreaName = ar.AreaName,
          item.Name = ey.Name;
          item.FirstName = ey.FirstName;
          item.MiddleName = ey.MiddleName;
          item.LastName = ey.LastName;
          item.NickName = ey.NickName;
          item.Description = ey.Description;
          item.EntityType = ey.EntityType;
          item.IsRegistered = ey.IsRegistered;
          item.RegisteredAddress= ey.RegisteredAddress;
          item.EmailAddress = ey.EmailAddress;
          item.WebsiteAddress = ey.WebsiteAddress;
          item.Logo = ey.Logo;
          item.FacebookAddress = ey.FacebookAddress;
          item.YouTubeAddress = ey.YouTubeAddress;
          item.TwitterAddress = ey.TwitterAddress;
           item.GooglePlusAddress = ey.GooglePlusAddress;
           item.IsActive = ey.IsActive;
                
            }
            return new ObjectResult(item); 
        }  
        
        
    [HttpPost]  
    [Route("addEntity")]  
  public IActionResult Create([FromBody] EntityModel item) {  
            
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
                     IsRegistered = item.IsRegistered,
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
                     IsActive = item.IsActive,
                     EntityType=item.EntityType,
                   
                    CreatedOn=DateTime.Now,
                    CreatedBy=item.UserID,
                    UpdatedOn= DateTime.Now,
                    UpdatedBy =item.UserID

            });  
            _context.SaveChanges();  
            return Ok(new {  
                message = "Entity is added successfully."  
            });  
        }  

    [HttpPut("{id}")]
    [Route("updateEntity")]
    public IActionResult Update(long id,[FromBody] EntityModel item)
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
        entity1.EntityType = item.EntityType;
        
         entity1.UpdatedOn=DateTime.Now;
        entity1.UpdatedBy=item.UserID;

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




 
