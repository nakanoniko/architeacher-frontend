import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MdRippleModule, MdButtonModule, MdIconModule, MdTooltipModule, MdDialogModule, MdSnackBarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app/app.component';
import { BuildingComponent } from './components/building/building.component';
import { BuildingListComponent } from './components/building-list/building-list.component';
import { ArchitectComponent } from './components/architect/architect.component';
import {
    ArchitectListComponent, GridB, GridC, GridA
} from './components/architect-list/architect-list.component';

import { BackendService } from './components/core/services/backend.service';
import { RippleService } from './components/core/services/ripple.service';
import { CanDeactivateService } from './services/can-deactivate.service';
import { ColorService } from './services/color.service';

import { SafeHtmlPipe } from './pipes/safe_html.pipe';

import {StyleListComponent} from './components/style-list/style-list.component';
import {StyleComponent} from './components/style/style.comonent';
import {ApproximateDatePipe} from './pipes/approximate_date.pipe';
import {ElementListComponent} from './components/element-list/element-list.component';
import {ElementComponent} from './components/element/element.component';
import {CoreModule} from './components/core/core.module';
import {AgmCoreModule} from '@agm/core';
import {IndexComponent} from './components/index/index.component';
import {Flipper} from './components/core/components/flipper/flipper.component';
import {AboutComponent} from './components/about/about.component';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MdTooltipModule,
        MdIconModule,
        MdDialogModule,
        MdButtonModule,
        MdRippleModule,
        MdSnackBarModule,
        CoreModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBRhM19Vv--r5SL3rtM-y7K6_jxEBZZmN4'
        })
    ],
    declarations: [
        AppComponent,
        GridA,
        GridB,
        GridC,
        Flipper,
        IndexComponent,
        BuildingListComponent,
        BuildingComponent,
        ArchitectListComponent,
        ArchitectComponent,
        StyleListComponent,
        StyleComponent,
        ElementComponent,
        ElementListComponent,
        SafeHtmlPipe,
        ApproximateDatePipe,
        AboutComponent
    ],
    bootstrap:    [
        AppComponent
    ],
    providers:    [
        BackendService,
        RippleService,
        CanDeactivateService,
        ColorService,
        LiveAnnouncer,
    ]
})
export class AppModule { }
