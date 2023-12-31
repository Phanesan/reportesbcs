function cargarNavbar(){
    document.querySelector("#divNavbar").innerHTML = `
    <nav
    class="navbar navbar-expand-lg b* fw-bold"
    style="background-color: #fffb96"
  >
    <div class="container-fluid">
      <img
        src="../images/logo.png"
        alt="Logo"
        width="70"
        height="74"
        class="d-inline-block align-text-top"
      />
      <a class="navbar-brand" href="#">CalleAlDía</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/menuUsers">Inicio</a>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarlogout">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Desconectarse</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `;
}