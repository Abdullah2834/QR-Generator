import { CommonModule } from "@angular/common";
import { Component,Input, Output,EventEmitter } from "@angular/core";




@Component({
    selector:"wp-component",
    standalone: true,
    templateUrl: "./wp.component.html",
    styleUrls:["./wp.component.scss"],
    imports:[CommonModule]
})

export class WpComponent{
   @Input() showWp:boolean = true;
   
   textValue = "";
  
   ngOnInit(){
       
   }
}