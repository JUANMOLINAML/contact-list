const listaContactos = [
    {
      id: 1,
      nombres: "Diomedes",
      apellidos: "Diaz",
      telefono: "123456789",
      ubicacion: [
        { ciudad: "Valledupar", dirección: "Calle 1" },
      ],
      email: "virgendelcamen@tuereslareina.com"
    },
    {
      id: 2,
      nombres: "Francia",
      apellidos: "Márquez",
      telefono: "987654321",
      ubicacion: [
        { ciudad: "Quibdó", dirección: "Carrera 5" },
      ],
      email: "yquevanahacer@elicoptero.com"
    },
    {
      id: 3,
      nombres: "Pablo Emilio",
      apellidos: "Escobar",
      telefono: "555555555",
      ubicacion: [
        { ciudad: "Medellín", dirección: "Calle de los Olivos" },
      ],
      email: "plataoplomo@medellin.com"
    }
  ];
  
  // Función para agregar un contacto a la lista
  const agregarContacto = (id, nombres, apellidos, telefono, ubicacion, email) => {
    const contacto = {
      id,
      nombres,
      apellidos,
      telefono,
      ubicacion,
      email
    };
    listaContactos.push(contacto);
  };
  
  // Función para eliminar un contacto de la lista por nombre
  const eliminarContactoPorNombre = (nombre) => {
    const indice = listaContactos.findIndex((contacto) => contacto.nombres === nombre);
    if (indice !== -1) {
      listaContactos.splice(indice, 1);
    }
  };
  
  // Función para actualizar un contacto en la lista por su ID
const actualizarContacto = (id, nuevosDatos) => {
    const contacto = listaContactos.find((contacto) => contacto.id === id);
    if (contacto) {
      Object.assign(contacto, nuevosDatos);
    }
  };
  
  
  // Función para imprimir la lista de contactos en la consola
  const imprimirContactos = () => {
    console.log("Lista de contactos:");
    listaContactos.forEach((contacto, indice) => {
      console.log(`Contacto ${indice + 1}:`);
      console.log(`ID: ${contacto.id}`);
      console.log(`Nombres: ${contacto.nombres}`);
      console.log(`Apellidos: ${contacto.apellidos}`);
      console.log(`Teléfono: ${contacto.telefono}`);
      console.log("Ubicacion:");
      contacto.ubicacion.forEach((ubicacion) => {
        console.log(`Ciudad: ${ubicacion.ciudad}`);
        console.log(`Dirección: ${ubicacion.dirección}`);
      });
      console.log(`Email: ${contacto.email}`);
      console.log("-------------------");
    });
  };
  
  // Ejemplo de uso
  agregarContacto(4, "Diego", "Maradona", "111111111", [{ ciudad: "Buenos Aires", dirección: "Avenida Principal" }], "porlalinea@lamanodeDios.com");
  imprimirContactos();
  eliminarContactoPorNombre("Pablo Emilio");
  actualizarContacto(1, { telefono: "987654321", email: "diomedes@diaz.com" });
imprimirContactos();
  