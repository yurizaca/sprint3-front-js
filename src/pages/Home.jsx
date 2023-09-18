import {} from "react";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
function Home() {
  return (
    <>
      <Jumbotron />
      <Carousel />
      <div className="d-flex gap-3 mt-4 mb-5">
        <Card
          title={"Sobre o Problema"}
          text={
            "Metrópoles enfrentam desafios de mobilidade devido a congestionamentos e ineficiências viárias, afetando a vida dos cidadãos e o meio ambiente."
          }
          link="Sobre o Problema"
          to="sobreproblema"
        />
        <Card
          title={"Benefícios e Impacto"}
          text={
            "Nossas estratégias promovem um trânsito mais eficiente, reduzem acidentes e melhoram a qualidade do ar nas cidades."
          }
          link="Benefícios"
          to="beneficioimpacto"
        />
        <Card
          title={"A Solução"}
          text={
            "Utilizamos tecnologia e planejamento estratégico para melhorar o fluxo de trânsito e garantir a segurança dos cidadãos.  "
          }
          link="Solução"
          to="solucao"
        />
      </div>
    </>
  );
}

export default Home;
