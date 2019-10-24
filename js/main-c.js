'use strict';
const main = document.querySelector('main');

const image = document.createElement('img');
image.src = "http://placekitten.com/320/162";
image.alt = "some cat";

const figCaption = document.createElement('figcaption');
figCaption.innerHTML = 'Some caption';

const figure = document.createElement('figure');
figure.appendChild(image);
figure.appendChild(figCaption);

const h2 = document.createElement('h2');
h2.innerHTML = 'Other header';

const header = document.createElement('header');
header.appendChild(h2);

const p = document.createElement('p');
p.innerHTML = 'Here is some text. Here is some text. Here is some text. Here is some text.';

const article = document.createElement('article');
article.appendChild(header);
article.appendChild(figure);
article.appendChild(p);

main.appendChild(article);