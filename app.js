let nombre = prompt("Como te llamas?");

alert("Bienvenido " + nombre);

let dolar = prompt("cuantos dolares quieres comprar");

let total = dolar * 306;

alert("Total a pagar " + total + " Pesos Argentinos");

let pagar = prompt("Tarjeta de debito u credito?");

let dinero = Number(
  prompt(
    `Hola ${nombre}, El monto a pagar es $` + total
  )
);
let totalApagar = total;

if (dinero >= totalApagar) {
  alert(`Gracias ${nombre}, su pago se ha efectuado con exito`);
  pedido();
} else {
  alert("Monto ingresado incorrecto");
}

function pedido() {
  let producto = prompt(` ${nombre} ¿Desea retirar el producto en nuestra sucursal o se lo enviamos por correo?: `);
  switch (producto.toLowerCase()) {
    case "retirar el producto":
      alert(` ${nombre} a continuacion le dejamos la direccion de nuestra sucursal :
      mar de plata 19231`
      );
      break;
    case "enviar el producto":
      alert(` ${nombre} Le enviaremos el producto lo mas pronto posible`);
      break;
  }
}
