fetch("http://127.0.0.1:3001/api/users", {
    method:"GET"
}).then(response=>{
    if(response.ok)
    return response.json()
throw new Error("Error: Ya es pedo del backend")
}).then(Data =>{
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
    data=[{ID:"1", callePrincipal:"San Nicolas", categoria:"Bache", estado:"Terminado"}, {ID:"1", callePrincipal:"San Nicolas", categoria:"Bache", estado:"Terminado"}, {ID:"1", callePrincipal:"San Nicolas", categoria:"Bache", estado:"Terminado"}]
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