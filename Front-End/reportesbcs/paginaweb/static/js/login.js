const mensajeError = document.getElementsByClassName("error")[0]

document.getElementById("loginUser").addEventListener("submit",async(e)=>{
    e.preventDefault()
    const user = e.target.exampleFormControlInput1.value;
    const password = e.target.inputPassword5.value;
    console.log(user,password)
    const res = await fetch("http://127.0.0.1:3001/api/authorization/login", {
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        "correo":  user,
        "password": password
      })
    })
    if(!res.ok) return mensajeError.classList.toggle("escondido", false)
    window.location.href = "/menuUsers/"
  })