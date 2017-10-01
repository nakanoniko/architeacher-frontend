import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core'
import { Base } from "../core/base.component";
import { Element } from "../../models/element"
import {Title} from "@angular/platform-browser";
import {RippleService} from "../core/services/ripple.service";
import {Router} from "@angular/router";
import {ColorService} from "../../services/color.service";
import {BackendService} from "../core/services/backend.service";

@Component({
    selector:'elements',
    templateUrl:'./element-list.template.html'
})
export class ElementListComponent extends Base implements OnInit{
    elements: Element[];
    colors: Array<String>;

    constructor(
        private rippleService: RippleService,
        private router: Router,
        private colorService: ColorService,
        private backendService: BackendService,
        private title:Title
    ) { super(rippleService,router, backendService) }
    ngOnInit(): void{
        this.backendService
            .get_all<Element>(Element)
            .then(elements => {
                this.elements = elements;
                this.colors = [];
                for(let i = 0; i < elements.length; ++i){
                    this.colors.push(this.getRandomBackground(i));
                }
            });
        this.title.setTitle('Элементы | ArchiTeacher')
    }

    getBackground(e:Element){
        return {
            'background-color': this.colors[this.elements.findIndex(elem => elem == e)]
        }
    }

    getRandomBackground(i: number): String{
        return i % 2 ? this.colorService.colors.red: this.colorService.colors.blue
    }
}