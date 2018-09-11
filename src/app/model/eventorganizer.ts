import { IEntity } from '../model/entity';

export interface IEventOrganizer {
    EventOrganizerID: number;
    EventID: number;
    // AreaName: string;
    EntityList: IEntity[];
    EntityIDs: number[];
    // CreatedBy: number;
    // UpdatedBy: number;
}



