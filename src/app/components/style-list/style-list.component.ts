import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core'
import { Base } from "../core/base.component";
import { Style } from "../../models/style";
import {Title} from "@angular/platform-browser";
import {RippleService} from "../core/services/ripple.service";
import {Router} from "@angular/router";
import {ColorService} from "../../services/color.service";
import {BackendService} from "../core/services/backend.service";

@Component({
    selector:'styles',
    templateUrl:'./style-list.template.html',
    styles:[`
        .width-100{
            width:100%
        }
        .width-small{
            width:40px;
        }
        .width-big{
            width:calc(100% - 40px);
        }
        .relative{
            position:relative;
        }

        .width-img{
            width:90%;
        }

        .flex-1{
            flex:1;
        }

        .border-right{
            border-right:1px solid black;
        }

        .border-top{
            border-top:1px solid black;
        }
        .push-top-big{
            top:200px;
        }
        .push-left-small{
            left:.25px;
        }
        .push-right-small{
            left:-.8px;
        }
        .date{
            position:relative;
            top:-50px;
            width:100%;
        }
        
        .img-absolute{
            position:absolute;
            top:0;
        }
    `]
})

export class StyleListComponent extends Base implements OnInit{
    styles: Style[];
    constructor(
        private rippleService: RippleService,
        private router: Router,
        public colorService: ColorService,
        private backendService: BackendService,
        private title:Title
    ) { super(rippleService,router, backendService) }
    ngOnInit(): void{
        this.backendService
            .get_all<Style>(Style)
            .then(styles => this.styles = styles);
        this.title.setTitle('Стили | ArchiTeacher')
    }


    getPairs(): Array<[Style,Style | null]>{
        if(!this.styles) return [];
        this.styles.sort((a,b)=> a.date-b.date);
        let pairs = [];
        for (let i=0 ; i<this.styles.length ; i+=2) {
            if (this.styles[i+1] !== undefined) {
                pairs.push ([this.styles[i], this.styles[i+1]]);
            } else {
                pairs.push ([this.styles[i], null]);
            }
        }
        return pairs;
    }

    getPairsLength(){
        if(!this.styles) return 0;
        return Math.ceil(this.styles.length/2)
    }
}
