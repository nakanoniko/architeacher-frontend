import {Component, HostListener} from '@angular/core';
import {ColorService} from '../../services/color.service';
import {Router} from '@angular/router';
import {BackendService} from '../core/services/backend.service';
import {Base} from '../core/base.component';
import {RippleService} from '../core/services/ripple.service';
import $ from 'jquery';
@Component({
    selector: 'index',
    templateUrl: './index.template.html',
    styleUrls: ['./index.styles.css']
}) export class IndexComponent extends Base{
    constructor(
        public colorService: ColorService,
        private backendService: BackendService,
        private router: Router,
        private rippleService: RippleService
    ){ super(rippleService, router, backendService); }

    @HostListener('window:scroll')
    onScroll() {
        $('.slideanim').each(function(){
            const pos = $(this).offset().top;

            const winBot = $(window).scrollTop() + $(window).innerHeight();
            if (pos < winBot - 300) {
                $(this).addClass('slide');
            }
        });
    }
}
