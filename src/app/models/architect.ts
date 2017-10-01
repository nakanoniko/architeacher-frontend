export class Architect{
    id:number;
    name:string;
    surname:string;
    patronymic:string;
    born:number;
    died:number;
    alive:boolean;
    place_of_birth:string;
    quote:string;
    text:string;
    styles:[{
        id:number;
        name:string;
    }];
    buildings:[{
        id:number;
        title:string;
        title_info:string;
        path:string;
    }];
    facts:[{
        id:number;
        name:string;
        text:string;
    }];
    img_path:string;
    square_img:string;
    portrait_img:string;
    landscape_img:String;
}