function pedirInfo() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((productos) => principal(productos));
}

pedirInfo();

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
  let productosFiltrados = productos.filter(
    (producto) => producto.color === value
  );
  renderizarRopa(productosFiltrados);
}

function filtrarYRenderizarPorTipo(e, productos) {
  let value = e.target.value;
  let productosFiltrados = productos.filter(
    (producto) => producto.tipo === value
  );
  renderizarRopa(productosFiltrados);
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
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Se realizó la compra con éxito",
    showConfirmButton: false,
    timer: 1000,
  });
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
    <img class="ropaCards" src="/fotos/ropa/${rutaImagen}">
    <div class="descripcionCard">
       <h3 class="separacionCard">${tipo}</h3>
       <h4 class="separacionCard">Color: ${color}</h4>
       <h5 class="separacionCard">Precio: ${precio}
         <button class="botonDelCarrito" style="border:none;">
           <img id="${id}" class="carritoCard" src="./fotos/carrito.png" alt="carrito">
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

  tostada("Se agregó el producto al carrito", "top", "left", 2000);

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
    <h3>${nombre} - ${color}</h3>
    <p class="pDelCarrito">Cantidad de unidades: ${unidades}</p>
    <p class="pDelCarrito">Precio: ${subTotal}
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

  tostada("Se eliminó el producto del carrito", "top", "left", 2000);

  if (indiceProducto !== -1) {
    carrito.splice(indiceProducto, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito(carrito);
  }
}

function tostada(text, gravity, position, duration) {
  Toastify({
    text,
    gravity,
    position,
    duration,
  }).showToast();
}
