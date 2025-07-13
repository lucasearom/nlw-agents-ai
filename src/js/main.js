const apiKeyInput = document.getElementById("apiKey");
const gameSelect = document.getElementById("gameSelect");
const questionInput = document.getElementById("questionInput");
const askButton = document.getElementById("askButton");
const aiResponse = document.getElementById("aiResponse");
const form = document.getElementById("form");

const enviarFormulario = (event) => {
    event.preventDefault(); // método responsável por cancelar um evento, no caso prevenindo que o form recarregue após ser enviado

    // capturando o valor no input
    const apiKey = apiKeyInput.value;
    const game = gameSelect.value;
    const question = questionInput.value;

    // condição para validar se os campos foram preenchidos
    if (apiKey == "" || game == "" || question == "") {
        alert("Por favor, preencha todos os campos");
        return;
    }
};

form.addEventListener("submit", enviarFormulario);
