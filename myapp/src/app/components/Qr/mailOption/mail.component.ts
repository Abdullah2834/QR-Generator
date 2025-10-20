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
    
    getValue(event:any){    
       this.mailValue = event.target.value;
       console.log(this.mailValue);       
    }
}