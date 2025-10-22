import { CommonModule } from "@angular/common";
import { Component,Input, Output,EventEmitter } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";




@Component({
    selector:"wp-component",
    standalone: true,
    templateUrl: "./wp.component.html",
    styleUrls:["./wp.component.scss"],
    imports:[CommonModule,FormsModule]
})

export class WpComponent{
   @Input() showWp:boolean = true;

   @Output() generate = new EventEmitter<any>;

   phone:any = "";
   message:any = "";

  
   onSubmit(form: NgForm){
     if(form.invalid) return;
  
     const encodedMsg = encodeURIComponent(this.message.trim());

     let qrData = `https://wa.me/${this.phone.replace(/\D/g, '')}`

     if(this.message.trim()){
        qrData += `?text=${encodedMsg}`
     }

     this.generate.emit(qrData);
     
     console.log("qrData",qrData);
     
   }
}