import { Component, Input } from "@angular/core";


@Component({
    selector:"wifi-component",
    standalone: true,
    templateUrl: "./wifi.component.html",
    styleUrls:["./wifi.component.scss"],    
    
})

export class WifiComponent{
   @Input() showWifi: boolean = true;
  
}