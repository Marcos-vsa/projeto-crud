const veiculosDisponiveis = [];
const veiculosAlugados = [];

document.getElementById("botao-cadastrar").addEventListener("click", () => {
  const marca = document.getElementById("veiculo-marca").value;
  const modelo = document.getElementById("veiculo-modelo").value;
  const cor = document.getElementById("veiculo-cor").value;
  const ano = document.getElementById("veiculo-ano").value;

    if(marca && modelo && cor && ano) {
     const veiculo = { marca, modelo, cor, ano };
    veiculosDisponiveis.push(veiculo);

    
    document.getElementById("veiculo-marca").value = "";
    document.getElementById("veiculo-modelo").value = "";
    document.getElementById("veiculo-cor").value = "";
    document.getElementById("veiculo-ano").value = "";

    atualizarListas();
  }
});

function alugarVeiculo(index) {
  const veiculo = veiculosDisponiveis.splice(index, 1)[0];
  veiculosAlugados.push(veiculo);
  atualizarListas();
}

function devolverVeiculo(index) {
  const veiculo = veiculosAlugados.splice(index, 1)[0];
  veiculosDisponiveis.push(veiculo);
  atualizarListas();
}

function excluirVeiculo(lista, index) {
  lista.splice(index, 1);
  atualizarListas();
}

function atualizarListas() {
  const disponiveisList = document.getElementById("disponiveis");
  const alugadosList = document.getElementById("alugados");

  
  disponiveisList.innerHTML = "";
  alugadosList.innerHTML = "";

  
  veiculosDisponiveis.forEach((veiculo, index) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = `${veiculo.marca} ${veiculo.modelo} - ${veiculo.ano} (${veiculo.cor})`;
    const alugarButton = document.createElement("button");
    alugarButton.textContent = "Alugar";
    alugarButton.className = "btn btn-primary btn-sm mx-2";
    alugarButton.addEventListener("click", () => alugarVeiculo(index));
    listItem.appendChild(alugarButton);
    const excluirButton = document.createElement("button");
    excluirButton.textContent = "Excluir";
    excluirButton.className = "btn btn-danger btn-sm";
    excluirButton.addEventListener("click", () =>
      excluirVeiculo(veiculosDisponiveis, index)
    );
    listItem.appendChild(excluirButton);
    disponiveisList.appendChild(listItem);
  });

  
  veiculosAlugados.forEach((veiculo, index) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = `${veiculo.marca} ${veiculo.modelo} - ${veiculo.ano} (${veiculo.cor})`;
    const devolverButton = document.createElement("button");
    devolverButton.textContent = "Devolver";
    devolverButton.className = "btn btn-success btn-sm mx-2";
    devolverButton.addEventListener("click", () => devolverVeiculo(index));
    listItem.appendChild(devolverButton);
    alugadosList.appendChild(listItem);
  });
}

atualizarListas();
