import { Injectable } from '@angular/core';
//import * as alertify from 'alertifyjs';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() { }

  //message(message: string, messageType: MessageType, position:Position, delay:number=3, dismissOther:boolean=false)
  message(message: string, options:Partial<AlertifyOptions>){ 
    alertify.set('notifier', 'position', options.position);
    alertify.set('notifier','delay', options.delay);
    alertify[options.messageType](message);

    const msg =alertify[options.messageType](message);
    if (options.dismissOther){
      msg.dismissOthers(); 
    }
  }

  dismiss(){
    alertify.dismissAll();
  }
}

export class AlertifyOptions{
  messageType: MessageType = MessageType.Message;
  position : Position = Position.BottomLeft;
  delay: number = 3;
  dismissOther: boolean = false;
}

export enum MessageType{
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success= "success",
  Warning = "warning"
}

export enum Position{
  TopRight = "top-right",
  TopCenter = "top-center",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left" 
}

