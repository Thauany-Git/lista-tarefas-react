import { useState } from "react";

function FormTarefa() {
  const [tarefa, setTarefa] = useState({
    titulo: "",
    descricao: "",
    vencimento: "",
    status: "Pendente",
  });

  const [listaTarefas, setListaTarefas] = useState([]);
  const [listaStatus, setListaStatus] = useState(["Pendente", "Concluída"]);

  function handleFields(field) {
    setTarefa({
      ...tarefa,
      [field.target.name]: field.target.value,
    });
  }

  function addTarefa() {
    if (tarefa.titulo.trim() === "" || tarefa.descricao.trim() === "") {
      alert("Preencha o título e a descrição antes de salvar.");
      return;
    }
    setListaTarefas([...listaTarefas, tarefa]);

    setTarefa({
      titulo: "",
      descricao: "",
      vencimento: "",
      status: "Pendente",
    });
  }
  return (
    <>
      <h1>Lista de Tarefas</h1>

      <p>
        <label>Título: </label>
        <input
          type="text"
          name="titulo"
          required
          onChange={handleFields}
          value={tarefa.titulo}
        />
      </p>

      <p>
        <label>Descrição </label>
        <textarea
          name="descricao"
          required
          onChange={handleFields}
          value={tarefa.descricao}
        >
          {" "}
        </textarea>
      </p>

      <p>
        <label>Vencimento: </label>
        <input
          type="text"
          name="vencimento"
          required
          placeholder="Ex: 10-09-2025"
          onChange={handleFields}
          value={tarefa.vencimento}
        />
      </p>

      <p>
        <label>Status: </label>
        <select
          name="status"
          value={tarefa.status}
          required
          onChange={handleFields}
        >
          {listaStatus.map((status, key) => (
            <option key={key} value={status}>
              {status}
            </option>
          ))}
        </select>
      </p>

      <p>
        <button onClick={addTarefa}>Salvar</button>
      </p>

      <table className="tabela">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Vencimento</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {listaTarefas.map((tarefa, key) => (
            <tr
              key={key}
              className={
                tarefa.status === "Concluída"
                  ? "status-concluida"
                  : "status-pendente"
              }
            >
              <td>{tarefa.titulo}</td>
              <td>{tarefa.descricao}</td>
              <td>{tarefa.vencimento}</td>
              <td>{tarefa.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FormTarefa;
