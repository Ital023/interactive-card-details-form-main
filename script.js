const button_confirm = document.querySelector(".button-confirm");
const cardholder = document.querySelector("#cardholder");
const cardnumber = document.querySelector("#cardnumber");
const expdateMM = document.querySelector("#expdateMM");
const expdateYY = document.querySelector("#expdateYY");
const cvc = document.querySelector("#cvc");

const inputs = document.querySelectorAll(".input");

//card infos
const front__number = document.querySelector(".front__number");
const personaldate__name = document.querySelector(".personaldate__name");
const expdatemm = document.querySelector(".exp-date__mm");
const expdateyy = document.querySelector(".exp-date__yy");
const cvc_card = document.querySelector(".cvc");

let tamanho = 0;

button_confirm.addEventListener("click",(ev)=>{
    ev.preventDefault();

})

inputs.forEach(input => {
    input.addEventListener("input",(ev)=>{
        const currentTarget = ev.currentTarget;
        const dataInputValue = currentTarget.dataset.value;

        if(dataInputValue === "cardholder"){
            personaldate__name.innerHTML = ev.target.value || "e.g. Jane Appleseed";
        }
        else if(dataInputValue === "cardnumber"){
            front__number.innerHTML = ev.target.value.toString().replace(/\d{4}(?=.)/g, '$& ') || "0000 0000 0000 0000"; 
        }
        else if(dataInputValue === "expMM"){
            expdatemm.innerHTML = ev.target.value || "00";
        }
        else if(dataInputValue === "expYY"){
            expdateyy.innerHTML = ev.target.value || "00";
        }
        else if(dataInputValue === "cvc"){
            cvc_card.innerHTML = ev.target.value || "000";
        }

    })
})

