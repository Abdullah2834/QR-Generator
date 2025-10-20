import { Component } from "@angular/core";
import { LinkComponent } from "./linkOption/link.component";
import { WpComponent } from "./wpOption/wp.component";
import { MailComponent } from "./mailOption/mail.component";
import { WifiComponent } from "./wifiOption/wifi.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@Component({
    selector:"qr-component",
    standalone: true,
    templateUrl: "./qr.component.html",
    styleUrls:["./qr.component.scss"],
    imports:[
        CommonModule,
        LinkComponent,
        WpComponent,
        MailComponent,
        WifiComponent,
        FormsModule         
    ]
})

export class QrComponent{
    activeTab:any = "link";
    selectedType:any = "url";
    qrData:string = "";

   
    switchModal(value:any){
        this.activeTab = value;        
    }

    switchQrType(valueType:any){
        this.selectedType = valueType                
    }

   

    
}