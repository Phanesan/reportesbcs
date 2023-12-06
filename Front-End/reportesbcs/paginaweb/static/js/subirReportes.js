document.getElementById("reporteDeUsuario").addEventListener("submit",async(e)=>{
    e.preventDefault()
    console.log(e)
    const res = await fetch("http://localhost:3001/api/reportes/add", {
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        correo: "correo@prueba.com",
        ubicacion: e.target.callePrincipalInput1.value,
        tipo:e.target.categoriaInput1.value,
        comentarios: e.target.comentInput1.value
      })
    })
  })
