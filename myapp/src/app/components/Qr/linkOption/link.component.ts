import { Component,Input } from "@angular/core";


@Component({
    selector:"link-component",
    standalone: true,
    templateUrl: "./link.component.html",
    styleUrls:["./link.component.scss"],    
    
})

export class LinkComponent{
    @Input() showLink:boolean = true;
}