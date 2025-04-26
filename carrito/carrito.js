function cargarCarrito() {
    const contenedor = document.getElementById('carro');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    contenedor.innerHTML = '';

    let total = 0;

    carrito.forEach((producto, index) => {
      //funcion que tranforma el precio en valor numerico
      const precioNumerico = parseFloat(producto.precio.replace(/[^0-9.]/g, ''));
      total += precioNumerico;

      const div = document.createElement('div');
      div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 150px; border-radius: 15px;"><br>
        <strong>${producto.nombre}</strong><br>
        <span>${producto.precio}</span><br>
        <button onclick="eliminarProducto(${index})" style="margin-top: 10px;">Eliminar</button>
        <hr>
      `;
      contenedor.appendChild(div);
    });

    //funcion para el valor a pagar
    const totalDiv = document.createElement('div');
    totalDiv.style.marginTop = '30px';
    totalDiv.style.fontSize = '20px';
    totalDiv.style.fontWeight = 'bold';
    totalDiv.innerHTML = `
      Total a pagar: $${total.toLocaleString('es-CO')}<br><br>
      <button onclick="pagar()>Pagar</button>`;
    contenedor.appendChild(totalDiv);
  }

  function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
  }

// Función para pagar
  function pagar() {
    location.href = '../producto_comprado/compra.html';
}
window.onload = cargarCarrito;
