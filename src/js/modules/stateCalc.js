const stateCalc = (state) => {
    const size = document.querySelectorAll('#size'),
        material = document.querySelectorAll('#material'),
        options = document.querySelectorAll('#options'),
        promocode = document.querySelectorAll('.promocode');


    function bindActionToElems(event, elem, prop) {

        elem.forEach((item) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                    case 'INPUT':
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
            });
        });
    }


    bindActionToElems('change', size, 'sizePicture');
    bindActionToElems('change', material, 'material');
    bindActionToElems('change', options, 'options');
    bindActionToElems('input', promocode, 'promocode');

};

export default stateCalc;