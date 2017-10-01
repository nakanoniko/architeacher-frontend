import {Component, OnInit, ViewChild, ElementRef, HostListener} from '@angular/core';
import {MdRipple, MdSnackBar} from '@angular/material';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Base} from '../core/base.component';
import {Architect} from '../../models/architect';
import {Building} from '../../models/building';
import {Element} from '../../models/element';
import {Style} from '../../models/style';
import {BackendService} from '../core/services/backend.service';
import {ColorService} from '../../services/color.service';
import {RippleService} from '../core/services/ripple.service';


@Component({
    selector: 'my-app',
    templateUrl: './app.template.html',
    styleUrls: ['./app.styles.css']
})
export class AppComponent extends Base implements OnInit{

    @ViewChild(MdRipple) ripple: MdRipple;
    @ViewChild('ripple') domRipple: ElementRef;

    randomPage($event){
        const i = Math.floor(Math.random() * 4);
        const colors = {
            0: this.colorService.colors.blue,
            1: this.colorService.colors.red,
            2: this.colorService.colors.orange,
            3: this.colorService.colors.green,

        };
        const color = colors[i];
        this.rippleService.launch($event.pageX, $event.pageY, color);
        switch (i){
            case 0:
                this
                    .backendService
                    .get_random<Architect>(Architect)
                    .then((output) => {
                        this.router.navigateByUrl('/architects/' + output.id);
                    });
                break;
            case 1:
                this
                    .backendService
                    .get_random<Building>(Building)
                    .then((output) => {
                        this.router.navigateByUrl('/buildings/' + output.id);
                    });
                break;
            case 2:
                this
                    .backendService
                    .get_random<Element>(Element)
                    .then((output) => {
                        this.router.navigateByUrl('/elements/' + output.id);
                    });
                break;
            case 3:
                this
                    .backendService
                    .get_random<Style>(Style)
                    .then((output) => {
                        this.router.navigateByUrl('/styles/' + output.id);
                    });
                break;
        }
    }

    constructor(
        private rippleService: RippleService,
        private router: Router,
        private snackBar: MdSnackBar,
        private colorService: ColorService,
        private backendService: BackendService
    ) { super(rippleService, router, backendService); }

    ngOnInit(): void {
        this.rippleService.setRipple(this.ripple, this.domRipple.nativeElement);
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd ){
                document.body.scrollTop = 0;
                this.rippleService.stop();

                if (val.url.startsWith('/architects')){
                    this.colorService.setColor(this.colorService.getColors().blue);
                } else if (val.url.startsWith('/buildings')){
                    this.colorService.setColor(this.colorService.getColors().red);
                } else if (val.url.startsWith('/styles')){
                    this.colorService.setColor(this.colorService.getColors().green);
                } else if (val.url.startsWith('/elements')){
                    this.colorService.setColor(this.colorService.getColors().orange);
                } else {
                    this.colorService.setColor(this.colorService.getColors().black);
                }
            } else if (val instanceof NavigationStart){
            } else {
            }
        });
        this.colorService.setColor(this.colorService.getColors().black);

    }

    showSnackBar(message?, action= 'OK'){
        this.snackBar.open(message ? message : 'Фича в разработке', action, {
            duration: 3000
        });
    }
}
