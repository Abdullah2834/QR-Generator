import { CommonModule } from "@angular/common";
import { Component, Input, Output,EventEmitter } from "@angular/core";



@Component({
    selector:"wifi-component",
    standalone: true,
    templateUrl: "./wifi.component.html",
    styleUrls:["./wifi.component.scss"],    
    imports:[CommonModule]
})

export class WifiComponent{
   @Input() showWifi: boolean = true;  
   textValue = "";
   isEncryption:boolean = false;
   encryptionData:any = [
       "WPA/WPA2",
       "WEP",
       "Hiçbiri"
   ]
//    selectedEncryption:any = "";
    
   toggleEncryption(){
        this.isEncryption = !this.isEncryption;
   }



//    getEncryption(value:any){
//         this.selectedEncryption = value
//    }
}