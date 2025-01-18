const apikey = "f111b39a2fbe55b70d9795d26920b88a";
const cidade = "Palmas";
const link = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apikey}&units=metric`;

fetch(link)
.then((response) => {
    if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  })
.then((dados) => {
    console.log(dados); // Exibe os dados recebidos da API
  })
.catch((erro) => {
    console.error("Ocorreu um erro:", erro.message);
  });
