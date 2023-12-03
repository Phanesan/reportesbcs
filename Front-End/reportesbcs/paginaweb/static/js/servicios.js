document.querySelector("#loginUser").addEventListener("submit", (e)=>{
    e.preventDefault()
    fetch("http://127.0.0.1:3001/api/users", {
        method:"GET"
    }).then(response=>{
        if(response.ok)
        return response.json()
    throw new Error("Error: Ya es pedo del backend")
    }).then(Data =>{
        Swal.fire("Hola");
        console.log(Data)
    }).catch(Error=>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Preguntale al de Backend!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    })
})