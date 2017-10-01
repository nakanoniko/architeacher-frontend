import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BuildingComponent}   from './components/building/building.component';
import {BuildingListComponent} from './components/building-list/building-list.component'
import {ArchitectComponent} from './components/architect/architect.component'
import {ArchitectListComponent} from './components/architect-list/architect-list.component'
import {CanDeactivateService} from './services/can-deactivate.service'
import {StyleListComponent} from "./components/style-list/style-list.component";
import {StyleComponent} from "./components/style/style.comonent";
import {ElementListComponent} from "./components/element-list/element-list.component";
import {ElementComponent} from "./components/element/element.component";
import {IndexComponent} from "./components/index/index.component";
import {AboutComponent} from "./components/about/about.component";


const routes: Routes = [
    { path: '', component: IndexComponent, canDeactivate:[CanDeactivateService]},
    { path: 'buildings', component:BuildingListComponent, canDeactivate:[CanDeactivateService] },
    { path: 'buildings/:id',  component: BuildingComponent, canDeactivate:[CanDeactivateService] },
    { path: 'architects', component:ArchitectListComponent, canDeactivate:[CanDeactivateService]},
    { path: 'architects/:id',  component: ArchitectComponent, canDeactivate:[CanDeactivateService] },
    { path: 'styles', component: StyleListComponent, canDeactivate:[CanDeactivateService]},
    { path: 'styles/:id',  component: StyleComponent, canDeactivate:[CanDeactivateService] },
    { path: 'elements', component: ElementListComponent, canDeactivate:[CanDeactivateService]},
    { path: 'elements/:id',  component: ElementComponent, canDeactivate:[CanDeactivateService] },
    { path: 'about',  component: AboutComponent, canDeactivate:[CanDeactivateService] },
    { path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }