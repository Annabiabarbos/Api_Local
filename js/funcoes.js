const ulrViaCep = "https://viacep.com.br/ws";
const ulrCepProfessor = "http://172.16.35.155:3000/myceps";

async function cadastrar(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementByI("email").value.trim();
  const cep = document.getElementById("cep").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const estado = document.getElementById("estado").value.trim();

  dados = {
    nome, 
    email,
    cep,
    endereco,
    numero,
    cidade,
    estado
  }

  const promise = await fetch('http://172.16.35.155:3000/myceps',{
    data:JSON.stringify(ObjCadastro),
    method: "Post",
    headers: {"Content-type": "Appication/json"}
  });

}



/*function retornaForma(nome, email , cep, endereco ,  cidade , estado) {
  if (
    nome == null ||
    email == null ||
    cep== null ||
    endereco == null || 
    cidade == null ||
    estado == null 
  ) {
    return alert("Obrigatorio prencher todos os campos!")
  }
}

async function buscarEndereco(cep) {
  // complemento do endereço da api
  // const resource = `/${cep}/json/`;

  try {
    // const promise = await fetch(ulrViaCep + resource);

    const promise = await fetch(`${ulrCepProfessor}/${cep}`);
    
    //transformo o json retonado em um objeto ou array
    const endereco = await promise.json();
    console.log(endereco);
    
    //preencher o formulário
    preencherCampos({ 
        logradouro: endereco.logradouro,
        localidade: endereco.localidade,
        uf: endereco.uf
     });

    //resetar o span do cep inválido
    document.getElementById("not-found").innerText = "";

  } catch (error) {
    console.log(error);

    document.getElementById("not-found").innerText = "cep inválido";
  }
}

function preencherCampos(endereco) {
    document.getElementById("endereco").value = endereco.logradouro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
}*/
