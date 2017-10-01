import {Component, Input} from "@angular/core";
@Component({
    selector:'archi-underline',
    styles:[`
        div.underline{
            padding-bottom: .75rem;
            margin-bottom: .75rem;
            border-bottom: 1px solid black;
        }
    `],
    template:'<div class="underline" [ngStyle]="getStyle()">{{text}}</div>'
}) export class ArchiUnderlineComponent {
    @Input('text') public text: string = '';
    @Input('align') private align : string = 'left';

    getStyle(){
        return {
            'text-align': this.align
        }
    }
}
