export class Style{
    id:number;
    name:string;
    previous_id:number;
    following_id:number;
    date:number;
    philosophy:string;
    ideology:string;
    fact:string;
    text:string;
    architects:[{
        id:number;
        surname:string;
        name:string;
        patronymic: string;
        path:string;
    }];
    buildings:[{
        id:number;
        title:string;
        title_info:string;
        path:string;
    }];
    building_img_path:string;
    door_handle_img_path:string;
    column_img_path:string;
    elements:[{
        'id': number;
        'name': string;
        'description': string;
        'path': string;
    }];
    description:string;
}