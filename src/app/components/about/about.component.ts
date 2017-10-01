import {Component} from "@angular/core";
import {Base} from "../core/base.component";
import {RippleService} from "../core/services/ripple.service";
import {BackendService} from "../core/services/backend.service";
import {Router} from "@angular/router";
@Component({
    selector:'about',
    template:`
        <div style="height:129px;width:100%;"></div>
        <archi-heading
                [text]="'О нас'"
                [margin]="'y'"
                [size]="'huge'">
        </archi-heading>
        <div class="container mb-5">
            <div class="row mb-5">
                <div class="col-3 offset-2">
                    <img class="img-fluid mb-3" src="/images/static/round-katya.png">
                    <archi-heading [text]="'Катя Лебедева'"></archi-heading>
                    <archi-heading [size]="'small'" [sans]="true" [text]="'автор идеи, дизайнер'"></archi-heading>
                    <a href="http://katerlebedeva.tumblr.com"><archi-heading [size]="'small'" [condensed]="true" [text]="'katerlebedeva.tumblr.com'"></archi-heading></a>
                    <a href="https://www.facebook.com/katerlebedeva"><archi-heading [size]="'small'" [condensed]="true" [text]="'facebook.com/katerlebedeva'"></archi-heading></a>
                </div>
                <div class="col-3 offset-2">
                    <img class="img-fluid mb-3" src="/images/static/round-ya.png">
                    <archi-heading [text]="'Никита Кулаков'"></archi-heading>
                    <archi-heading [size]="'small'" [sans]="true" [text]="'разработчик'"></archi-heading>
                    <a href="https://www.facebook.com/kikita.nulakov"><archi-heading [size]="'small'" [condensed]="true" [text]="'facebook.com/kikita.nulakov'"></archi-heading></a>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-3">
                    <img class="img-fluid mb-3" src="/images/static/round-leha.png">
                    <archi-heading [text]="'Алексей Лапейкин'"></archi-heading>
                    <archi-heading [size]="'small'" [sans]="true" [text]="'фотограф'"></archi-heading>
                    <a href="https://www.facebook.com/alexey.lapeykin"><archi-heading [size]="'small'" [condensed]="true" [text]="'facebook.com/alexey.lapeykin'"></archi-heading></a>
                    <a href="https://www.instagram.com/al_lap/"><archi-heading [size]="'small'" [condensed]="true" [text]="'instagram.com/al_lap'"></archi-heading></a>
                </div>
                <div class="col"></div>
            </div>
        </div>
    `
}) export class AboutComponent extends Base {

    constructor(
        rs: RippleService,
        r: Router,
        bs: BackendService){
        super(rs,r,bs);
    }

}