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
    rutaImagen: "camisaAzulHombre.png",
  },
  {
    id: 2,
    categoria: "hombre",
    talle: "l",
    color: "negro",
    tipo: "campera",
    precio: 69.99,
    vendido: false,
    rutaImagen: "camperaNegraHombre.png",
  },
  {
    id: 3,
    categoria: "hombre",
    talle: "s",
    color: "blanco",
    tipo: "remera",
    precio: 19.99,
    vendido: false,
    rutaImagen: "remeraBlancaHombre.png",
  },
  {
    id: 4,
    categoria: "hombre",
    talle: "xl",
    color: "gris",
    tipo: "pantalon",
    precio: 39.99,
    vendido: false,
    rutaImagen: "pantalonGrisHombre.png",
  },
  {
    id: 5,
    categoria: "hombre",
    talle: "m",
    color: "verde",
    tipo: "buzo",
    precio: 49.99,
    vendido: false,
    rutaImagen: "buzoVerdeHombre.png",
  },
  {
    id: 6,
    categoria: "hombre",
    talle: "l",
    color: "azul oscuro",
    tipo: "remera mangas largas",
    precio: 24.99,
    vendido: false,
    rutaImagen: "remeraMangaLargAzulHombre.png",
  },
  {
    id: 7,
    categoria: "hombre",
    talle: "xl",
    color: "negro",
    tipo: "traje",
    precio: 49.99,
    vendido: false,
    rutaImagen: "trajeNegroHombre.png",
  },
  {
    id: 8,
    categoria: "hombre",
    talle: "m",
    color: "gris",
    tipo: "traje",
    precio: 29.99,
    vendido: false,
    rutaImagen: "trajeGrisHombre.png",
  },
  {
    id: 9,
    categoria: "hombre",
    talle: "l",
    color: "negro",
    tipo: "pantalon",
    precio: 39.99,
    vendido: false,
    rutaImagen: "pantalonNegroHombre.png",
  },
  {
    id: 10,
    categoria: "hombre",
    talle: "xl",
    color: "gris",
    tipo: "campera",
    precio: 59.99,
    vendido: false,
    rutaImagen: "camperaGrisHombre.png",
  },
  {
    id: 11,
    categoria: "hombre",
    talle: "s",
    color: "blanco",
    tipo: "camisa",
    precio: 19.99,
    vendido: false,
    rutaImagen: "camisaBlancaHombre.png",
  },
  {
    id: 12,
    categoria: "Hombre",
    talle: "m",
    color: "azul oscuro",
    tipo: "buzo",
    precio: 49.99,
    vendido: false,
    rutaImagen: "buzoAzulOscuroHombre.png",
  },
  {
    id: 13,
    categoria: "Hombre",
    talle: "l",
    color: "verde",
    tipo: "remera",
    precio: 34.99,
    vendido: false,
    rutaImagen: "remeraVerdeHombre.png",
  },
  {
    id: 14,
    categoria: "Hombre",
    talle: "M",
    color: "azul",
    tipo: "traje",
    precio: 29.99,
    vendido: false,
    rutaImagen: "trajeAzulHombre.png",
  },
  {
    id: 15,
    categoria: "Hombre",
    talle: "l",
    color: "Blanco",
    tipo: "remera mangas largas",
    precio: 19.99,
    vendido: false,
    rutaImagen: "remeraMangaLargBlancaHombre.png",
  },
  {
    id: 15,
    categoria: "Hombre",
    talle: "xl",
    color: "verde",
    tipo: "pantalon",
    precio: 39.99,
    vendido: false,
    rutaImagen: "pantalonVerdeHombre.png",
  },
  {
    id: 17,
    categoria: "Hombre",
    talle: "s",
    color: "azul",
    tipo: "campera",
    precio: 59.99,
    vendido: false,
    rutaImagen: "camperaAzulHombre.png",
  },
  {
    id: 18,
    categoria: "Hombre",
    talle: "m",
    color: "azul oscuro",
    tipo: "remera",
    precio: 44.99,
    vendido: false,
    rutaImagen: "remeraAzulHombre.png",
  },
  {
    id: 19,
    categoria: "Hombre",
    talle: "L",
    color: "blanco",
    tipo: "traje",
    precio: 24.99,
    vendido: false,
    rutaImagen: "trajeblancoHombre.png",
  },
];

function principal(tiendaDeRopaMasculina) {
  let carrito = obtenerCarritoLS();
  renderizarCarrito(carrito);

  let botonBuscador = document.getElementById("botonBuscador");
  botonBuscador.addEventListener("click", (event) => {
    event.preventDefault();
    filtrarYRenderizarRopa(tiendaDeRopaMasculina);
  });

  renderizarRopa(tiendaDeRopaMasculina);
  let botonComprar = document.getElementById("botonComprar");
  botonComprar.addEventListener("click", finalizarCompra);

  let botonesFiltrosTipos = document.getElementsByClassName("botonFiltroTipo");
  for (const botonFiltro of botonesFiltrosTipos) {
    botonFiltro.addEventListener("click", (e) =>
      filtrarYRenderizarPorTipo(e, tiendaDeRopaMasculina)
    );
  }
  let botonesFiltrosColores =
    document.getElementsByClassName("botonFiltroColor");
  for (const botonFiltro of botonesFiltrosColores) {
    botonFiltro.addEventListener("click", (e) =>
      filtrarYRenderizarPorColor(e, tiendaDeRopaMasculina)
    );
  }
}

function filtrarYRenderizarPorColor(e, productos) {
  let value = e.target.value;
  let produtosFiltrados = productos.filter(
    (producto) => producto.color === value
  );
  renderizarRopa(produtosFiltrados);
}

function filtrarYRenderizarPorTipo(e, productos) {
  let value = e.target.value;
  let produtosFiltrados = productos.filter(
    (producto) => producto.tipo === value
  );
  renderizarRopa(produtosFiltrados);
}

function obtenerCarritoLS() {
  let carrito = [];
  let carritoLS = JSON.parse(localStorage.getItem("carrito"));
  carrito = carritoLS ? carritoLS : [];
  return carrito;
}

function finalizarCompra() {
  localStorage.removeItem("carrito");
  renderizarCarrito([]);
}

function filtrarYRenderizarRopa(productos) {
  let ropaFiltrada = filtrarRopa(productos);
  renderizarRopa(ropaFiltrada);
}

function filtrarRopa(productos) {
  let inputBuscador = document.getElementById("inputBuscadorDeRopa");
  return productos.filter(
    (producto) =>
      producto.tipo.toLowerCase().includes(inputBuscador.value.toLowerCase()) ||
      producto.color.toLowerCase().includes(inputBuscador.value.toLowerCase())
  );
}

function renderizarRopa(productos) {
  let carrito = obtenerCarritoLS();
  let contenedorcards = document.getElementById("productosCards");
  contenedorcards.innerHTML = "";
  productos.forEach((producto) => {
    let { rutaImagen, tipo, color, precio, id } = producto;
    let cards = document.createElement("div");
    cards.className = "estilocards";
    cards.innerHTML = `
    <img class=ropaCards src=/fotos/ropa/${rutaImagen}>
    <div descripcionCard>
       <h3 class=separacionCard >${tipo}</h3>
       <h4 class=separacionCard>Color: ${color}</h4>
       <h5 class=separacionCard>Precio: ${precio}
         <button class=botonDelCarrito style= border:none;>
           <img id=${id} class=carritoCard src=./fotos/carrito.png alt=carrito>
         </button>
       </h5>
    </div>
    `;
    contenedorcards.appendChild(cards);
    let botonAgregarAlCarrito = cards.querySelector(".botonDelCarrito");
    botonAgregarAlCarrito.addEventListener("click", (e) =>
      agregarAlCarrito(e, productos)
    );
  });
}

function agregarAlCarrito(e, productos) {
  let carrito = obtenerCarritoLS();
  let idDelProducto = e.target.id ? Number(e.target.id) : null;

  let productoEncontradoEnElCarrito = carrito.findIndex(
    (producto) => producto.id === idDelProducto
  );
  let productoBuscado = productos.find(
    (producto) => producto.id === idDelProducto
  );

  if (productoEncontradoEnElCarrito !== -1) {
    carrito[productoEncontradoEnElCarrito].unidades++;
    carrito[productoEncontradoEnElCarrito].subTotal =
      carrito[productoEncontradoEnElCarrito].precioPorUnidad *
      carrito[productoEncontradoEnElCarrito].unidades;
  } else {
    carrito.push({
      id: productoBuscado.id,
      color: productoBuscado.color,
      nombre: productoBuscado.tipo,
      precioPorUnidad: productoBuscado.precio,
      unidades: 1,
      subTotal: productoBuscado.precio,
    });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderizarCarrito(carrito);
}

function renderizarCarrito(carrito) {
  let contenedorCarrito = document.getElementById("contendorDelCarrito");
  contenedorCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    let { nombre, color, unidades, subTotal, id } = producto;
    let tarjetaProductoCarrito = document.createElement("div");
    tarjetaProductoCarrito.id = `${id}`;
    tarjetaProductoCarrito.className = "tarjetaDelCarrito";
    tarjetaProductoCarrito.innerHTML = `
    <h3>${nombre}-${color}</h3>
    <p class=pDelCarrito>Cantidad de unidades: ${unidades}</p>
    <p class=pDelCarrito>Precio: ${subTotal}
      <button class="botonDelCarritoEliminar" style="border:none;">
       <img id="eliminar${id}" class="eliminarTarjeta" src="/fotos/papelera.png">
      </button>
    </p>
    `;
    contenedorCarrito.appendChild(tarjetaProductoCarrito);
    let botonEliminar = tarjetaProductoCarrito.querySelector(
      ".botonDelCarritoEliminar"
    );
    botonEliminar.addEventListener("click", () => eliminarDelCarrito(id));
  });
}

function eliminarDelCarrito(idProducto) {
  let carrito = obtenerCarritoLS();
  let indiceProducto = carrito.findIndex(
    (producto) => producto.id === idProducto
  );
  if (indiceProducto !== -1) {
    carrito.splice(indiceProducto, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito(carrito);
  }
}

principal(tiendaDeRopaMasculina);
