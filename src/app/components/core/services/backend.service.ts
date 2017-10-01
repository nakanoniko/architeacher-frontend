import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Building } from '../../../models/building';
import 'rxjs/add/operator/toPromise';
import {Architect} from '../../../models/architect';
import {MetroRoute} from '../../../models/metro_route';
import {MetroStation} from '../../../models/metro_station';
import {Region} from '../../../models/region';
import {District} from '../../../models/district';
import {Style} from '../../../models/style';
import {Element} from '../../../models/element';

@Injectable()
export class BackendService{
    api_prefix: string;
    promise: Promise<any>;

    constructor( private http: Http) {
        this.api_prefix = 'http://architeacher.io/api';
    }

    static get_route(cls){
        switch (cls){
            case Building:
                return 'buildings';
            case Architect:
                return 'architects';
            case MetroRoute:
                return 'metro_routes';
            case MetroStation:
                return 'metro_stations';
            case Region:
                return 'regions';
            case District:
                return 'districts';
            case Style:
                return 'styles';
            case Element:
                return 'elements';
            default:
                throw new Error('fix me in backend_service');
        }
    }

    private static handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    load_by_url(uri): void{
        this.promise = this.http
            .get(this.api_prefix + uri)
            .toPromise();
    }

    load_one<T>(id, cls: {new(): T}): void{
        this.promise = this.http
            .get(this.api_prefix + '/' + BackendService.get_route(cls) + '/' + id)
            .toPromise();
    }

    load_all<T>(cls: {new(): T}): void {
        this.promise = this.http
            .get(this.api_prefix + '/'  + BackendService.get_route(cls))
            .toPromise();
    }

    load_random<T>(cls: {new(): T}): void{
        this.promise = this.http
            .get(this.api_prefix + '/' + BackendService.get_route(cls) + '/random')
            .toPromise();
    }

    get_one<T>(id, cls: {new(): T}): Promise<T>{
        if (!this.promise)
            this.load_one<T>(id, cls);
        const promise = this.promise;
        this.promise = null;
        return promise.then(response => response.json() as T);
    }

    get_all<T>(cls: {new(): T}): Promise<T[]>{
        if (!this.promise)
            this.load_all<T>(cls);
        const promise = this.promise;
        this.promise = null;
        return promise.then(response => response.json() as T[]);
    }

    get_random<T>(cls: {new(): T}): Promise<T>{
        if (!this.promise)
            this.load_random<T>(cls);
        const promise = this.promise;
        return promise.then(response => response.json() as T);
    }

}
