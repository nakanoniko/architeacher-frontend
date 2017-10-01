import {Component, ElementRef, Input} from "@angular/core";
import {Router, UrlTree} from "@angular/router";
import {RippleService} from "../../services/ripple.service";
import {BackendService} from "../../services/backend.service";
@Component({
    templateUrl:'./archi-button.template.html',
    styleUrls:['./archi-button.styles.css'],
    selector:'archi-button'
}) export class ArchiButtonComponent {
    @Input('color') private color: string = 'transparent';
    @Input('name') public name: string = '';
    @Input('url') private url: string | UrlTree;
    @Input('light') private light: boolean = false;
    @Input('sans') private sans: boolean = false;
    @Input('border') private border:boolean = true;
    @Input('full-height') private height:boolean = false;
    @Input('size') private size:number = 1.5;

    constructor(
        private element: ElementRef,
        private router: Router,
        private rippleService:RippleService,
        private backendService:BackendService
    ){}

    getClasses(){
        return {
            'archi-button-light':this.light,
            'archi-button-sans':this.sans,
            'archi-button-bordered':this.border,
            'archi-button-full-height':this.height
        }
    }

    getStyles(){
        return {
            'font-size':this.size+'rem'
        }
    }

    onMouseEnter(){
        this.element.nativeElement.children[0].style.backgroundColor = this.color;
    }
    onMouseLeave(){
        this.element.nativeElement.children[0].style.backgroundColor = 'transparent';
    }
    onClick($event){
        if(!this.url || this.url == this.router.url)
            return;
        if(this.url && this.url != '/')
            this.backendService.load_by_url(this.url);
        this.rippleService.launch($event.pageX,$event.pageY,this.color);
        this.router.navigateByUrl(this.url).then();
    }
}
