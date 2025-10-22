import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { LinkComponent } from "./linkOption/link.component";
import { WpComponent } from "./wpOption/wp.component";
import { MailComponent } from "./mailOption/mail.component";
import { WifiComponent } from "./wifiOption/wifi.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import * as QRCode from "qrcode";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
    selector:"qr-component",
    standalone: true,
    templateUrl: "./qr.component.html",
    styleUrls:["./qr.component.scss"],
    imports:[
        CommonModule,
        LinkComponent,
        WpComponent,        
        WifiComponent,
        FormsModule         
    ]
})

export class QrComponent{
    @ViewChild("qrCodeElement") qrCodeElement?: ElementRef
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

    async generateQr(data:any){
        try{
            this.qrCodeUrl = await QRCode.toDataURL(data)
            this.isMessage = true;
            setTimeout(()=>{
                this.isMessage = false;
            },2000)                       
        }catch(err){
            console.log("err-----",err);            
        }
    }

    downloadPNG(){
        if(!this.qrCodeUrl) return;    
        const link = document.createElement("a")
        link.href = this.qrCodeUrl;
        link.download = "qr-code.png";
        link.click();     
    }

    async downloadPDF(){
        const qrElement = this.qrCodeElement?.nativeElement
        console.log("qrElement",qrElement.value);
        
        const canvas = await html2canvas(qrElement,{scale: 3,backgroundColor:null})
        const imgData = canvas.toDataURL("image/png")

        const pdf = new jsPDF({
            orientation : "portrait",
            unit: "mm",
            format: "a4"
        })

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const imgWidth = 80;
        const x = (pdfWidth - imgWidth) / 2;
        
        pdf.addImage(imgData,"PNG",x,90,imgWidth,imgWidth);
        pdf.save("qr-code.pdf");
        
    }
    

}