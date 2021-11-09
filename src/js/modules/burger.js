const burger = (btn, menu) => {
    const btnBurger = document.querySelector(btn),
        menuBurger = document.querySelector(menu);
    menuBurger.style.display = "none";
    btnBurger.addEventListener('click', () => {
        if (menuBurger.style.display == "none" && window.screen.availWidth < 993) {
            menuBurger.style.display = "block";
        } else {
            menuBurger.style.display = "none";
        }

    });
    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 993) {
            menuBurger.style.display = "none";
        }

    });

};
export default burger;