import {Component, Input} from "@angular/core";
@Component({
    selector:'archi-heading',
    styles:[`
        div{
            font-family:"Playfair Display", serif;
            font-size: 1.5rem;
        }
        
        ._default{
            font-size:1.5rem;
        }
        .extra-huge{
            font-size:8rem;
        }
        
        .huge{
            font-size:6rem;
        }
        .big{
            font-size:3rem;
        }
        .common{
            font-size:2.3rem;
        }
        .small{
            font-size:1rem;
        }
        div.condensed{
            font-family: "Open Sans Condensed", sans-serif;
            font-weight:700;
            line-height:1.3;
        }
        
        div.sans{
            font-family: 'Open Sans', sans-serif;
        }
        
        .y{
            margin-top:3rem;
            margin-bottom:3rem;
        }
        
        .b{
            margin-bottom:3rem;
        }
        
        .smallHeight {
            line-height:1.1;
        }
    `],
    template: '<div [ngClass]="getClasses()" [ngStyle]="getStyles()">{{text}}</div>'
}) export class ArchiHeadingComponent{
    @Input('text') public text: string = '';
    @Input('size') private size: string = 'default';
    @Input('condensed') private condensed: boolean = false;
    @Input('align') private align: string = 'center';
    @Input('margin') private margin: string = 'none';
    @Input('smallHeight') private smallHeight: boolean = false;
    @Input('sans') private sans: boolean = false;
    getClasses(){
        return {
            'extra-huge':this.size=='extra-huge',
            huge: this.size == 'huge',
            big: this.size == 'big',
            common: this.size == 'common',
            _default: this.size == 'default',
            small: this.size == 'small',
            condensed: this.condensed,
            y: this.margin == 'y',
            b: this.margin == 'b',
            smallHeight: this.smallHeight,
            sans:this.sans
        }
    }
    getStyles(){
        return {
            'text-align':this.align
        }
    }
}
