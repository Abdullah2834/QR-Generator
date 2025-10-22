import { CommonModule } from "@angular/common";
import { Component,Input, Output,EventEmitter } from "@angular/core";




@Component({
    selector:"mail-component",
    standalone: true,
    templateUrl: "./mail.component.html",
    styleUrls:["./mail.component.scss"],    
    imports:[CommonModule]
})

export class MailComponent{
    @Input() showLink:boolean = true;
    
    mailValue = "";
    
    @Output() generate = new EventEmitter<any>;
    
    onGenerate(){
        if(this.mailValue.trim()){
            this.generate.emit(`mailto:${this.mailValue}`)                                                 
        }                                        
    }
}