import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
@Component({
    selector: 'archi-leading',
    templateUrl: './archi-leading.template.html',
    styleUrls: ['./archi-leading.styles.css']
}) export class ArchiLeadingComponent implements OnInit{
    @Input('size') public size = '100%';
    @Input('img') public img: string;
    @Input('title') public title: string;
    @Input('title_info') public title_info: string;
    @Input('title_size') public title_size = 'huge';
    @Input('title_info_size') public title_info_size = 'big';
    @Input('scroll') public scroll = true;
    @Input('margin') public margin = true;
    @ViewChild('stickyBlock') private textBlock;

    private imgElement: HTMLImageElement;

    ngOnInit(): void {
        this.imgElement = this.textBlock.nativeElement.parentElement.parentElement.children[0];
    }


    @HostListener('window:scroll', [])
    onWindowScroll(){
        if (!scroll) return;
        this.textBlock.nativeElement.style.top = (window.innerHeight - this.textBlock.nativeElement.clientHeight) + 'px';
    }
}
