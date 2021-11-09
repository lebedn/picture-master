const filters = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');


    function filterPicture(picture) {
        markAll.forEach(item => {
            item.style.display = "none";
            item.classList.remove('animated', 'fadeIn');
        });
        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');
        if (picture) {
            picture.forEach(item => {
                item.style.display = "block";
                item.classList.add('animated', 'fadeIn');
            });

        } else {
            no.style.display = "block";
            no.classList.add('animated', 'fadeIn');
        }
    }

    function menuMark(btnMark, pict) {
        const btn = menu.querySelector(btnMark);
        btn.addEventListener('click', () => {
            filterPicture(pict);
        });

    }
    menuMark(' .portfolio-menu .all', markAll);
    menuMark(' .portfolio-menu .lovers', markLovers);
    menuMark(' .portfolio-menu .girl', markGirl);
    menuMark('.guy', markGuy);
    menuMark('.chef', markChef);
    menuMark('.grandmother');
    menuMark('.granddad');

    menu.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.tagName == "LI") {
            items.forEach(item => item.classList.remove('active'));
            target.classList.add('active');
        }

    });




};
export default filters;