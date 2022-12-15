
const qntdSenha = document.querySelector(".senha-tamanho input"),


    btn_gerador = document.querySelector(".btn_senha"),


    options = document.querySelectorAll(".options input"),

    senhaInput = document.querySelector(".copy-senha input"),

    senhaIndica = document.querySelector(".senha-indicador"),

    copiar = document.querySelector(".btn_copy ");

const gerarsenha = () => {
    let staticSenha = "",
        randomSenha = "",
        semDupli = false,
        tamanhoSenha = qntdSenha.value;

    options.forEach(option => {
        if (option.checked) {
            if (option.id !== "duplicado" && option.id !== "espaco") {
                staticSenha += caracteres[option.id];
            } else if (option.id === "espaco") {
                staticSenha += `    ${staticSenha}  `;
            } else {
                semDupli = true;
            }
        }
    });
    for (let i = 0; i < tamanhoSenha; i++) {
        let randomChar = staticSenha[Math.floor(Math.random() * staticSenha.length)];
        if (semDupli) {
            !randomSenha.includes(randomChar) || randomChar == " " ? randomSenha += randomChar : i--;
        } else {
            randomSenha += randomChar;
        }

    }
    document.getElementById("span").innerHTML = " ";
    senhaInput.value = randomSenha; 
}

const updateSenhaIndica = () => {
    senhaIndica.id = qntdSenha.value <= 8 ? "fraca" : qntdSenha.value <= 16 ? "mediana" : "forte";
    if (qntdSenha.value <= 8) {
        document.querySelector(".senha-indicador").style.background = "#e64a4a";
        document.querySelector(".senha-indicador").style.width = "20%";
    } else if (qntdSenha.value <= 16) {
        document.querySelector(".senha-indicador").style.background = "#f1c80b";
        document.querySelector(".senha-indicador").style.width = "50%";
    } else {
        document.querySelector(".senha-indicador").style.background = "#3f9716";
        document.querySelector(".senha-indicador").style.width = "100%";
    }
}
const caracteres = {
    caixabaixa: "abcdefghijklmnopqrstuvwxyz",
    numero: "0123456789",
    caixaalta: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    simbolo: "^!@#$%&*(){}[]|:;,.*-+<>^/"
}


const updateSlider = () => {
    document.querySelector(".senha-tamanho span").innerText = qntdSenha.value;
    gerarsenha();
    updateSenhaIndica();
}
updateSlider();

const copiarSenha = () => {
    navigator.clipboard.writeText(senhaInput.value);
    document.getElementById("span").innerHTML = " copiado!";
}

qntdSenha.addEventListener("input", updateSlider);
btn_gerador.addEventListener("click", gerarsenha);
copiar.addEventListener("click", copiarSenha);