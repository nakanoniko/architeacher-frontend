import { Injectable } from '@angular/core'

@Injectable()
export class ColorService {
    colors = {
        green: '#67ADBF',
        orange: '#BF7D03',
        black: '#000',
        white: '#fff',
        red: '#3F142B',
        blue: '#0B263F',
    };
    private currentColor: string = this.colors.white;

    setColor(color){
        this.currentColor = color;
    }

    getCurrentColor(){
        return this.currentColor;
    }

    getColors(){
        return this.colors;
    }
}
