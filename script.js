//The user clicks the button
//The program generates a random answer from the database. 
//The answer is shown in the special place in the html.

let phrases = [
    { text: 'удивить близкого человека', image: './assets/img/surprise.png'},
    { text: 'принять ванную с пеной', image: './assets/img/bathroom.png'},
    { text: 'купить другу чашечку ароматного кофе', image: './assets/img/friends.png'},
    { text: 'навести порядок в квартире', image: './assets/img/combo.png'},
    { text: 'выспаться', image: './assets/img/sleep.png'},
    { text: 'купить себе что-то вкусненькое', image: './assets/img/eat.png'},
    { text: 'организовать пикник', image: './assets/img/picnic.png'},
    { text: 'обнять близкого человека', image: './assets/img/ver-02-tg.png'},
    { text: 'заняться спортом', image: './assets/img/sport.png'},
    { text: 'пересмотреть любимый фильм', image: './assets/img/love-film.png'},
    { text: 'уделить больше внимания своему питомцу', image: './assets/img/eat.png'},
    { text: 'позвать друзей на ужин', image: './assets/img/ffriends.png'},
    { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: './assets/img/music.png' },
    { text: 'избавиться от 5 ненужных вещей', image: './assets/img/garbage.png'},
    { text: 'получить неожиданное увеличение бюджета', image: './assets/img/money.png'},
    { text: 'отправить другу смешную гифку', image: './assets/img/fun-gif.gif' },
    { text: 'подобрать маршрут на ближайший отпуск', image: './assets/img/travel.png' },
    { text: 'расставить книги на полке по цвету', image: './assets/img/books.png' },
    { text: 'прочитать новости и ужаснуться в комментариях', image: './assets/img/incredible.png' }
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
});

//the firs 2 phrases and img are displayed automatically after loading the page
for (let i = 0; i <= 1; i = i + 1) {
    smoothly(phrase, 'textContent', phrases[i].text); //change a text
    smoothly(image, 'src', phrases[i].image); //change an img
}
