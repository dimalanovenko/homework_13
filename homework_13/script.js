const bodyEl = document.getElementsByTagName('body')[0];
bodyEl.style.margin = '20px';
bodyEl.style.padding = 0;
bodyEl.style.display = 'flex';
bodyEl.style.flexDirection = 'column';


function createElement(tag, parent, styles = {}, attributes = {}) {
    const el = document.createElement(tag);
    Object.assign(el.style, styles);
    for (const [key, value] of Object.entries(attributes)) {
        el.setAttribute(key, value);
    }
    parent.appendChild(el);
    return el;
}

const button = createElement('button', bodyEl, {
    width: '200px',
    height: '100px',
    backgroundColor: 'black',
    borderRadius: '10px',
    border: 0
});

const text = createElement('p', button, {
    color: 'white',
    fontSize: '20px',
    textAlign: 'center'
})

text.innerHTML = 'Изменить цвет';

function changeBackgroundColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
}

button.addEventListener('click', changeBackgroundColor)

//_________________________________________________________________________________________________

const inputEl = createElement('input', bodyEl, {
    width: '200px',
    height: '100px',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '30px',
    border: 0,
    borderRadius: '10px',
    marginTop: '20px',
    textAlign: 'center'
}, {
    id: 'greetingInp'
})

const inputText = createElement('p', bodyEl, {
    color: 'pink',
    fontSize: '50px'
}, {
    id: 'greeting'
})

inputEl.addEventListener('keyup', () => {
    const name = inputEl.value;
    inputText.innerHTML = name ? `Привет, ${name}!` : '';
});