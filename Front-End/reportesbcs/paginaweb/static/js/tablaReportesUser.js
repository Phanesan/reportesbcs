var data = []

fetch("http://127.0.0.1:3001/api/users", {
    method:"GET", //body:admin
}).then(response=>{
    if(response.ok)
    return response.json()
throw new Error("Error: Ya es pedo del backend")
}).then(Data =>{
    // data = Data
    data=[{ID:"1", callePrincipal:"San Nicolas", categoria:"Baches", estado:"Terminado"}, {ID:"1", callePrincipal:"San Nicolas", categoria:"Baches", estado:"Terminado"}, {ID:"1", callePrincipal:"San Nicolas", categoria:"Semaforo Defectuoso", estado:"Terminado"}]
    mostrarReportes()
}).catch(Error=>{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Preguntale al de Backend!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
})

function mostrarReportes(){
    // añadir data a la funcion y borra la wea de abajo :D
    for(var item of data){
        document.querySelector("#tablaReportesUser").innerHTML+=`
        <tr>
        <th scope="row">${item.ID}</th>
        <td>${item.callePrincipal}</td>
        <td>${item.categoria}</td>
        <td>${item.estado}</td>
      </tr>`
    }
}
function filtrarReportes(filtro){
    // añadir data a la funcion y borra la wea de abajo :D
    
    document.querySelector("#tablaReportesUser").innerHTML=``
    for(var item of data){
        if(item.categoria==filtro){
            document.querySelector("#tablaReportesUser").innerHTML+=`
            <tr>
            <th scope="row">${item.ID}</th>
            <td>${item.callePrincipal}</td>
            <td>${item.categoria}</td>
            <td>${item.estado}</td>
          </tr>`
        }
        
    }
}

document.querySelector("#filtroCategoria").addEventListener("change",(e)=>{
    console.log(e.target.value)
    filtrarReportes(e.target.value)
})