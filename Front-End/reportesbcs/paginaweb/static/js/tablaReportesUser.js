var data = []

fetch("http://localhost:3001/api/reportes/search", {
    method:"GET", //body:admin
}).then(response=>{
    console.log(response)
    if(response.ok)
    return response.json()
throw new Error("Error")
}).then(Data =>{
    data = Data
    mostrarReportes()
}).catch(Error=>{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
})
 
function mostrarReportes(){
    for(var item of data){
        document.querySelector("#tablaReportesUser").innerHTML+=`
        <tr>
        <th scope="row">${item.id}</th>
        <td>${item.ubicacion}</td>
        <td>${item.tipo}</td>
        <td>${item.comentarios}</td>
      </tr>`
    }
}
function filtrarReportes(filtro){
    
    document.querySelector("#tablaReportesUser").innerHTML=``
    for(var item of data){
        console.log(item.tipo)
        if(item.tipo==filtro){
            document.querySelector("#tablaReportesUser").innerHTML+=`
            <tr>
            <button class="button" id="seleccionReporte">
            <th scope="row">${item.id}</th>
            </button>
            <td>${item.ubicacion}</td>
            <td>${item.tipo}</td>
            <td>${item.comentarios  }</td>
          </tr>`
        }
        
    }
}

document.querySelector("#filtroCategoria").addEventListener("change",(e)=>{
    console.log(e.target.value)
    filtrarReportes(e.target.value)
})  