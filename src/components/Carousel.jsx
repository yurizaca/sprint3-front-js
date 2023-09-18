import {} from "react";
import imagem1 from "../images/pexels-pixabay-302718.jpg";
import imagem2 from "../images/acidente-vila-arens.jpg";
import imagem3 from "../images/poluicao-carro-quantidade.jpg";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide custom-carousel rounded-4"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagem1} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Congestionamento Intenso em Metrópole</h5>
              <p>
                As metrópoles em crescimento enfrentam congestionamentos
                diários, afetando a qualidade de vida e a economia local.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imagem2} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block ">
              <h5>Segurança Viária em Risco</h5>
              <p className="">
                Acidentes frequentes evidenciam a necessidade urgente de
                sistemas mais integrados e seguros para proteger motoristas e
                pedestres.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imagem3} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Impacto Ambiental do Tráfego</h5>
              <p>
                O trânsito intenso não só afeta nossa economia, mas também o
                meio ambiente, intensificando a emissão de poluentes
                atmosféricos.
              </p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
