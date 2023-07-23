let contactList = [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Williams",
    "William Brown",
  ];
  
  // Función para añadir un nuevo contacto a la lista
  function addContact(firstName, lastName) {
    const newContact = `${firstName} ${lastName}`;
    contactList.push(newContact);
  }
  
  // Función para borrar un contacto existente de la lista
  function deleteContact(index) {
    if (index >= 0 && index < contactList.length) {
      contactList.splice(index, 1);
    }
  }
  
  // Función para imprimir en consola los contactos presentes en la lista
  function printContacts() {
    console.log("Contact List:");
    contactList.forEach((contact, index) => {
      console.log(`${index + 1}. ${contact}`);
    });
  }
  
  // Ejemplo de uso
  printContacts();
  
  // Añadir nuevos contactos
  addContact("Alice", "Johnson");
  addContact("Bob", "Smith");
  
  // Eliminar el tercer contacto (índice 2)
  deleteContact(2);
  
  // Imprimir la lista actualizada
  printContacts();
  