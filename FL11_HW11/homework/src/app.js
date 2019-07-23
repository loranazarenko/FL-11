let rootNode = document.getElementById('root');

let header = document.createElement('div');
header.className = 'header';
rootNode.appendChild(header);

let head2 = document.createElement('h2');
let txt_h2 = document.createTextNode('TODO Cat List');
head2.appendChild(txt_h2);
header.appendChild(head2);

let divInp = document.createElement('div');
divInp.className = 'myDiv';
rootNode.appendChild(divInp);

let input = document.createElement('input');
input.setAttribute('placeholder', 'Add new action...');
input.setAttribute('type', 'text');
input.id = 'inputVal';
divInp.appendChild(input);

let buttonAdd = document.createElement('i');
let txt_buttonAdd = document.createTextNode('add_box');
buttonAdd.className = 'material-icons';
buttonAdd.setAttribute('type', 'button');
buttonAdd.setAttribute('onclick', 'newElement()');
buttonAdd.style.backgroundColor = 'white';
buttonAdd.setAttribute('id', 'addBtn');
buttonAdd.appendChild(txt_buttonAdd);
divInp.appendChild(buttonAdd);

let hr = document.createElement('hr');
rootNode.appendChild(hr);

let btn = document.getElementById('addBtn');
btn.disabled = true;

const items = 10;
let ul = document.createElement('ul');
ul.id = 'list';
rootNode.appendChild(ul);

function newElement() {
  let close = document.getElementsByClassName('close');
  let inputValue = document.getElementById('inputVal').value;
  let li = document.createElement('li');
  li.setAttribute('draggable', 'true');
  li.className = 'classLi';
  let buttonClose = document.createElement('button');
  let buttonChecked = document.createElement('input');
  let buttonEdit = document.createElement('i');

  if (inputValue === '') {
    btn.disabled = true;
    return;
  } else {
    btn.disabled = false;
  }

  if (close.length === items) {
    btn.disabled = true;
    alert('Maximum item per list are created');
  } else {

    let txtNew = document.createTextNode(inputValue);
    li.appendChild(txtNew);
    document.getElementById('list').appendChild(li);
    document.getElementById('inputVal').value = '';

    let txt = document.createTextNode('delete');
    buttonClose.className = 'material-icons close';
    buttonClose.id = 'buttonClose';
    buttonClose.style.backgroundColor = 'white';
    buttonClose.appendChild(txt);
    li.appendChild(buttonClose);

    buttonChecked.setAttribute('type', 'checkbox');
    buttonChecked.id = 'buttonChecked';
    buttonChecked.setAttribute('class', 'material-icons done');
    li.appendChild(buttonChecked);

    let txtEdit = document.createTextNode('edit');
    buttonEdit.className = 'material-icons edit';
    buttonEdit.id = 'buttonEdit';
    buttonEdit.style.backgroundColor = 'white';
    buttonEdit.appendChild(txtEdit);
    li.appendChild(buttonEdit);

  }

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = 'none';
    }
  }
}

function isChecked(event) {
  let target = event.target;
  if (target.getAttribute('type') === 'checkbox') {
    target.setAttribute('disabled', '')
  }
}
ul.addEventListener('click', isChecked);

function editItem(event) {
  let target = event.target;
  let temp = '';
  if (target.innerHTML === 'edit') {
    let prevEl = target.previousSibling.previousSibling.previousSibling;
    target.parentNode.removeChild(prevEl);
    let edit = document.createElement('input');
    edit.value = temp;
    target.parentNode.insertBefore(edit, target);
    target.innerHTML = 'save';
    return;
  }
  if (target.innerHTML === 'save') {
    let textInput = target.previousSibling;
    let temp = textInput.value;
    target.parentNode.removeChild(textInput);

    let txtNew = document.createTextNode(temp);
    target.parentNode.insertBefore(txtNew, target);
    target.innerHTML = 'edit';
  }
}
ul.addEventListener('click', editItem);

let dragItem;
function dragOver(event) {
  event.preventDefault();
}

function dragStart(event) {
  let target = event.target;
  while (target.className !== 'classLi') {
    target = target.parentNode;
  }
  if (target.className === 'classLi') {
    dragItem = target;
    event.dataTransfer.setData('text/html', dragItem);
  }
}

function dragDrop(event) {
  let target = event.target;
  while (target.className !== 'classLi') {
    target = target.parentNode;
  }
  if (target.parentNode.id === 'list') {
    target.parentNode.insertBefore(dragItem, target.nextSibling);
  }
}

ul.addEventListener('dragover', dragOver);
ul.addEventListener('dragstart', dragStart);
ul.addEventListener('drop', dragDrop);