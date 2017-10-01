import "rxjs/add/operator/switchMap";
import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from "@angular/core";
import {Architect} from "../../models/architect";
import {Base} from "../core/base.component";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {BackendService} from "../core/services/backend.service";
import {ColorService} from "../../services/color.service";
import {RippleService} from "../core/services/ripple.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

export class GridBase{

    public getSquareImgPath(a:Architect): String{
        return a.img_path? '/images/uploads/'+a.square_img:'/images/static/mask-square.png'
    }
    public getPortraitImgPath(a:Architect): String{
        return a.img_path? '/images/uploads/'+a.portrait_img:'/images/static/mask-portrait.png'
    }
    public getLandscapeImgPath(a:Architect): String{
        return a.img_path? '/images/uploads/'+a.landscape_img:'/images/static/mask-horiz.png'
    }
}

@Component({
    selector:'grid-a',
    template:`
        <div class="d-flex flex-row" style="width:100%">
            <div *ngFor="let item of array" style="width:100%">
                <flipper
                        [img]="getSquareImgPath(item)"
                        [color]="colorService.colors.blue"
                        [url]="'/architects/'+item.id"
                        [header]="'Архитектор'"
                        [title]="item.surname"
                        [subtitle]="item.name + ' ' + item.patronymic">
                </flipper>
            </div>
        </div>

    `
}) export class GridA extends GridBase{
    @Input('array') array: Array<Architect>;
    constructor(
        public colorService:ColorService,
    ){ super() }

}

@Component({
    selector:'grid-b',
    template:`
        <div class="d-flex flex-row" style="width:100%">
            <flipper style="width:50%"
                     *ngIf="array[0]"
                     [img]="getSquareImgPath(array[0])"
                     [color]="colorService.colors.blue"
                     [url]="'/architects/'+array[0].id"
                     [header]="'Архитектор'"
                     [title]="array[0].surname"
                     [subtitle]="array[0].name + ' ' + array[0].patronymic">
            </flipper>

            <flipper style="width:25%"
                     *ngIf="array[1]"
                     [img]="getPortraitImgPath(array[1])"
                     [color]="colorService.colors.blue"
                     [url]="'/architects/'+array[1].id"
                     [size]="'common'"
                     [header]="'Архитектор'"
                     [title]="array[1].surname"
                     [subtitle]="array[1].name + ' ' + array[1].patronymic">
            </flipper>


            <div style="width:25%" class="d-flex flex-column align-items-stretch justify-content-start">
                <flipper style="width:100%"
                        *ngIf="array[2]"
                        [img]="getSquareImgPath(array[2])"
                        [color]="colorService.colors.blue"
                        [url]="'/architects/'+array[2].id"
                        [header]="'Архитектор'"
                        [title]="array[2].surname"
                        [subtitle]="array[2].name + ' ' + array[2].patronymic">
                </flipper>

                <flipper style="width:100%"
                        *ngIf="array[3]"
                        [img]="getSquareImgPath(array[3])"
                        [color]="colorService.colors.blue"
                        [url]="'/architects/'+array[3].id"
                        [header]="'Архитектор'"
                        [title]="array[3].surname"
                        [subtitle]="array[3].name + ' ' + array[3].patronymic">
                </flipper>
            </div>
        </div>

    `
}) export class GridB extends GridBase{
    @Input('array') array: Array<Architect>;
    constructor(
        public colorService:ColorService,
    ){super()}
}

@Component({
    selector:'grid-c',
    template:`
        <div class="container-fluid px-0">
            <div class="row no-gutters">
                <div class="col-6">
                    <div class="row no-gutters">
                        <div class="col-6">
                            <flipper
                                    *ngIf="array[0]"
                                    [img]="getSquareImgPath(array[0])"
                                    [color]="colorService.colors.blue"
                                    [url]="'/architects/'+array[0].id"
                                    [header]="'Архитектор'"
                                    [title]="array[0].surname"
                                    [subtitle]="array[0].name + ' ' + array[0].patronymic">
                            </flipper>
                        </div>
                        <div class="col-6">
                            <flipper
                                    *ngIf="array[1]"
                                    [img]="getSquareImgPath(array[1])"
                                    [color]="colorService.colors.blue"
                                    [url]="'/architects/'+array[1].id"
                                    [header]="'Архитектор'"
                                    [title]="array[1].surname"
                                    [subtitle]="array[1].name + ' ' + array[1].patronymic">
                            </flipper>
                        </div>
                    </div>
                    <flipper
                            *ngIf="array[3]"
                            [img]="getLandscapeImgPath(array[3])"
                            [color]="colorService.colors.blue"
                            [url]="'/architects/'+array[3].id"
                            [header]="'Архитектор'"
                            [title]="array[3].surname"
                            [subtitle]="array[3].name + ' ' + array[3].patronymic">
                    </flipper>
                </div>
                <div class="col-6">
                    <flipper
                            *ngIf="array[2]"
                            [img]="getSquareImgPath(array[2])"
                            [color]="colorService.colors.blue"
                            [url]="'/architects/'+array[2].id"
                            [header]="'Архитектор'"
                            [title]="array[2].surname"
                            [subtitle]="array[2].name + ' ' + array[2].patronymic">
                    </flipper>
                </div>
            </div>

        </div>
    `
}) export class GridC extends GridBase{
    @Input('array') array: Array<Architect>;

    constructor(
        public colorService:ColorService,
    ){super()}
}

@Component({
    selector:'architects',
    templateUrl:'./architect-list.template.html',
    styles:[`
        :host /deep/ grid-4a, grid-4b, grid-4c, grid-5a{
            width:100%;
        }
    `],
    animations: [
        trigger('flipState', [
            state('active', style({
                transform: 'rotateY(179.9deg)'
            })),
            state('inactive', style({
                transform: 'rotateY(0)'
            })),
            transition('active => inactive', animate('500ms ease-out')),
            transition('inactive => active', animate('500ms ease-in'))
        ])
    ]
})

export class ArchitectListComponent extends Base implements OnInit{
    architects: Architect[];
    array:Array<[number, Array<Architect>]>=[];
    constructor(
        private rippleService: RippleService,
        private router: Router,
        public colorService: ColorService,
        private backendService: BackendService,
        private title:Title
    ) { super(rippleService,router, backendService) }
    ngOnInit(): void{
        this.backendService
            .get_all<Architect>(Architect)
            .then(architects => {
                this.architects = architects;
                this.array = this.initArray();
            });
        this.title.setTitle('Архитекторы | ArchiTeacher')
    }

    getArray():Array<[number, Array<Architect>]>{
        return this.array
    }

    initArray():Array<[number, Array<Architect>]>{
        if(!this.architects)
            return [];
        this.architects.sort((a,b)=>a.surname.localeCompare(b.surname));
        let result: Array<[number, Array<Architect>]> = [];
        let i = 0;
        let j = 0;
        let val = -1;
        while (i < this.architects.length){
            if(++val==3)
                val -= 3;
            j = i;
            i += 4;
            result.push([val,this.architects.slice(j,i)]);
        }
        return result;
    }
}
