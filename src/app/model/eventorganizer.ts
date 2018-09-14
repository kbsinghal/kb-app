import { IEntity } from '../model/entity';

export interface IEventOrganizer {
    EventOrganizerID: number;
    EventID: number;
    EventName: string;
    EntityList: IEntity[];
    EntityIDs: number[];
    UserID: number;
    // CreatedBy: number;
    // UpdatedBy: number;
}



