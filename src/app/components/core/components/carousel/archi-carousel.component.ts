import {Component, Input} from '@angular/core';
import {RippleService} from '../../services/ripple.service';
import {Router} from '@angular/router';
import {BackendService} from '../../services/backend.service';
@Component({
    selector: 'archi-carousel',
    templateUrl: './archi-carousel.template.html',
    styles:
        [`
            .card-link .card-link-text{
                position:absolute;
                bottom:20px;
                left:20px;
            }

            .card-link{
                position:relative;
                overflow:hidden;
                background-color:black;
            }

            .card-link img {
                width:100%;
                opacity:.8;
            }
        `]
}) export class ArchiCarouselComponent {
    @Input('array') public array: Array<any>;
    @Input('img') private img: string;
    @Input('base') private base: string = null;
    @Input('title') private title: string;
    @Input('title_info') private title_info: string;
    @Input('carousel_id') public carousel_id = 'carousel';
    @Input('url') private url: string;
    @Input('id') private id: string;
    @Input('color') private color: string;
    @Input('url_static') private url_static = false;
    @Input('title_info_2') private title_info_2: string;

    constructor(
        private rippleService: RippleService,
        private router: Router,
        private backendService: BackendService
    ) { }

    onClick($event, id){
        if (!this.url || !this.id)
            return;
        if (this.url)
            this.backendService.load_by_url('/' + this.url + '/' + id);
        this.rippleService.launch($event.pageX, $event.pageY, this.color);

        this.router.navigateByUrl('/' + this.url + '/' + id);
    }

    getUrl(entry){
        return this.url_static ? entry[this.img] : entry[this.img] ? '/images/uploads/' + entry[this.img] : '/images/static/mask-main.png';
    }

    hasTitle(entry){
        if (this.title == null)
            return false;
        return this.base !== null ? entry[this.base][this.title] !== null : entry[this.title] !== null;
    }

    getTitle(entry){
        return this.base !== null ? entry[this.base][this.title] : entry[this.title];
    }

    getId(entry){
        return this.base !== null ? entry[this.base][this.id] : entry[this.id];
    }

    hasTitleInfo(entry){
        if (this.title_info == null)
            return false;
        return this.base !== null ? entry[this.base][this.title_info] !== null : entry[this.title_info] !== null;
    }

    getTitleInfo(entry){
        const a = this.base !== null ? entry[this.base][this.title_info] : '';
        const b = this.base !== null ? entry[this.base][this.title_info_2] ? entry[this.base][this.title_info_2] : '' : '';
        const c = entry[this.title_info];
        const d = entry[this.title_info_2] ? entry[this.title_info_2] : '';

        return this.base !== null ? (a + (entry[this.base][this.title_info_2] ? (' ' + b) : '')) : (c + (entry[this.title_info_2] ? (' ' + d) : ''));
    }
}
