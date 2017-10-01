import {RippleService} from './services/ripple.service';
import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {BackendService} from './services/backend.service';
@Component({
    selector: 'base-component',
    template: ''
})
export class Base {
    constructor(
        private _rippleService: RippleService,
        private _router: Router,
        private _backendService: BackendService
    ) { }

    navigate($event, url?, color?){
        if (url && url != this._router.url){
            if (url)
                this._backendService.load_by_url(url);
            this._rippleService.launch($event.pageX, $event.pageY, color);
        }
    }
}
