const buttonEnigmea = document.querySelector("#buttonEnigmea");
const inputEnigmea = document.querySelector("#inputEnigmea");
const divError = document.querySelector("#error");
const divSuccess = document.querySelector("#success");
const buttonEnigmez = document.querySelector("#buttonEnigmez");
const inputEnigmez = document.querySelector("#inputEnigmez");
buttonEnigmea.addEventListener("click", (event) => {
    if(inputEnigmea.value === "26") {
        divSuccess.style.visibility = "visible";
        setTimeout(() => {
            document.location.href="enigmez.html"
        }, 1000);
    } else {
        divError.style.visibility = "visible";
        setTimeout(() => {
            divError.style.visibility = "hidden";
        }, 1000);
    }
});

buttonEnigmez.addEventListener("click", (event) => {
    if(inputEnigmea.value === "voiture" || inputEnigmea.value === "Voiture" ) {
        divSuccess.style.visibility = "visible";
        setTimeout(() => {
            document.location.href="enigmez.html"
        }, 1000);
    } else {
        divError.style.visibility = "visible";
        setTimeout(() => {
            divError.style.visibility = "hidden";
        }, 1000);
    }
});
