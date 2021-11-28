import React from "react";


const Footer = () => {
    return (
      <div classNameName="container-fluid bg-light">
<footer className="text-center text-lg-start bg-light text-muted">
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
   
    <div className="me-5 d-none d-lg-block">
      <span>Encuentranos en nuestras redes Sociales:</span>
    </div>
  
    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>

  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>DinoTienda
          </h6>
          <p>
            Somos Dino Tienda , tenemos todo lo que necesitas para tu DinoVida 
            </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
   
          <h6 className="text-uppercase fw-bold mb-4">
            Productos
          </h6>
          <p>
            <a href="#!" className="text-reset">La Era del Hielo</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Dinosaurios</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Dino Documentos</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Dino Recuerdos</a>
          </p>
        </div>
    
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
            links de Interes
          </h6>
          <p>
            <a href="#!" className="text-reset">Precios</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Configuración</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Ordenes</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Ayuda</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Contacto
          </h6>
          <p><i className="fas fa-home me-3"></i> Los leones 456, Santiago, Chile</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@dinotienda.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 56 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 56 234 567 89</p>
        </div>
      </div>
    </div>
  </section>


  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">dinotienda.com</a>
  </div>
</footer>
      </div>
    );
  };
  
  export default Footer;
  
