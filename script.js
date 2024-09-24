var set = cartObj();
var matnBuyurtma = "Sizning buyurtmangiz: ";
var narx = 0;
var bb = set;
for (const zakaz in set) {
  matnBuyurtma=matnBuyurtma.concat(zakaz)
  matnBuyurtma=matnBuyurtma.concat(" (")
  matnBuyurtma=matnBuyurtma.concat(set[zakaz].info)
  matnBuyurtma=matnBuyurtma.concat("), ")
  narx += set[zakaz].price;
    
}
matnBuyurtma=matnBuyurtma.concat("Etkazib berish xizmati bilan narxi "+(narx+9000)+" sum. Etkazib berish xizmati 9000 sum");
console.log(matnBuyurtma);
