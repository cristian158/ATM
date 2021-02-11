class Bill{
  constructor(n, v, c){
    // this.image = new Image();
    this.name = n;
    this.valor = v;
    this.cantidad = c;
    // this.image.src = images[this.name];
  }

}

// total
for (x in box){
  suma = x.valor*x.cantidad;
  total
}


function $(x) {return document.getElementById(x)}

delivered = [];
div = 0;
notes = 0; // to be delivered
var box = [];
box.push(
  new Bill('100', 100, 30),
  new Bill('50', 50, 70),
  new Bill('10', 10, 150),
  new Bill('5', 5, 200)); // 11200
var b = $('withdraw'); // button
b.addEventListener('click', giveMoney);
var r = $('outcome'); // money that has been withdrawn

// 'money' != var money; str vs var
function giveMoney(){
  var t = $('request'); // get <p> with id 'request',
  money = parseInt(t.value); // take the amount asked
  for(var bi of box){
    if(money > 0){
      div = Math.floor(money / bi.valor);
      (div > bi.cantidad) ? (notes = bi.cantidad) : notes=div; // if else statement
      delivered.push(new Bill(bi.valor, notes));
      money -= (bi.valor*notes)
    }
  }

  if(money > 0){
    r.innerHTML = 'out of money'; //innerHTML es atributo del objeto r
  }
  else{
    for(var e of delivered) { //e = instancia de la Clase Bill
      if(e.cantidad>0){
        r.innerHTML += `${e.cantidad} billetes de $${e.valor} <br>`;
      }
    }
  }
}
