import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../../services/admin/alertify.service';

declare var alertify: any


@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
alertDismiss() {
throw new Error('Method not implemented.');
}
  constructor(private alertifyService: AlertifyService){}
  ngOnInit(): void {

  }

  alertMessage(){
    
    this.alertifyService.message("Merhaba" ,{
      messageType: MessageType.Success,
      delay: 5,
      dismissOther: true,
      position : Position.TopCenter
    } );
  }

  d(){
    this.alertifyService.dismiss();
  }
  

}
