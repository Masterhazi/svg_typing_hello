const text = "print('Hello Python')";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById('text').textContent += text[index++];
    setTimeout(type, 100);
  } else {
    document.getElementById('cursor').style.display = 'none';
  }
}

type();
