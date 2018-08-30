export interface IEntity {
    EntityID: number;
    Name: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    NickName: string;
    Description: string;
    EntityType: string;
    //NoOfFollowers: number;
    //NoOfUpcomingEvents: number;
    //NoOfPastEvents: number;
    IsRegistered: number;
    RegisteredAddress: string;
    // RegisteredCity: string;
    RegisteredCityID: number;
    // RegisteredState: string;
    RegisteredStateID: number;
    RegisteredCountryID: number;
    RegisteredAreaID: number;
    AreaID: number;
    AreaName: string;
    EmailAddress: string;
    WebsiteAddress: string;
    // public byte[] Logo { get; set; }
    FacebookAddress: string;
    YouTubeAddress: string;
    TwitterAddress: string;
    GooglePlusAddress: string;
    IsActive: number;
   // CreatedBy: number;
   // UpdatedBy: number;
    // public DateTime CreatedOn { get; set; }
    // public DateTime UpdatedOn { get; set; }
}
