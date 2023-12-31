import {} from "react";

function SobreNos() {
  return (
    <div className="mb-5">
      <div>
        <div className="container py-5 ">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">Sobre nós</h1>
              <p className="lead text-muted mb-0">
                Somos um grupo de amigos da faculdade, unidos pela paixão pela
                tecnologia e pelo desejo de criar projetos inovadores.
              </p>
              <p className="lead text-muted">
                Juntos, exploramos, aprendemos e crescemos, sempre buscando
                novos desafios.
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Nossa Jornada</h2>
              <p className="font-italic text-muted mb-4">
                Desde os primeiros dias na faculdade, percebemos que tínhamos
                uma conexão especial. Essa conexão nos levou a trabalhar em
                diversos projetos juntos, enfrentando desafios e celebrando
                conquistas.
              </p>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Prontos para o Desafio</h2>
              <p className="font-italic text-muted mb-4">
                Estamos sempre prontos para aprender algo novo e colocar nossas
                habilidades à prova.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="mb-4">
          <h2 className="display-4 font-weight-light">Conheça nossa equipe</h2>
          <p className="font-italic text-muted">
            Cada um de nós traz uma habilidade única para o grupo, tornando
            nossa equipe diversa e talentosa.
          </p>
        </div>
        <div className="grid grid-cols-3 py-5 gap-4">
          <TeamPerson imageUrl="src/images/foto1.jpg" name="Yuri" />
          <TeamPerson imageUrl="src/images/fotoleandro.jpg" name="Leandro" />
          <TeamPerson imageUrl="src/images/foto3.jpg" name="Lucca" />
          <TeamPerson imageUrl="src/images/foto2.jpg" name="Nicolas" />
          <TeamPerson imageUrl="src/images/fotoheitor.jpg" name="Heitor" />
        </div>
      </div>

      <footer className="pb-5">
        <div className="container text-center">
          <p className="font-italic text-muted mb-0">
            &copy; Copyrights Company.com All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function TeamPerson({ imageUrl, name, role }) {
  return (
    <div className="text-center">
      <div className="bg-white rounded shadow-sm py-5 px-4">
        <img
          src={imageUrl}
          width="100"
          height="100"
          className="object-cover img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
        />
        <h5 className="mb-0">{name}</h5>
        <span className="small text-uppercase text-muted">{role}</span>
      </div>
    </div>
  );
}

export default SobreNos;
