import { Component,Input } from "@angular/core";



@Component({
    selector:"mail-component",
    standalone: true,
    templateUrl: "./mail.component.html",
    styleUrls:["./mail.component.scss"],    
    
})

export class MailComponent{
    @Input() showLink:boolean = true;
}