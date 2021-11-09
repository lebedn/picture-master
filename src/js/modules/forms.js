import { postData } from "../services/requests";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll("[name='upload']");

    const messeges = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    const clearInput = () => {
        inputs.forEach(item => {
            item.value = "";
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = "Файл не выбран";
        });

    };
    upload.forEach(item => {
        item.addEventListener('input', () => {
            let arr = item.files[0].name.split('.');
            let dots;
            arr[0].length > 6 ? dots = "..." : dots = '.';
            let name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let messageStatus = document.createElement('div');
            messageStatus.classList.add('status');
            item.parentNode.appendChild(messageStatus);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let messageImg = document.createElement('img');
            messageImg.setAttribute('src', messeges.spinner);
            messageImg.classList.add('animated', 'fadeInUp');
            messageStatus.appendChild(messageImg);

            let messageText = document.createElement('div');
            messageText.textContent = messeges.loading;
            messageStatus.appendChild(messageText);

            const formData = new FormData(item);

            if (item.getAttribute('data-calc') === "calc") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            let api;

            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;

            console.log(api);

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    messageImg.setAttribute('src', messeges.ok);
                    messageText.textContent = messeges.success;
                }).catch(() => {
                    messageImg.setAttribute('src', messeges.fail);
                    messageText.textContent = messeges.failure;
                })
                .finally(() => {
                    clearInput();
                    setTimeout(() => {
                        messageStatus.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                });
        });
    });
};
export default forms;