import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Base } from "../core/base.component";
import { Element } from "../../models/element";
import {BackendService} from "../core/services/backend.service";
import {ColorService} from "../../services/color.service";
import {RippleService} from "../core/services/ripple.service";
import {Title} from "@angular/platform-browser";

@Component({
    selector:'building',
    templateUrl:'./element.template.html',
    styleUrls:['./element.styles.css']
})

export class ElementComponent extends Base implements OnInit{
    element: Element;
    constructor(
        private rippleService: RippleService,
        private router: Router,
        private colorService: ColorService,
        private backendService: BackendService,
        private route:ActivatedRoute,
        private title:Title
    ) { super(rippleService,router, backendService) }
    ngOnInit(): void{
        this.route.params
            .switchMap((params: Params) => this.backendService.get_one<Element>(+params['id'], Element))
            .subscribe(element => {
                this.element = element;
                this.title.setTitle(`${element.name} | ArchiTeacher`);
            });
    }
}