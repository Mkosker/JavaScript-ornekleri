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