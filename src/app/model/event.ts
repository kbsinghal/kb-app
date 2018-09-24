export interface IEvent {
    EventID: number;
    EventName: string;
    EventDescription: string;
    EventAddress: string;
    EventStartDate: Date;
    EventEndDate: Date;
    CountryID: number;
    StateID: number;
    CityID: number;
    AreaID: number;
    IsActive: number;
    EventVenueLatitude: number;
    EventVenueLongitude: number;
    EventStartTime: string;
    EventEndTime: string;
    UserID: number;
    CountryName: string;
    StateName: string;
    CityName: string;
    AreaName: string;
    EventOccurence: string;
}
