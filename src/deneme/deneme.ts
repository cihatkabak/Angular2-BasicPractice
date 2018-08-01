import { Component } from '@angular/core';

@Component({
    selector: 'ders',
    template: "<button [class.red]='durum' (click)='eylem()'>Tıkla</button>{{deger}}<input type='text' (keyup.enter)='al(event)'/>"

})

export class deneme {
    myclass = "blue"
    durum = true;
    deger = "eski deger "
    eylem() {
        this.deger = this.deger + "deger değişti"
        this.myclass = "red";
        this.durum = !this.durum;//true ise false,false ise true(toggle)
    }
    al(s) {
        alert(s)
    }

}