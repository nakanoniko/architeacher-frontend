import {Component, Input} from '@angular/core';
@Component({
    styleUrls: ['./archi-text.styles.css'],
    selector: 'archi-text',
    template: '<div [innerHtml]="text"></div>'
}) export class ArchiTextComponent{
    @Input('text') public text = '';
}
