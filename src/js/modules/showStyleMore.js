import { getResourse } from "../services/requests";
const showStyleMore = (trigger, wrapper) => {
    const btnStyle = document.querySelector(trigger);

    /*     pictureStyle.forEach(item => {
            item.classList.add('animated', 'fadeInUp');
        });
        btnStyle.addEventListener('click', () => {
            pictureStyle.forEach(item => {
                item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
                item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            });
            btnStyle.remove();
        }); */

    btnStyle.addEventListener('click', function() {
        getResourse('assets/db.json')
            .then(res => {
                createMask(res.styles);
            }).catch((e) => {
                console.log(e);
            });
        this.remove();
    });

    function createMask(response) {
        response.forEach(({ src, title, link }) => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `<div class=styles-block>
            <img src=${src} alt>
            <h4>${title}</h4>
            <a href="${link}">Подробнее</a>
        </div>`;
            document.querySelector(wrapper).append(card);
        });


    }

};
export default showStyleMore;