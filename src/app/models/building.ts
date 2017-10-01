import {BuildingImage} from "./building_image";
export class Building{
    id: number;
    title: string;
    title_info: string;
    address: string;

    year_build_start: number;
    year_build_end: number;

    leading_img_path:string;
    images: BuildingImage[];
    text:string;
    architects: [{
        id:number;
        name:string;
    }];
    styles: [{
        id:number;
        name:string;
        path:string;
    }];
    station_id:number;
    district_id:number;
    number_facts:[{
        id:number;
        number:number;
        name:string;
    }];
    text_facts:[{
        id:number;
        text:string;
    }];
    latitude:number;
    longitude:number;
}