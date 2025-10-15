const texto = document.getElementById("texto");
const busqueda = document.getElementById("busqueda");
const btnBuscar = document.getElementById("btnBuscar");
const btnLimpiar = document.getElementById("btnLimpiar");
const resultado = document.getElementById("resultado");

btnBuscar.addEventListener("click", () => {
  const textoVal = texto.value.trim();
  const buscar = busqueda.value.trim();

  if(buscar === "") {
    // No escribiste nada para buscar
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No pusiste nada para buscar.",
      confirmButtonColor: "#d33"
    });
    resultado.innerHTML = "";
    return;
  }

  const regex = new RegExp(`(${buscar})`, "gi");
  const coincidencias = textoVal.match(regex);

  if(!coincidencias) {
    // No se encontraron coincidencias
    Swal.fire({
      icon: "error",
      title: "Sin coincidencias",
      text: `No se encontraron coincidencias de "${buscar}" en el texto.`,
      confirmButtonColor: "#d33"
    });
    resultado.innerHTML = "";
    return;
  }

  // Se encontraron coincidencias
  Swal.fire({
    icon: "success",
    title: "Búsqueda exitosa",
    text: `Se encontraron ${coincidencias.length} coincidencias de "${buscar}".`,
    confirmButtonColor: "#00b4d8"
  });

  // Mostrar texto con coincidencias resaltadas
  const textoMarcado = textoVal.replace(regex, '<span class="resaltado">$1</span>');
  resultado.innerHTML = textoMarcado;
});

// Botón limpiar
btnLimpiar.addEventListener("click", () => {
  texto.value = "";
  busqueda.value = "";
  resultado.innerHTML = "";
});
