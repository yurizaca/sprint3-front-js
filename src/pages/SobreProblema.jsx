import React from "react";
import imagem5 from "../images/mobilidade-em-sao-paulo.jpg";
import Card from "../components/Card";

function SobreProblema() {
  const [isExpanded, setExpanded] = React.useState(false);

  return (
    <>
      <h1 className="display-4 fw-bold">Sobre o Problema</h1>
      <hr className="my-4" />
      <div className="img-problema">
        <img src={imagem5} alt="Descrição da imagem" />
      </div>
      <hr className="my-4" />
      <div className="container">
        <div className="paragrafo">
          <p>
            A mobilidade urbana é uma questão vital para as cidades modernas.
            Conforme as cidades crescem, os desafios associados ao trânsito
            tornam-se mais complexos.
            <span className={isExpanded ? "expanded-text" : "collapsed-text"}>
              Metrópoles globais estão enfrentando desafios crescentes de
              mobilidade... ... metrópoles mais sustentáveis e habitáveis.
            </span>
          </p>
          <button
            className="btn btn-expand"
            onClick={() => setExpanded(!isExpanded)}
          >
            {isExpanded ? "Ler menos" : "Ler mais"}
          </button>
        </div>
      </div>
      <div className="cards">
        <div className="d-flex gap-3 mt-4 ">
          <Card
            title={"DESAFIOS ATUAIS DE MOBILIDADE "}
            text={
              "Congestionamentos diários, acidentes frequentes e ineficiências no sistema de transporte estão entre os maiores desafios que enfrentamos hoje. Esses obstáculos impactam diretamente a vida dos cidadãos e a economia da cidade."
            }
          />
          <Card
            title={"CONSEQUÊNCIAS DO PROBLEMA"}
            text={
              "Os desafios da mobilidade não afetam apenas o tempo de viagem. Eles influenciam diretamente a qualidade de vida das pessoas, causam impactos econômicos significativos e contribuem para problemas ambientais."
            }
          />
        </div>
      </div>
      <div className="section-highlight">
        <i className="icon-food">🚗💨</i>
        <p>
          Em um cenário de urbanização e desafios de mobilidade, soluções como a
          nossa são mais que essenciais: são vitais. Ao municiar gestores com
          ferramentas e dados robustos, pavimentamos o caminho para cidades
          inteligentes, que primam pela eficiência e sustentabilidade. Assim,
          alinhamo-nos não apenas às aspirações da Agenda 21, mas também à visão
          de um futuro mais próspero e sustentável para todos.
        </p>
      </div>
    </>
  );
}

export default SobreProblema;
