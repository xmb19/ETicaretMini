import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'ETicaretClient';
  // formattedNumber: string = ''; // Kullanıcının girdiği sayıyı burada saklayacağız

  // onFormattedValueChange(value: string): void {
  //   this.formattedNumber = value; // Geçerli sayı değerini alıyoruz
  // }
}