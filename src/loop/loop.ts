import { Component, style } from '@angular/core';

@Component({
    selector: 'myloop',//selector'u index.html'de belirtmeliyiz ki componentimiz çalışsın
    
    templateUrl: './loop.html',//html tasarımımızın url'siniz veriyoruz.
    
    /*template:"<label>Merhaba</label>"*/ //Bu şekilde yazarakta html tasarımını ts dosyamızın içinde yapabiliriz.
    
    styleUrls: ['./loop.css'],//burada ise projeye bir css dosyası entegre ettik.
    
    styles:[`
    ul{
        background:antiqueblue;
        color:grey;
        margin:5px;
    } 
    li{
        margin:5px;
        box-shadow:0 0 5px grey;
    }
    table{
        margin-left:20px;
        margin-top:10px;
    }
    `]//sadece bu componentimizin html dosyasına özel stil belirler.
})


export class loop {
    veriler = [{ "ad": "Cihat", "soyad": "Kabak" },
    { "ad": "Ahmet", "soyad": "Mehmet" },
    { "ad": "Ali", "soyad": "Veli" }]

    ekle(ad, soyad) {
        if (ad == "" || soyad == "") {
            alert("Gerekli Alanları Doldurunuz!");
        }
        else {
            alert("Eklendi")
            this.veriler.push({ "ad": ad, "soyad": soyad });
        }

    }
    sil(j) {
        this.veriler.splice(j, 1);//j'ninci index numarasında itibaren 1 tane sil demek.
        
    }

}