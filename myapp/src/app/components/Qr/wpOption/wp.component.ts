import { Component,Input } from "@angular/core";


@Component({
    selector:"wp-component",
    standalone: true,
    templateUrl: "./wp.component.html",
    styleUrls:["./wp.component.scss"],    
    
})

export class WpComponent{
   @Input() showWp:boolean = true;
}