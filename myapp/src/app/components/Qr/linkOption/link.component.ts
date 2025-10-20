import { CommonModule } from "@angular/common";
import { Component,Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector:"link-component",
    standalone: true,
    templateUrl: "./link.component.html",
    styleUrls:["./link.component.scss"],    
    imports:[CommonModule]
})

export class LinkComponent{
    @Input() showLink:boolean = true;  
    urlValue = "";
     
  
    
    getValue(event:any){    
       this.urlValue = event.target.value;
    }

    generateQr(){
           
    }
    
}