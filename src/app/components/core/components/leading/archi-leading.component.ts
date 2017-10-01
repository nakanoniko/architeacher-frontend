import {Component, HostListener, Input, OnInit, ViewChild} from "@angular/core";
@Component({
    selector:'archi-leading',
    templateUrl:'./archi-leading.template.html',
    styleUrls:['./archi-leading.styles.css']
}) export class ArchiLeadingComponent implements OnInit{
    @Input('size') private size: string = '100%';
    @Input('img') private img: string;
    @Input('title') private title:string;
    @Input('title_info') private title_info:string;
    @Input('title_size') private title_size:string = 'huge';
    @Input('title_info_size') private title_info_size:string = 'big';
    @Input('scroll') private scroll:boolean = true;
    @Input('margin') private margin:boolean = true;
    @ViewChild('stickyBlock') private textBlock;

    private imgElement: HTMLImageElement;

    ngOnInit(): void {
        this.imgElement = this.textBlock.nativeElement.parentElement.parentElement.children[0];
    }


    @HostListener("window:scroll",[])
    onWindowScroll(){
        if(!scroll) return;
        this.textBlock.nativeElement.style.top = (window.innerHeight - this.textBlock.nativeElement.clientHeight) + 'px';
    }
}