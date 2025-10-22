import { CommonModule } from "@angular/common";
import { Component, Input, Output,EventEmitter } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";




@Component({
    selector:"wifi-component",
    standalone: true,
    templateUrl: "./wifi.component.html",
    styleUrls:["./wifi.component.scss"],    
    imports:[CommonModule,FormsModule]
})

export class WifiComponent{   
   @Input() showWifi: boolean = true;  
   ssid:any = "";
   password:any = "";
   isEncryption:boolean = false;
   encryptionData:any = [
    {id:"1",name: "WPA/WPA2"},
    {id:"2",name:"WEP"},    
   ]
   selectedEncryption:any = "";
   @Output() generate = new EventEmitter<any>;
   

   toggleEncryption(){
        this.isEncryption = !this.isEncryption;

   }

   selectEncryption(item:any){
        this.selectedEncryption = item               
   }



   onGenerate(form:NgForm){
        if(form.invalid) return;
        
        let encryptionType = ""
        if(this.selectedEncryption.name === "WPA/WPA2") encryptionType = "WPA"
        else if(this.selectedEncryption.name === "WEP") encryptionType = "WEP"
        else encryptionType = ""

        let qrData = `WIFI:T:${encryptionType};S:${this.ssid};P:${this.password};;`
        this.generate.emit(qrData);
   }
}