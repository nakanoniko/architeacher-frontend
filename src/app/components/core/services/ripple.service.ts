import { Injectable } from '@angular/core'
import 'rxjs/add/operator/toPromise'
import { MdRipple } from '@angular/material'
import {Router} from "@angular/router";

@Injectable()
export class RippleService{
    private ripple: MdRipple;
    private domRipple: HTMLElement;
    private duration: number;

    constructor(private router:Router){}

    setRipple(ripple:MdRipple, domRipple: HTMLElement){
        this.ripple=ripple;
        this.domRipple = domRipple;
    }

    launch(x:number, y:number, color='white',url=null){
        let config = {
            speedFactor:450/1000,
            color: color
        };
        this.ripple.launch(x,y,config);
        this.domRipple.style.pointerEvents = 'auto';

        this.duration = 450 * (1 / config.speedFactor);
        if(url){
            this.router.navigateByUrl(url)
        }
    }

    public stop(){
        this.duration = 0;
        this.ripple.fadeOutAll();
        this.domRipple.style.pointerEvents = 'none';
    }

    getDuration(){
        return this.duration;
    }
}