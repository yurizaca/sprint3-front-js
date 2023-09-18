import { useState, useEffect } from "react";

export default function ChallengePage() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

  function onSubmit(event) {
    event.preventDefault();
    const userdata = JSON.stringify({ name, lastName, age });
    localStorage.setItem("userdata", userdata);
    alert("🫦 Salvo no LocalStorage com sucesso!");
  }

  useEffect(() => {
    const userdata = localStorage.getItem("userdata");

    if (!!userdata) {
      let { name, lastName, age } = JSON.parse(userdata);

      console.log(name, lastName, age);

      setName(name);
      setLastName(lastName);
      setAge(age);
    }
  }, [localStorage]);

  return (
    <div className="mb-5">
      <form onSubmit={onSubmit} className="d-flex flex-column gap-4 border p-4">
        <div className="grid grid-cols-3 gap-2">
          <label className="d-flex flex-column">
            <span className="fw-bold">Nome</span>
            <input
              type="text"
              placeholder="Wellington"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label className="d-flex flex-column">
            <span className="fw-bold">Sobrenome</span>
            <input
              type="text"
              placeholder="Eduardo"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </label>
          <label className="d-flex flex-column">
            <span className="fw-bold">Idade</span>
            <input
              type="number"
              placeholder="19"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </label>
        </div>
        <button className="btn btn-primary fw-bold">
          Salvar no LocalStorage
        </button>
      </form>
      <div className="mt-4">
        <h2>A raiz quadrada da sua idade é: {Math.sqrt(age)}</h2>
        <h2>Sua idade elevada a 2 é: {Math.pow(age, 2)}</h2>
        <h2>Sua idade elevada a 3 é: {Math.pow(age, 3)}</h2>
      </div>
    </div>
  );
}
