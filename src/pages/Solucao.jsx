import {} from "react";

function Solução() {
  return (
    <div className="mb-5">
      <div>
        <h1 className="display-4 fw-bold">Benefícios e Impactos</h1>
        <p className="lead">Transformando Desafios em Oportunidades</p>
        <hr className="my-4" />
        <div className="grid" style={{ gap: "8rem" }}>
          <SolutionFrame
            imageUrl="src/images/sensor.jpg"
            title="Sensores de alta qualidade"
            description="Sensores de alta qualidade são componentes avançados projetados para capturar, medir e responder a informações com extrema precisão e confiabilidade. Amplamente utilizados em setores críticos como medicina, aeroespacial e automação, esses sensores garantem dados precisos, tempos de resposta rápidos e durabilidade incomparável. Sua aplicação tem sido fundamental na inovação e melhoria de sistemas em todo o mundo."
          />
          <SolutionFrame
            imageUrl="src/images/monitoramento.jpg"
            title="Acompanhe em tempo real"
            description="Mantenha-se atualizado sobre as condições de trânsito com nosso sistema de monitoramento em tempo real. Seja para evitar congestionamentos ou para planejar a rota mais eficiente, nossa plataforma fornece informações precisas e atualizadas para ajudá-lo a navegar com confiança e eficiência. Transforme sua experiência de viagem com insights instantâneos sobre o tráfego!"
            reverse
          />
          <SolutionFrame
            imageUrl="src/images/seguranca.jpg"
            title="Fluidez e segurança "
            description="Navegue com confiança através de nossas soluções que enfatizam tanto a fluidez quanto a segurança. Com tecnologias avançadas e análises precisas, garantimos um trânsito mais suave e menos propenso a interrupções, ao mesmo tempo em que priorizamos a segurança de todos os usuários da via. Escolha a combinação perfeita de eficiência e proteção para suas viagens!"
          />
        </div>
      </div>
    </div>
  );
}

function SolutionFrame({ imageUrl, title, description, reverse }) {
  return (
    <div className={`d-flex gap-4 ${reverse && "flex-row-reverse"}`}>
      <img src={imageUrl} className="w-50 rounded-3 object-cover" />
      <div className="w-50">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Solução;
