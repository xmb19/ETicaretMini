import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appNumberFormat]'
})
export class NumberFormatDirective {
  private decimalSeparator = ','; // Ondalık ayıracı
  private thousandSeparator = '.'; // Binlik ayıracı

  @Output() formattedValueChange = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: Event) {
    let inputElement = event.target as HTMLInputElement;
    let cursorPosition = inputElement.selectionStart || 0;

    // 1️⃣ Geçersiz karakterleri temizle (sadece rakam ve virgül bırak)
    let rawValue = inputElement.value;
    let cleanedValue = rawValue.replace(/[^0-9,]/g, ''); // Harf ve sembol karakterlerini temizler

    // 2️⃣ Virgülün sadece bir kez bulunmasına izin ver
    let parts = cleanedValue.split(',');
    if (parts.length > 2) {
      cleanedValue = parts[0] + ',' + parts.slice(1).join('').replace(/,/g, ''); // İkinci virgülü temizler
    }

    // 3️⃣ Sayıyı formatla
    let formattedValue = this.formatNumber(cleanedValue);

    // 4️⃣ Sayıyı geçerli formatla gönder
    this.formattedValueChange.emit(formattedValue);

    // 5️⃣ Giriş alanındaki değeri güncelle
    inputElement.value = formattedValue;

    // 6️⃣ İmleç kaymasını engelle
    let oldLength = rawValue.length;
    let newLength = formattedValue.length;
    let diff = newLength - oldLength;

    setTimeout(() => {
      inputElement.setSelectionRange(cursorPosition + diff, cursorPosition + diff);
    });
  }

  private formatNumber(value: string): string {
    let [integerPart, decimalPart] = value.split(',');
  
    // Baştaki gereksiz sıfırları temizle (sadece "0"dan oluşan tam sayıları koru)
    integerPart = integerPart.replace(/^0+(?=\d)/, '');
  
    // Eğer tamamen "0"lardan oluşuyorsa, sadece "0" olarak gösterelim
    if (/^0+$/.test(integerPart)) {
      integerPart = '0';
    } else {
      // Binlik ayıracı ekle
      integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandSeparator);
    }
  
    // Eğer virgül varsa, decimal kısmını ekleyelim
    if (decimalPart !== undefined) {
      decimalPart = decimalPart.slice(0,2);
      return `${integerPart},${decimalPart}`;
      
    }
  
    return integerPart;
  }
  
  
}
