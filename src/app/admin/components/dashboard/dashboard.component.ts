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
    this.alertifyService.message("Merhaba" ,MessageType.Error, Position.BottomLeft, 5);
  }

  alertMessage(){
    this.alertifyService.message("Merhaba" ,MessageType.Error, Position.BottomLeft, 5);
  }

  d(){
    this.alertifyService.dismiss();
  }
  

}
