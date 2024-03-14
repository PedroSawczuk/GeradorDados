const nomes_M = [
    "José", "João", "Antônio", "Francisco", "Carlos", "Paulo", "Pedro", "Lucas",
    "Luiz", "Marcos", "Raimundo", "Miguel", "Fernando", "Gabriel", "Rafael",
    "Ricardo", "Diego", "Cristiano", "Eduardo", "Leonardo", "Vinícius", "Gustavo",
    "André", "Rodrigo", "Matheus", "Felipe", "Bruno", "Marcelo", "Anderson", "Jorge",
    "Wagner", "Davi", "Júlio", "Sérgio", "Adriano", "Roberto", "Nelson", "Hélio",
    "Renato", "Amarildo"
  ];
  
  const nomes_F = [
    "Maria", "Ana", "Francisca", "Adriana", "Juliana", "Aline", "Fernanda", "Carla",
    "Lúcia", "Patrícia", "Isabela", "Camila", "Mariana", "Priscila", "Tatiane",
    "Beatriz", "Amanda", "Luana", "Bianca", "Rafaela", "Daniela", "Letícia",
    "Caroline", "Natália", "Larissa", "Mônica", "Vanessa", "Cristiane", "Cintia",
    "Débora", "Sandra", "Jessica", "Fátima", "Luiza", "Luciana", "Talita", "Vitória",
    "Andréia", "Renata", "Helena", "Giovana"
  ];
  
  const sobrenomes = [
    "Silva", "Santos", "Oliveira", "Souza", "Pereira", "Costa", "Carvalho", "Almeida",
    "Ferreira", "Rodrigues", "Martins", "Rocha", "Alves", "Barbosa", "Gomes", "Lima",
    "Dias", "Correia", "Freitas", "Batista", "Mendes", "Nunes", "Gonçalves", "Araújo",
    "Cardoso", "Monteiro", "Ribeiro", "Fernandes", "Cavalcanti", "Melo", "Vieira",
    "Santana", "Azevedo", "Bezerra", "Teixeira", "Dantas", "Campos", "Domingues", "Viana",
    "Moura", "Leal", "Castro", "Prado", "Borges", "Nascimento", "Moraes", "Lopes",
    "Ramos", "Correia"
  ];
  
  const nome_endereço = [
    "Praia do Leblon", "Augusta", "Paulista", "Oscar Freire", "25 de Março", "Bela Cintra",
    "das Flores", "Barão de Itapetininga", "dos Andradas", "do Lavradio", "do Ouvidor",
    "dos Pinheiros", "Brigadeiro Faria Lima", "General Osório", "Santa Catarina",
    "da Consolação", "Atlântica", "João Cachoeira", "Pamplona", "Voluntários da Pátria",
    "Fradique Coutinho", "Teodoro Sampaio", "Harmonia", "João Moura", "Haddock Lobo",
    "Padre João Manuel", "Almirante Pereira Guimarães", "Doutor Mário Ferraz", "Estados Unidos",
    "Doutor Virgílio de Carvalho Pinto", "Canuto do Val", "Artur de Azevedo", "da Mooca",
    "das Palmeiras", "Marquês de Itu", "Mourato Coelho", "Padre Carvalho", "Peixoto Gomide",
    "dos Italianos", "Sergipe", "Guaicuí", "Fidalga", "Luís Murat", "Wisard", "Doutor Virgílio de Carvalho Pinto",
    "Artur de Azevedo", "Doutor Mário Ferraz", "Artur de Azevedo", "Canuto do Val", "Itapicuru",
    "Padre João Manuel", "Aspicuelta", "Tucuna", "Doutor Arnaldo", "Costa Carvalho", "Estados Unidos",
    "Groenlândia", "Professor Atílio Innocenti", "Doutor Sodré", "Padre Carvalho", "Lisboa", "Harmonia",
    "Teodoro Sampaio", "Pedroso de Morais", "Wisard", "Ministro Rocha Azevedo", "Fradique Coutinho",
    "dos Pinheiros", "Joaquim Antunes", "Artur de Azevedo", "Bela Cintra", "Augusta", "Oscar Freire",
    "da Consolação", "Barão de Itapetininga", "25 de Março", "dos Andradas", "da Carioca", "do Lavradio",
    "do Ouvidor", "das Flores", "Líbero Badaró", "Senador Dantas", "da Quitanda", "Primeiro de Março",
    "Treze de Maio", "Uruguaiana", "dos Andradas", "Sacadura Cabral", "do Lavradio", "Mem de Sá", "do Riachuelo",
    "do Senado", "Visconde de Inhaúma", "Primeiro de Março", "Buenos Aires", "do Lavradio", "dos Andradas",
    "da Carioca"
  ];
  
  function gerarNome() {
    var genero = Math.random() < 0.5 ? "M" : "F";
    var nomes = genero === "M" ? nomes_M : nomes_F;
    return nomes[Math.floor(Math.random() * nomes.length)];
  }
  
  function gerarSobrenome() {
    return sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
  }
  
  function gerarEmail(nome, sobrenome) {
    var dominios = ["@gmail.com", "@outlook.com", "@hotmail.com"];
    var email =
      nome.toLowerCase() +
      "." +
      sobrenome.toLowerCase() +
      dominios[Math.floor(Math.random() * dominios.length)];
    return email.replace(/\s/g, "");
  }
  
  function gerarCPF() {
    var n = 9;
    var n1 = Math.floor(Math.random() * n + 1);
    var n2 = Math.floor(Math.random() * n);
    var n3 = Math.floor(Math.random() * n);
    var n4 = Math.floor(Math.random() * n);
    var n5 = Math.floor(Math.random() * n);
    var n6 = Math.floor(Math.random() * n);
    var n7 = Math.floor(Math.random() * n);
    var n8 = Math.floor(Math.random() * n);
    var n9 = Math.floor(Math.random() * n);
    var d1 =
      n9 * 2 +
      n8 * 3 +
      n7 * 4 +
      n6 * 5 +
      n5 * 6 +
      n4 * 7 +
      n3 * 8 +
      n2 * 9 +
      n1 * 10;
    d1 = 11 - (d1 % 11);
    if (d1 >= 10) d1 = 0;
    var d2 =
      d1 * 2 +
      n9 * 3 +
      n8 * 4 +
      n7 * 5 +
      n6 * 6 +
      n5 * 7 +
      n4 * 8 +
      n3 * 9 +
      n2 * 10 +
      n1 * 11;
    d2 = 11 - (d2 % 11);
    if (d2 >= 10) d2 = 0;
    return "" + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;
  }
  
  function gerarDataNascimento() {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascimento = Math.floor(Math.random() * 80) + (anoAtual - 80); 
    var mesNascimento = Math.floor(Math.random() * 12) + 1; 
    var diaNascimento;
  
    if (mesNascimento === 2) {
      diaNascimento = Math.floor(Math.random() * 28) + 1;
    } else if ([4, 6, 9, 11].includes(mesNascimento)) {
      diaNascimento = Math.floor(Math.random() * 30) + 1;
    } else {
      // Outros meses
      diaNascimento = Math.floor(Math.random() * 31) + 1;
    }
  
    // Adiciona zeros à esquerda se o dia ou mês for menor que 10
    var diaFormatado = diaNascimento < 10 ? "0" + diaNascimento : diaNascimento;
    var mesFormatado = mesNascimento < 10 ? "0" + mesNascimento : mesNascimento;
  
    return diaFormatado + "/" + mesFormatado + "/" + anoNascimento;
  }
  
  function gerarEndereco() {
    var tipoVia = Math.random() < 0.5 ? "avenida" : "rua";
    var nomeVia = tipoVia === "avenida" ? "Avenida" : "Rua";
    var nome = nome_endereço[Math.floor(Math.random() * nome_endereço.length)];
    var numero = Math.floor(Math.random() * 9899) + 100;
    return `${nomeVia} ${nome}, ${numero}`;
  }
  
  function gerarCEP() {
    var cep = Math.floor(Math.random() * 90000000) + 10000000;
    return cep.toString().replace(/(\d{5})(\d{3})/, "$1-$2"); 
}

function gerarTelefone() {
  var ddd = Math.floor(Math.random() * 90) + 10; 
  var parte1 = Math.floor(Math.random() * 90000) + 10000;
  var parte2 = Math.floor(Math.random() * 9000) + 1000; 
  return `(${ddd}) ${parte1}-${parte2}`;
}

function gerarEstado() {
  var estados = [
      "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo",
      "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná",
      "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima",
      "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
  ];
  return estados[Math.floor(Math.random() * estados.length)];
}

function gerarUsername(nome, sobrenome) {
  var username = (nome.toLowerCase() + sobrenome.toLowerCase()).replace(/\s/g, '');
  return username;
}

function gerarCodigo() {
  var nomeTabela = document.getElementById("nomeTabela").value;

  if (!nomeTabela.trim()) {
    nomeTabela = "MinhaTabela";
  }

  var numeroLinhas = document.getElementById("numeroLinhas").value;
  var camposSelecionados = [];
  var checkboxes = document.getElementsByName("dadosCheckbox");
  var nome, sobrenome;

  var nomeCheckbox = document.getElementById("nomeCheckbox");

  if (!nomeCheckbox.checked) {
    alert("Por favor, selecione o campo Nome!");
    return;
  }

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      camposSelecionados.push(checkboxes[i].value);
    }
  }

  var codigoSQL = "CREATE TABLE " + nomeTabela + " (";

  for (var i = 0; i < camposSelecionados.length; i++) {
    if (i > 0) {
      codigoSQL += ", ";
    }
    codigoSQL += camposSelecionados[i];
    if (camposSelecionados[i] === "nome") {
      codigoSQL += " VARCHAR(255)"; 
    } else if (camposSelecionados[i] === "email") {
      codigoSQL += " VARCHAR(255)"; 
    } else if (camposSelecionados[i] === "cpf") {
      codigoSQL += " VARCHAR(11)"; 
    } else if (camposSelecionados[i] === "data_nascimento") {
      codigoSQL += " DATE";
    } else if (camposSelecionados[i] === "endereco") {
      codigoSQL += " VARCHAR(255)"; 
    } else if (camposSelecionados[i] === "cep") {
      codigoSQL += " VARCHAR(9)"; 
    } else if (camposSelecionados[i] === "telefone") {
      codigoSQL += " VARCHAR(15)"; 
    } else if (camposSelecionados[i] === "estado") {
      codigoSQL += " VARCHAR(50)"; 
    } else if (camposSelecionados[i] === "username") {
      codigoSQL += " VARCHAR(50)"; 
    } else {
      codigoSQL += " VARCHAR(255)"; 
    }
  }

  codigoSQL += ");\n\n";

  codigoSQL += "INSERT INTO " + nomeTabela + " (";

  for (var i = 0; i < camposSelecionados.length; i++) {
    if (i > 0) {
      codigoSQL += ", ";
    }
    codigoSQL += camposSelecionados[i];
  }

  codigoSQL += ") VALUES ";

  for (var i = 0; i < numeroLinhas; i++) {
    if (i > 0) {
      codigoSQL += ", ";
    }
    codigoSQL += "(";
    for (var j = 0; j < camposSelecionados.length; j++) {
      if (j > 0) {
        codigoSQL += ", ";
      }
      if (camposSelecionados[j] === "nome") {
        nome = gerarNome();
        sobrenome = gerarSobrenome();
        codigoSQL += "'" + nome + " " + sobrenome + "'";
      } else if (camposSelecionados[j] === "email") {
        codigoSQL += "'" + gerarEmail(nome, sobrenome) + "'";
      } else if (camposSelecionados[j] === "cpf") {
        codigoSQL += "'" + gerarCPF() + "'";
      } else if (camposSelecionados[j] === "data_nascimento") {
        codigoSQL += "'" + gerarDataNascimento() + "'";
      } else if (camposSelecionados[j] === "endereco") {
        codigoSQL += "'" + gerarEndereco() + "'";
      } else if (camposSelecionados[j] === "cep") {
        codigoSQL += "'" + gerarCEP() + "'";
      } else if (camposSelecionados[j] === "telefone") {
        codigoSQL += "'" + gerarTelefone() + "'";
      } else if (camposSelecionados[j] === "estado") {
        codigoSQL += "'" + gerarEstado() + "'";
      } else if (camposSelecionados[j] === "username") {
        codigoSQL += "'" + gerarUsername(nome, sobrenome) + "'";
      } else {
        codigoSQL += "'Dado_" + (i + 1) + "'";
      }
    }
    codigoSQL += ")";
  }

  document.getElementById("codigoGerado").value = codigoSQL;
}

function copiarCodigo() {
  var codigoGerado = document.getElementById("codigoGerado");
  codigoGerado.select();
  document.execCommand("copy");
  document.getElementById("copiado-alert").style.display = "block";
  setTimeout(function () {
      document.getElementById("copiado-alert").style.display = "none";
  }, 2000);
}