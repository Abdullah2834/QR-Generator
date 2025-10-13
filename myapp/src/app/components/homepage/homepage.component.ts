import { Component, OnInit } from "@angular/core";
import { QrComponent } from "../Qr/qr.component";


@Component({
    selector:"homepage-component",
    standalone: true,
    templateUrl: "./homepage.component.html",
    styleUrls:["./homepage.component.scss"],
    imports:[
        QrComponent
    ]
})

export class HomePageComponent{

}
