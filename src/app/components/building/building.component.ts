import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Building} from '../../models/building';
import {Base} from '../core/base.component';
import {MetroStation} from '../../models/metro_station';
import {District} from '../../models/district';
import {BuildingImage} from '../../models/building_image';
import {MetroRoute} from '../../models/metro_route';
import {Region} from '../../models/region';

import {BackendService} from '../core/services/backend.service';
import {RippleService} from '../core/services/ripple.service';
import {ColorService} from '../../services/color.service';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'building',
    templateUrl: './building.template.html',
    styleUrls: ['./building.styles.css']
})
export class BuildingComponent extends Base implements OnInit{
    building: Building;
    selected_building_image: BuildingImage;
    metro_station: MetroStation;
    metro_routes: MetroRoute[] = [];
    district: District;
    region: Region;

    constructor(
        private rippleService: RippleService,
        private router: Router,
        public colorService: ColorService,
        private backendService: BackendService,
        private route: ActivatedRoute,
        private title: Title
    ) { super(rippleService, router, backendService); }

    ngOnInit(): void{
        this.route.params
            .switchMap((params: Params) => this.backendService.get_one<Building>(+params['id'], Building))
            .subscribe(building => {
                this.building = building;
                this.selected_building_image = building.images[0];
                this.title.setTitle(`${building.title} ${building.title_info ? building.title_info : ''} | ArchiTeacher`);
                if (building.station_id)
                    this.backendService
                        .get_one<MetroStation>(building.station_id, MetroStation)
                        .then((station) => {
                            this.metro_station = station;
                            for (let i = 0; i < station.routes.length; ++i)
                                this.backendService
                                    .get_one<MetroRoute>(station.routes[i], MetroRoute)
                                    .then((route) => this.metro_routes.push(route));

                        });
                if (building.district_id)
                    this.backendService
                        .get_one<District>(building.district_id, District)
                        .then((district) => {
                            this.district = district;
                            this.backendService
                                .get_one<Region>(district.region_id, Region)
                                .then((region) => this.region = region);
                        });
            });
    }

    selectImage(building_image){
        this.selected_building_image = building_image;
    }

    getImage(){
        return this.selected_building_image;
    }
}
