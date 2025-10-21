import { Component, Input } from "@angular/core";
import { LinkComponent } from "./linkOption/link.component";
import { WpComponent } from "./wpOption/wp.component";
import { MailComponent } from "./mailOption/mail.component";
import { WifiComponent } from "./wifiOption/wifi.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import * as QRCode from "qrcode";

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
    qrCodeUrl: string | null = null;
    link:any = "";
    isMessage:boolean = false;

    switchModal(value:any){
        this.activeTab = value;        
    }

    linkupdate(newLink:any){
        this.link = newLink
    }

    async generateQr(link:any){
        try{
            this.qrCodeUrl = await QRCode.toDataURL(link)
            this.isMessage = true;
            setTimeout(()=>{
                this.isMessage = false;
            },2000)                       
        }catch(err){
            console.log("err-----",err);            
        }
    }
    

}