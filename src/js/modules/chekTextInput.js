const chekTextInput = (selector) => {
    const txtInputs = document.querySelectorAll(selector);
    txtInputs.forEach(item => {
        item.addEventListener('keypress', (e) => {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });


};
export default chekTextInput;