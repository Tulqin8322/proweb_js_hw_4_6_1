var set = cartObj();
var matnBuyurtma = "Sizning buyurtmangiz: ";
var narx=0
for (const zakaz in set) {
  const buyurtma = set[zakaz];
  var bb=zakaz
  
  for (const b in buyurtma) {
    matnBuyurtma.concat(bb).concat(" ").concat(buyurtma[b].info)
    narx+=buyurtma[b].price
  }
  
  matnBuyurtma.concat(narx)
  console.log(matnBuyurtma)
}

