const listaContactos = [
    {
      nombre: "Diomedes Diaz",
      telefono: "123456789",
      email: "virgendelcarmen@tuereslareina.com"
    },
    {
      nombre: "Francia Márquez",
      telefono: "987654321",
      email: "yquevanahacer@elicoptero.com"
    },
    {
      nombre: "Pablo Emilio Escobar",
      telefono: "555555555",
      email: "plataoplomo@medellin.com"
    }
  ];
  
  // Función para agregar un contacto a la lista
  const agregarContacto = (nombre, telefono, email) => {
    const contacto = {
      nombre,
      telefono,
      email
    };
    listaContactos.push(contacto);
  };
  
  /* // Función para eliminar un contacto de la lista por índice
  const eliminarContacto = (indice) => {
    if (indice >= 0 && indice < listaContactos.length) {
      listaContactos.splice(indice, 1);
    }
  }; */
  // Función para eliminar un contacto de la lista por nombre
  
const eliminarContactoPorNombre = (nombre) => {
    const indice = listaContactos.findIndex((contacto) => contacto.nombre === nombre);
    if (indice !== -1) {
      listaContactos.splice(indice, 1);
    }
  };
  
  // Función para imprimir la lista de contactos en la consola
  const imprimirContactos = () => {
    console.log("Lista de contactos:");
    listaContactos.forEach((contacto, indice) => {
      console.log(`Contacto ${indice + 1}:`);
      console.log(`Nombre: ${contacto.nombre}`);
      console.log(`Teléfono: ${contacto.telefono}`);
      console.log(`Email: ${contacto.email}`);
      console.log("-------------------");
    });
  };
  
  // Ejemplo de uso
  agregarContacto("Diego Maradona", "111111111", "porlalinea@lamanodeDios.com");
  imprimirContactos();
  /* eliminarContacto(2); */
  eliminarContactoPorNombre("Pablo Emilio Escobar");
  imprimirContactos();
  