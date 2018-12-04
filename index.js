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