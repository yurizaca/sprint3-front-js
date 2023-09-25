import {} from "react";

function BeneficioCard({ backgroundUrl, imageUrl, title, description }) {
  return (
    <div className="card bg-white rounded overflow-hidden">
      <div className="img1">
        <img src={backgroundUrl} className="object-cover" />
      </div>
      <div className="img2">
        <img src={imageUrl} className="object-cover" />
      </div>
      <div className="main-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function BeneficioImpacto() {
  return (
    <div className="mb-5">
      <div className="jumbotron">
        <h1 className="display-4 fw-bold">Benefícios e Impactos</h1>
        <p className="lead">Transformando Desafios em Oportunidades</p>
        <hr className="my-4" />
        <h4 className="mb-4">Benefícios</h4>
      </div>
      <div className="profile-area">
        <div className="grid grid-cols-3 gap-4">
          <BeneficioCard
            backgroundUrl="src/images/emoji.jpg"
            imageUrl="src/images/emoji1.jpg"
            title="Otimização do Tráfego"
            description="Redução de congestionamentos e melhoria na mobilidade urbana."
          />
          <BeneficioCard
            backgroundUrl="src/images/emoji2.jpg"
            imageUrl="src/images/fotoSemaforo.jpg"
            title="Segurança Reforçada"
            description="Monitorização em tempo real para reduzir acidentes envolvendo veículos e pedestres.
            "
          />
          <BeneficioCard
            backgroundUrl="src/images/emoji4.jpg"
            imageUrl="src/images/emoji3.jpg"
            title="Trânsito Eficiente"
            description="Intervenções ágeis, como recalibração de semáforos, adaptando-se às demandas do momento."
          />
          <BeneficioCard
            backgroundUrl="src/images/emoji6.jpg"
            imageUrl="src/images/emoji5.jpg"
            title="Sustentabilidade Ambiental"
            description="Redução das emissões de poluentes devido ao fluxo de tráfego mais eficiente."
          />
          <BeneficioCard
            backgroundUrl="src/images/emoji.8.jpg"
            imageUrl="src/images/emoji9.jpg"
            title="Economia Urbana"
            description=" Menos gastos com combustíveis e menor tempo perdido em engarrafamentos, traduzindo-se em benefícios econômicos para a cidade."
          />
        </div>
      </div>
      <hr className="my-4" />
      <h4 className="mb-4">Impactos</h4>
      <div className="grid grid-cols-3 gap-4">
        <BeneficioCard
          backgroundUrl="src/images/emoji10.jpg"
          imageUrl="src/images/emoji11.jpg"
          title="Econômico Positivo"
          description="Economia significativa para metrópoles graças a deslocamentos mais eficientes."
        />
        <BeneficioCard
          backgroundUrl="src/images/emoji13.jpg"
          imageUrl="src/images/emoji12.jpg"
          title="Ambiental Benéfico"
          description=" Diminuição de emissões carbônicas graças a um tráfego otimizado."
        />
        <BeneficioCard
          backgroundUrl="src/images/emoji.14.jpg"
          imageUrl="src/images/emoji19.jpg"
          title="Mudanças Infraestruturais"
          description=" Adaptações necessárias em infraestrutura e sinais de trânsito para incorporar o sistema."
        />
        <BeneficioCard
          backgroundUrl="src/images/emoji15.jpg"
          imageUrl="src/images/emoji16.jpg"
          title="Elevação da Expectativa dos Cidadãos"
          description=" A medida que o sistema é implementado, cidadãos passarão a esperar padrões mais altos de gestão de tráfego."
        />
        <BeneficioCard
          backgroundUrl="src/images/emoji18.jpg"
          imageUrl="src/images/emoji.17.jpg"
          title="Desafios de Privacidade"
          description=" Monitorização em tempo real pode levantar preocupações sobre privacidade e uso dos dados coletados."
        />
      </div>
    </div>
  );
}

export default BeneficioImpacto;
