document.querySelector("#activarAgreagarImagen").addEventListener("click", () => {
    document.querySelector("#agregarImagen").click();
  })
  
  document.querySelector("#agregarImagen").addEventListener("change", (e) => {
    console.log(e.target.files)
  
    var imagen = e.target.files[0]
    var archivosSoportados = ['image/jpeg', 'image/png', 'image/jpg']
  
    var seEncontraronElementoNoValidos = false
  
  console.log(imagen)

    if (archivosSoportados.indexOf(imagen.type) != -1) {
      //VISTA PREVIA DE IMAGEN
      var imgCodificada = URL.createObjectURL(imagen)
      console.log(imgCodificada)
      document.querySelector("#imgU").src=imgCodificada
    } else {
      seEncontraronElementoNoValidos = true
    }
  
    if (seEncontraronElementoNoValidos) {
      Swal.fire(
        'El archivo seleccionado no es valido!',
        'Seleccione una imagen con formato jpeg o png',
        'error'
      )
    }
  })