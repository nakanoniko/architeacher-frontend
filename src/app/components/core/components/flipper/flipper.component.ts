


import {Component, ElementRef, HostListener, Input, ViewChild} from "@angular/core";
import {BackendService} from "../../services/backend.service";
import {Router} from "@angular/router";
import {RippleService} from "../../services/ripple.service";
import {Base} from "../../base.component";
import {animate, state, style, transition, trigger} from "@angular/animations";
@Component({
    selector:'flipper',
    template: `
        <div  class="tp-wrapper"
              (mouseenter)="toggleFlip()"
              (mouseleave)="toggleFlip()">
            <div #box class="tp-box d-flex flex-row" [@flipState]="flip">
                <div class="tp-box__side tp-box__front">
                    <img (load)="box.style.height = getHeight()" #image style="width:100%" src="{{img}}">
                </div>
                <a
                   [routerLink]="url"
                   (click)="navigate($event,url, color)"
                   class="tp-box__side tp-box__back d-flex flex-column"
                   [style.background]="color">
                    <div class="d-flex flex-column" style="flex:1">
                        <archi-heading [sans]="true" class="py-3" [text]="header"></archi-heading>
                        <div style="border-bottom:1px solid white"></div>
                        <div class="my-auto pb-4">
                            <archi-heading [size]="'common'" [text]="title"></archi-heading>
                            <archi-heading [text]="subtitle"></archi-heading>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    `,
    styles: [
            `
            .tp-wrapper {
                perspective: 800px;
            }

            .tp-box {
                width:100%;
                height: auto;
                position: relative;
                transform-style: preserve-3d;
                transition: transform 1s;
            }
            .tp-box__side {
                width: 100%;
                height: 100%;
                position: absolute;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                color: #fff;
                cursor: pointer;
                user-select: none;
            }
            .tp-box__back {
                transform: rotateY(180deg);
            }

        `
    ],
    animations: [
        trigger('flipState', [
            state('active', style({
                transform: 'rotateY(180deg)'
            })),
            state('inactive', style({
                transform: 'rotateY(0)'
            })),
            transition('active => inactive', animate('500ms ease-out')),
            transition('inactive => active', animate('500ms ease-in'))
        ])
    ]
}) export class Flipper extends Base{
    flip: string = 'inactive';
    @Input('img') img:string;
    @Input('header') header:string;
    @Input('title') title:string;
    @Input('subtitle') subtitle:string;
    @Input('color') color:string='black';
    @Input('url') url:string;
    @Input('size') size:string = null;
    @ViewChild('image') image:ElementRef;
    @ViewChild('box') box:ElementRef;

    toggleFlip() {
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    }
    private height='0px';

    constructor(
        private rippleService:RippleService,
        private router:Router,
        private backendService:BackendService,
    ){
        super(rippleService, router, backendService)
    }

    getHeight(){
        if (this.height=='0px' && this.image){
            this.height = this.image.nativeElement.getBoundingClientRect().height+'px';
        }
        return this.height;
    }

    @HostListener('window:resize')
    @HostListener('window:orientationChange')
    resize(){
        this.height='0px';
        this.box.nativeElement.style.height = this.getHeight();
    }
}
