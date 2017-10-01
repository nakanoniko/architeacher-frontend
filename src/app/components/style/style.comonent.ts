import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {Base} from "../core/base.component";
import {Style} from "../../models/style";
import {RippleService} from "../core/services/ripple.service";
import {ColorService} from "../../services/color.service";
import {BackendService} from "../core/services/backend.service";
import {Title} from "@angular/platform-browser";

@Component({
    selector:'building',
    templateUrl:'./style.template.html',
    styleUrls:['./style.styles.css']
})

export class StyleComponent extends Base implements OnInit{
    style: Style;
    previous: Style = null;
    following: Style = null;
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
            .switchMap((params: Params) => this.backendService.get_one<Style>(+params['id'], Style))
            .subscribe(style => {
                this.style = style;
                this.title.setTitle(`${style.name} | ArchiTeacher`);
                if(this.style.following_id){
                    this.backendService
                        .get_one<Style>(style.following_id, Style)
                        .then((style)=> this.following = style)
                } else this.following=null;
                if(this.style.previous_id){
                    this.backendService
                        .get_one<Style>(style.previous_id, Style)
                        .then((style)=> this.previous = style)
                } else this.previous=null;
            });
    }

    elements: Array<[Element,Element,Element]> = null;
    styleRef = null;

    getElements():Array<[Element,Element,Element]>{
        if(this.style == null)
            return [];
        if(this.style == this.styleRef && this.elements)
            return this.elements;
        this.styleRef = this.style;
        let result = [];
        for(let i = 0; i < this.style.elements.length; i+=3){
            let first = this.style.elements[i];
            let second = this.style.elements[i+1] == undefined? null:this.style.elements[i+1];
            let third = this.style.elements[i+2] == undefined? null:this.style.elements[i+2];
            result.push([first,second,third])
        }
        this.elements = result;
        return this.elements;
    }
}