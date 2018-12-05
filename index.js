const meyveler= ['elma','armut','ananas','karpuz']
var sayac=0
// while dongusu ornegi
while (sayac<meyveler.length) {
    if (meyveler [sayac]=='ananas') {
        console.log(meyveler [sayac])
    }
    sayac +=1
}
// for döngüsü ornegi
for (sayac=0; sayac<meyveler.length; sayac++) {
    if(meyveler [sayac]=='karpuz') {
        console.log (meyveler [sayac])
    }
}
// Dört harften büyük olanları yazdırsın
for (sayac=0; sayac<meyveler.length; sayac++) {
    if ( meyveler [sayac].length>4)
        console.log (meyveler [sayac])
}
const sayilar= [1, 2, 3, 4, 5]
var sayac, toplam=0
// sayıların bastan toplamı
for (sayac=0; sayac<5; sayac++) {
    toplam=toplam+sayilar [sayac]
    console.log (toplam)
}
// sayıların sondan toplamı
toplam=0
for (sayac=4; sayac>=0; sayac--) {
    toplam=toplam+sayilar [sayac]
    console.log (toplam)
}
// 2 ye bölümünden kalanı sıfır olanları ekrana yaz
for (sayac=0; sayac<5; sayac++){
    if(sayilar [sayac]%2==0)
        console.log (sayilar [sayac])
}
// JSON tipi ornek
var ulkeler= [
    {
        isim:'TÜRKİYE',
        dil: 'TÜRKÇE',
        kod: 1
    },
    {
        isim: 'İNGİLTERE',
        dil: 'İNGİLİZCE',
        kod: 2
    },
    {
        isim:'RUSYA',
        dil:'RUSÇA',
        kod: 3
    }
]
for (sayac=0; sayac<3; sayac++)
 {
     if(ulkeler[sayac].dil=='TÜRKÇE')
         console.log (ulkeler [sayac].kod)
 }
// JSON tipi örnek sayılardan çift olanların kodunu yazdır
var rakamlar= [
    {
        sayi: 1003,
        kodu: 1
    },
    {
        sayi: 218,
        kodu: 2
    },
    {
        sayi: 106,
        kodu: 3
    },
    {
        sayi: 43,
        kodu: 4
    },
    {
        sayi: 12,
        kodu: 5
    }  
]
for (sayac=0; sayac<5; sayac++)
    {
        if (rakamlar [sayac].sayi%2==0)
            console.log (rakamlar [sayac].kodu)
    }
    // 1 lerin çarpım tablosu
var carpim=1
var sonuc
    for (sayac=0; sayac<=10; sayac++) {
        sonuc=carpim*sayac
        console.log (carpim, "*", sayac, "=", sonuc)
    }
        // 2 lerin çarpım tablosu
var carpim=2
var sonuc
    for (sayac=0; sayac<=10; sayac++) {
        sonuc=carpim*sayac
        console.log (carpim, "*", sayac, "=", sonuc)
    }