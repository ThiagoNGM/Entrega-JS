// Funcion del metodo filter
function mostrarEnPantalla(productos) {
  mensaje = "Lista de productos filtrada en la tienda de ropa masculina:\n\n";
  productos.forEach(function (producto) {
    mensaje += "ID: " + producto.id + " - ";
    mensaje += "Talle: " + producto.talle + " - ";
    mensaje += "Color: " + producto.color + " - ";
    mensaje += "Precio: $" + producto.precio + " - ";
    mensaje += "Tipo: " + producto.tipo + "\n";
  });
  return alert(mensaje);
}

// array de objetos

let tiendaDeRopaMasculina = [
  {
    id: 1,
    categoria: "hombre",
    talle: "m",
    color: "azul",
    tipo: "camisa",
    precio: 29.99,
    vendido: false,
  },
  {
    id: 2,
    categoria: "hombre",
    talle: "l",
    color: "negro",
    tipo: "campera",
    precio: 69.99,
    vendido: false,
  },
  {
    id: 3,
    categoria: "hombre",
    talle: "s",
    color: "blanco",
    tipo: "remera",
    precio: 19.99,
    vendido: false,
  },
  {
    id: 4,
    categoria: "hombre",
    talle: "xl",
    color: "gris",
    tipo: "pantalon",
    precio: 39.99,
    vendido: false,
  },
  {
    id: 5,
    categoria: "hombre",
    talle: "m",
    color: "verde",
    tipo: "buzo",
    precio: 49.99,
    vendido: false,
  },
  {
    id: 6,
    categoria: "hombre",
    talle: "l",
    color: "azul oscuro",
    tipo: "remera mangas largas",
    precio: 24.99,
    vendido: false,
  },
  {
    id: 7,
    categoria: "hombre",
    talle: "xl",
    color: "negro",
    tipo: "traje",
    precio: 149.99,
    vendido: false,
  },
  {
    id: 8,
    categoria: "hombre",
    talle: "m",
    color: "gris",
    tipo: "traje",
    precio: 29.99,
    vendido: false,
  },
  {
    id: 9,
    categoria: "hombre",
    talle: "l",
    color: "negro",
    tipo: "pantalon",
    precio: 39.99,
    vendido: false,
  },
  {
    id: 10,
    categoria: "hombre",
    talle: "xl",
    color: "gris",
    tipo: "campera",
    precio: 59.99,
    vendido: false,
  },
  {
    id: 11,
    categoria: "hombre",
    talle: "s",
    color: "blanco",
    tipo: "camisa",
    precio: 19.99,
    vendido: false,
  },
  {
    id: 12,
    categoria: "Hombre",
    talle: "M",
    color: "Azul Oscuro",
    tipo: "buzo",
    precio: 49.99,
    vendido: false,
  },
  {
    id: 13,
    categoria: "Hombre",
    talle: "L",
    color: "Verde",
    tipo: "remera",
    precio: 34.99,
    vendido: false,
  },
  {
    id: 14,
    categoria: "Hombre",
    talle: "M",
    color: "Azul",
    tipo: "camisa",
    precio: 29.99,
    vendido: false,
  },
  {
    id: 15,
    categoria: "Hombre",
    talle: "L",
    color: "Blanco",
    tipo: "remera mangas largas",
    precio: 19.99,
    vendido: false,
  },
  {
    id: 15,
    categoria: "Hombre",
    talle: "XL",
    color: "Negro",
    tipo: "pantalon",
    precio: 39.99,
    vendido: false,
  },
  {
    id: 17,
    categoria: "Hombre",
    talle: "S",
    color: "Gris",
    tipo: "campera",
    precio: 59.99,
    vendido: false,
  },
  {
    id: 18,
    categoria: "Hombre",
    talle: "M",
    color: "Azul Oscuro",
    tipo: "remera mangas largas",
    precio: 44.99,
    vendido: false,
  },
  {
    id: 19,
    categoria: "Hombre",
    talle: "L",
    color: "blanco",
    tipo: "traje",
    precio: 24.99,
    vendido: false,
  },
];
tiendaDeRopaMasculina.forEach(function (producto) {
  for (let propiedad in producto) {
    if (typeof producto[propiedad] === "string") {
      producto[propiedad] = producto[propiedad].toLowerCase();
    }
  }
});

let mensaje = "Lista de productos en la tienda de ropa masculina:\n\n";
tiendaDeRopaMasculina.forEach(function (producto) {
  mensaje += "ID: " + producto.id + " - ";
  mensaje += "Talle: " + producto.talle + " - ";
  mensaje += "Color: " + producto.color + " - ";
  mensaje += "Precio: $" + producto.precio + " - ";
  mensaje += "Tipo: " + producto.tipo + "\n";
});
alert(mensaje);

// Seleccion de la accion

let accion = prompt(
  "Que accion quiere realizar?  \n \n buscar un producto = 1  \n filtrar los productos = 2   \n ver el carrito = 3  \n salir de la pagina = otro caracter"
);
accion = Number(accion);
if (accion == 1) {
  // metodo find
  while (accion == 1) {
    let productoBuscado = prompt("Escriba el producto que usted busca");
    productoBuscado = productoBuscado.toLowerCase();
    productoEncontrado = tiendaDeRopaMasculina.some((producto) =>
      producto.tipo.includes(productoBuscado)
    );

    if (productoEncontrado) {
      let producto = tiendaDeRopaMasculina.find((ropa) =>
        ropa.tipo.includes(productoBuscado)
      );
      let mostrar = "El producto que usted busco se encontro exitosamente \n";
      mostrar += "ID: " + producto.id + " - ";
      mostrar += "Talle: " + producto.talle + " - ";
      mostrar += "Categoria: " + producto.categoria + " - ";
      mostrar += "Color: " + producto.color + " - ";
      mostrar += "Precio: $" + producto.precio + " - ";
      mostrar += "Tipo: " + producto.tipo;

      alert(mostrar);
    } else {
      alert("No se encontro resultados de su busqueda");
    }
    accion = prompt(
      "Quiere buscar algun otro producto? \n si = 1 \nno = Ingrese otro caracter"
    );
  }
} else if (accion == 2) {
  // metodo filter
  accion = 1;
  while (accion == 1) {
    let filtro = prompt(
      "ingrese como quiere filtrar los productos \n 1 = talle  \n 2 = color  \n 3 = tipo de ropa \n ingrese un dato diferente si quiere salir"
    );

    if (filtro == 1) {
      let productoFiltrado;
      let seleccion = prompt(
        "¿Qué tipo de talle quiere filtrar? \n XL \n L \n M \n S"
      );

      productoFiltrado = tiendaDeRopaMasculina.filter((ropa) =>
        ropa.talle.includes(seleccion)
      );

      let mensaje = mostrarEnPantalla(productoFiltrado);
    } else if (filtro == 2) {
      let productoFiltrado;
      let seleccion = prompt(
        "Segun que tipo de color quiere filtrar? \n azul \n negro \n blanco \n gris \n verde \n azul oscuro"
      );
      productoFiltrado = tiendaDeRopaMasculina.filter((ropa) =>
        ropa.color.includes(seleccion)
      );

      let mensaje = mostrarEnPantalla(productoFiltrado);
    } else if (filtro == 3) {
      let productoFiltrado;
      let seleccion = prompt(
        "Que tipo de ropa quiere filtrar?\n camisa \n campera \n remera \n pantalon \n buzo \n remeras mangas largas \n traje "
      );
      productoFiltrado = tiendaDeRopaMasculina.filter((ropa) =>
        ropa.tipo.includes(seleccion)
      );
      let mensaje = mostrarEnPantalla(productoFiltrado);
    } else {
      alert(
        "El dato ingresado no es valido, si quiere volver a filtrar los productos reinicie la pagina"
      );
    }
    accion = prompt(
      "Quiere volver a filtrar los productos? \nsi = 1 \nno = otro caracter"
    );
  }
} else if (accion == 3) {
  // Agregar al carrito
  let carrito = "Ropa agregada a su carrito \n";
  let ingresaralcarrito = prompt(
    "Quiere agregar un producto al carrito? \n si = 1 \n no = Ingrese otro caracter"
  );
  ingresaralcarrito = Number(ingresaralcarrito);

  if (ingresaralcarrito == 1) {
    while (ingresaralcarrito == 1) {
      let agregar = prompt(
        "Ingrese el id del producto que quiere agregar al carrito"
      );
      let productoAgregado = tiendaDeRopaMasculina.find(
        (incorporar) => incorporar.id == agregar
      );

      carrito += "ID: " + productoAgregado.id + " - ";
      carrito += "Talle: " + productoAgregado.talle + " - ";
      carrito += "Color: " + productoAgregado.color + " - ";
      carrito += "Precio: $" + productoAgregado.precio + " - ";
      carrito += "Tipo: " + productoAgregado.tipo + "\n";

      alert(carrito);

      ingresaralcarrito = prompt(
        "Quiere seguir agregando productos al carrito? \n si = 1 \n no = Ingrese otro caracter"
      );
      Number(ingresaralcarrito);
    }
  } else {
    alert("Usted salio del carrito");
  }
  alert(
    "Estos son los productos que tiene en su carrito:  \n\n" +
      carrito +
      "\n Gracias por usar nuestra pagina!!"
  );
} else {
  alert("Usted salio de la pagina");
}
alert(
  "Gracias por uasr nuestra pagina, si quiere volver a utilizarla, reinicie el navegador"
);
