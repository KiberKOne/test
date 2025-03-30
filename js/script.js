const slides = document.getElementsByClassName("slider__img"); // массив изображений
const navBlock = document.getElementsByClassName("navigation")[0]; // обращаемся к нулевому эл. массива

// генерирование навигации (генерирование HTML-элементов)
function generatePagination() {
    for (let i = 0; i < slides.length; i++) {
        let label = document.createElement("label"); // создание HTML-элемента
        label.classList.add("bar"); // добавление класса к элементу

        label.textContent = i + 1; // добавление +1
        navBlock.insertBefore(label, navBlock.firstElementChild); // вставка созданного элемента в navigation

        // создаем условие
        if (i === 0){
            slides[i].classList.add("slider__img_active"); // объявляется начальное/активное изображение
        };
    };

    // обращение к bar
    [].forEach.call(document.getElementsByClassName("bar"), (element) => {
        // при клике вызывается функция
        element.onclick = function() {
            // console.log(this); // сохраняется нынешнее нажатие
            changeImage(this); // выводится изображение
        };
    })
};

// отвечает за изменение и вывод изображения, обращение к функции
function changeImage(element) {
    let num = Number(element.textContent) - 1;
    let oldActive = document.getElementsByClassName("slider__img_active")[0];
    
    oldActive.classList.remove("slider__img_active");
    slides[num].classList.add("slider__img_active");
}; 

generatePagination() // вызов функции
