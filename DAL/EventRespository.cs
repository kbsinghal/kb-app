using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using kb_app.Models;
using MySql.Data.MySqlClient;

namespace kb_app.DAL
{
     public class EventRespository //: IEventRespository
    {
        // private readonly IDbConnection _dbConn;

        // public EventRespository()
        // {
        //     _dbConn = new MySqlConnection(ConfigurationManager.ConnectionStrings["KBHIConnection"].ConnectionString);
        // }

        // public List<Event> GetEvents(int amount, string sort)
        // {
        //     try
        //     {
        //         //return this._db.Query<Event>("SELECT TOP " + amount + " [CustomerID],[CustomerFirstName],[CustomerLastName],[IsActive] FROM [Customer] ORDER BY CustomerID " + sort).ToList();
        //         return this._dbConn.Query<Event>("SELECT * FROM vwEvents").ToList();
        //     }
        //     catch (System.Exception ex)
        //     {

        //     }
        //     return null;
        // }

        // public Event GetSingleEvent(int eventId)
        // {
        //     //return _db.Query<Event>("SELECT * FROM vwEvents WHERE EventID =@EventID", new { EventID = eventId }).SingleOrDefault();
        //     Event oEvent = null;

        //     var sql = @" SELECT * FROM vwEvents WHERE EventID =@EventID; 
        //                  SELECT * from EventBanners where EventID = @EventID;
        //                  SELECT * from EventPhotos where EventID = @EventID;
        //                  SELECT * from EventOrgnizers where EventID = @EventID; ";
            
        //     using (var multi = _dbConn.QueryMultiple(sql, new { EventID = eventId }))
        //     {
        //         oEvent = multi.Read<Event>().Single();
        //         List<EventBanner> banners = multi.Read<EventBanner>().ToList();
        //         List<EventOrganizer> organizers = multi.Read<EventOrganizer>().ToList();
        //         //var photos = multi.Read<Return>().ToList();
        //         oEvent.EventBanners = banners;
        //         oEvent.EventOrganizers=organizers;


        //     }

        //     return oEvent;

        // }

        //public bool InsertEvent(Event ourEvent)
        //{
        //    int rowsAffected = this._dbConn.Execute(@"INSERT Customer([CustomerFirstName],[CustomerLastName],[IsActive]) values (@CustomerFirstName, @CustomerLastName, @IsActive)",
        //        new { EventName = ourEvent.EventName, EventDescription = ourEvent.EventDescription, IsActive = true });

        //    if (rowsAffected > 0)
        //    {
        //        return true;
        //    }

        //    return false;
        //}

        //public bool DeleteEvent(int eventId)
        //{
        //    int rowsAffected = this._dbConn.Execute(@"DELETE FROM [Events] WHERE CustomerID = @CustomerID",
        //        new { EventID = eventId });

        //    if (rowsAffected > 0)
        //    {
        //        return true;
        //    }

        //    return false;
        //}

        //public bool UpdateEvent(Event ourEvent)
        //{
        //    int rowsAffected = this._dbConn.Execute(
        //                "UPDATE [Customer] SET [CustomerFirstName] = @CustomerFirstName ,[CustomerLastName] = @CustomerLastName, [IsActive] = @IsActive WHERE CustomerID = " +
        //                ourEvent.EventID, ourEvent);

        //    if (rowsAffected > 0)
        //    {
        //        return true;
        //    }

        //    return false;
        //}
    }
}