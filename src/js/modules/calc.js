const calc = (size, material, options, promocode, rezult, state) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        rezultBlock = document.querySelector(rezult);
    let sum = 0;
    const calculationPicture = () => {

        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        if (sizeBlock.value == "" || materialBlock.value == "") {
            rezultBlock.textContent = "Выберете пожалуйста размер и материал картины";
        } else if (promocodeBlock.value === "IWANTPOPART") {
            rezultBlock.textContent = Math.round(sum * 0.7);
            state[rezult] = rezultBlock.textContent;

        } else {
            rezultBlock.textContent = sum;
            state[rezult] = rezultBlock.textContent;


            console.log(state);
        }
    };
    sizeBlock.addEventListener('change', calculationPicture);
    materialBlock.addEventListener('change', calculationPicture);
    optionsBlock.addEventListener('change', calculationPicture);
    promocodeBlock.addEventListener('input', calculationPicture);


};
export default calc;