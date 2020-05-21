console.log('podpięto JS');
const main = document.querySelector(".container");
const list = document.querySelector(".list");
const listElements = document.querySelectorAll(".list__element");

const changeListTitle = function () {
  list.textContent = listElements[0].textContent;
  const div = document.createElement('div');
  main.appendChild(div);
  div.style.width = '750px';
  div.style.lineHeight = '50px';
  div.textContent = 'miejsce na info o foremce';
  div.style.background = 'hotpink';
  div.style.borderRadius = '22px';
  div.style.position = 'absolute';
  div.style.top = '50%';
  div.style.left = '50%';
  div.style.transform = 'translate(-50%,-50%)';
  div.style.fontSize = '22px';
  div.style.textAlign = 'center';
}

listElements[0].addEventListener('click', changeListTitle);
