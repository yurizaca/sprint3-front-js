import {} from "react";
import ChallengePage from "../pages/Challenge";

function Error() {
  return (
    <div className="p-5">
      <h1>404: Página não encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <ChallengePage />
    </div>
  );
}

export default Error;
