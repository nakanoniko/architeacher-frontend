export class Element{
    id: number;
    name: string;
    date: number;
    styles: [{
        id: number;
        name: string;
    }];
    text: string;
    places: [{
        id: number;
        name: string;
    }];
    examples: [{
        id: number;
        img_path: string;
        buildings: {
            id: number;
            title: string;
            title_info: string;
        }
    }];
    img_path: string;
}
