const agregar = document.querySelectorAll('a[href="#añadir"]');

  agregar.forEach((boton, home) => {
    boton.addEventListener('click', function (e) {
      e.preventDefault();

      const seccion = this.closest('section');
      const nombre = seccion.querySelector('p1').textContent;
      const precio = seccion.querySelector('p').textContent;
      const imagen = seccion.querySelector('img').src;

      const producto = { nombre, precio, imagen };

      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      carrito.push(producto);
      localStorage.setItem('carrito', JSON.stringify(carrito));

      alert("Producto añadido al carrito");
    });
});

const buy = document.querySelectorAll('id="#buy"');

  buy.forEach((boton, home) => {
    boton.addEventListener('click', function (e) {
      e.preventDefault();

      const seccion = this.closest('section');
      const nombre = seccion.querySelector('p1').textContent;
      const precio = seccion.querySelector('p').textContent;
      const imagen = seccion.querySelector('img').src;

      const producto = { nombre, precio, imagen };

      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      carrito.push(producto);
      localStorage.setItem('carrito', JSON.stringify(carrito));

      alert("Producto añadido al carrito");
    });
});