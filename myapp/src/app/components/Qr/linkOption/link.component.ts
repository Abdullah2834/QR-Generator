import { CommonModule } from "@angular/common";
import { Component,Input, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";


@Component({
    selector:"link-component",
    standalone: true,
    templateUrl: "./link.component.html",
    styleUrls:["./link.component.scss"],    
    imports:[CommonModule, FormsModule]
})

export class LinkComponent{
    @Input() showLink:boolean = true;
    urlValue = "";
    
    @Output() generate = new EventEmitter<any>;
    
    onGenerate(){
        if(this.urlValue.trim()){
            this.generate.emit(this.urlValue.trim())                         
        }                                        
    }
    
}