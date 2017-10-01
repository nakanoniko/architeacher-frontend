import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router} from '@angular/router'

import {Architect} from "../../models/architect";
import {Base} from "../core/base.component";
import {BackendService} from "../core/services/backend.service";
import {ColorService} from "../../services/color.service";
import {RippleService} from "../core/services/ripple.service";
import {Title} from "@angular/platform-browser";

@Component({
    selector:'architect',
    templateUrl:'./architect.template.html',
    styleUrls:['./architect.styles.css'],
})
export class ArchitectComponent extends Base implements OnInit{
    architect: Architect;
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
            .switchMap((params: Params) => this.backendService.get_one<Architect>(+params['id'], Architect))
            .subscribe(architect => {
                this.architect = architect;
                this.title.setTitle(`${architect.surname} ${architect.name} ${architect.patronymic} | ArchiTeacher`);
            });
    }
}