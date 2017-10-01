
import {NgModule} from "@angular/core";
import {ArchiButtonComponent} from "./components/button/archi-button.component";
import {MdButtonModule} from "@angular/material";
import {ArchiTextComponent} from "./components/text/archi-text.component";
import {ArchiHeadingComponent} from "./components/typography/archi-heading.component";
import {CommonModule} from "@angular/common";
import {ArchiUnderlineComponent} from "./components/typography/archi-underline.component";
import {ArchiLeadingComponent} from "./components/leading/archi-leading.component";
import {ArchiCarouselComponent} from "./components/carousel/archi-carousel.component";
@NgModule({
    imports:[
        MdButtonModule,
        CommonModule
    ],
    declarations:[
        ArchiButtonComponent,
        ArchiTextComponent,
        ArchiHeadingComponent,
        ArchiUnderlineComponent,
        ArchiLeadingComponent,
        ArchiCarouselComponent
    ],
    exports:[
        ArchiButtonComponent,
        ArchiTextComponent,
        ArchiHeadingComponent,
        ArchiUnderlineComponent,
        ArchiLeadingComponent,
        ArchiCarouselComponent
    ]

}) export class CoreModule { }