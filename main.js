let type = document.getElementsByClassName('type');
let range = document.getElementById('range');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let emoji = document.getElementById('emoji');
let error = document.getElementById('error');
let display = document.getElementById('rangeValue');
let number = document.getElementById('number');
range.addEventListener('input', wonder);
plus.onclick = () => {
  wonder();
  range.value++;
};
minus.onclick = () => {
  wonder();
  range.value--;
};
type[0].onclick = () => {
  wonder();
  display.textContent = `&#${range.value}`;
  emoji.innerHTML = display.textContent;
};
type[1].onclick = () => {
  wonder();
};
type[2].onclick = () => {
  wonder();
  display.textContent = `&#x${range.value}`;
  emoji.innerHTML = display.textContent;
};

function wonder() {

  if (range.value > 188 && range.value < 191) {
    range.value = 191;
  }
  else if (range.value > 249 && range.value < 299) {
    range.value = 300;
  }
  else if (range.value > 649 && range.value < 680) {
    range.value = 680;
  }
  else if (range.value > 773 && range.value < 910) {
    range.value = 910;
  }
  display.textContent = `&#x1f${range.value}`;
  emoji.innerHTML = `&#x1f${range.value}`;

}
let marvel = () => {
  if (number.value < 110 || number.value > 1000) {
    error.textContent = `insert number between 110 and 1000!`;
    number.value = '';
  }
  else {
    range.value = number.value;
  }
  wonder();
}
/**
 * 0 - 109 not necessary
 * 110 - 188 styled alphabets
 * 188 - 190 not necessary
 * 191-200 badges
 * 201-250 chinese/korean-like writtings
 * 250-299 not valid
 * 300-649 emojis
 * 550-567 clocks
 * 650-679 not valid
 * 700-773 symbols
 * 774-909 not valid
 * 910-999 valid
 **/
