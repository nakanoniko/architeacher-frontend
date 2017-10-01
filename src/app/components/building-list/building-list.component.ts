import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BackendService } from '../core/services/backend.service';
import { Building } from '../../models/building';
import {RippleService} from '../core/services/ripple.service';
import {Base} from '../core/base.component';
import {Router} from '@angular/router';
import {ColorService} from '../../services/color.service';
import {MapTypeStyle} from '@agm/core';

@Component({
    selector: 'buildings',
    templateUrl: './building-list.template.html',
    styles: [`
        :host /deep/ .sebm-google-map-container {
            height: 100vh;
        }
    `]
})

export class BuildingListComponent extends Base implements OnInit{
    buildings: Building[];
    openWindows: boolean[];

    lat: 55.74563;
    lng: 37.6272211;

    styles: MapTypeStyle[]= [
        {
            'featureType': 'administrative',
            'stylers': [
                {
                    'color': '#bf7d03'
                }
            ]
        },
        {
            'featureType': 'administrative',
            'elementType': 'geometry',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'administrative',
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'lightness': 100
                },
                {
                    'weight': 8
                }
            ]
        },
        {
            'featureType': 'administrative',
            'elementType': 'labels.text.stroke',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'administrative.land_parcel',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'administrative.neighborhood',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'landscape',
            'stylers': [
                {
                    'color': '#67adbf'
                }
            ]
        },
        {
            'featureType': 'landscape',
            'elementType': 'labels',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'landscape.man_made',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#67adbf'
                }
            ]
        },
        {
            'featureType': 'landscape.man_made',
            'elementType': 'geometry.stroke',
            'stylers': [
                {
                    'color': '#3f142b'
                }
            ]
        },
        {
            'featureType': 'poi',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'road',
            'stylers': [
                {
                    'color': '#0b263f'
                }
            ]
        },
        {
            'featureType': 'road',
            'elementType': 'labels',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'road',
            'elementType': 'labels.icon',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'transit',
            'stylers': [
                {
                    'visibility': 'on'
                }
            ]
        },
        {
            'featureType': 'transit.line',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'transit.station.airport',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'transit.station.bus',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'transit.station.rail',
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'color': '#ffffff'
                }
            ]
        },
        {
            'featureType': 'transit.station.rail',
            'elementType': 'labels.text.stroke',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'water',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#3f142b'
                }
            ]
        },
        {
            'featureType': 'water',
            'elementType': 'labels.text',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        }
    ];
    constructor(
        private rippleService: RippleService,
        private router: Router,
        private colorService: ColorService,
        private backendService: BackendService,
        private title: Title
    ) { super(rippleService, router, backendService); }
    ngOnInit(): void{
        this.backendService
            .get_all<Building>(Building)
            .then(buildings => {
                this.buildings = buildings;
                this.openWindows = Array<boolean>(buildings.length).fill(false);
            });
        this.title.setTitle('Здания | ArchiTeacher');
    }

    onMarkerClick(i){
        this.openWindows.fill(false);
        this.openWindows[i] = true;
    }

    onMapClick(){
        this.openWindows.fill(false);
    }

}
