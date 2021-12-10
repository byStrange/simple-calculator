let bubbleParent = document.querySelector('.bubbles');
let delays = [2.2, 3.5, 0.2, 6, 7, 4, 3];
let scales = [2.15, 1.55, .8, 2.15, 3.4, 1];
let buttons = [{
    t: ['Ac', 7, 4, 1, 9]
}, {
    t: ['Del', 8, 5, 2, '.']
}, {
    t: ['%', 6, 3, '00']
}, {
    t: ['/', '-', '+', '=']
}];
let form = document.querySelector('form')
for (let i = 0; i < 7; i++) {
    let span = document.createElement('span');
    span.setAttribute('style', '--i:' + i + 's')
    span.style.animationDelay = delays[i] + 's'
    span.style.transform = `scale(${scales[i]})`
    span.className = `sp-${i}`;
    bubbleParent.appendChild(span);
}
for (let c = 0; c < buttons.length; c++) {
    let row = document.createElement('div');
    row.className = 'row'
    for (e of buttons) {
        let btn = document.createElement('input');
        btn.type = 'button';
        btn.value = e.t[c]
        row.appendChild(btn)
    }
    form.appendChild(row)
}
let btns = document.querySelectorAll('[type=button]')
let resultInput = document.querySelector('#answer')
btns.forEach(they => {
    they.onclick = function () {
        if (this.value == 'Ac') {
            resultInput.value = ''
        } else if (this.value == 'Del') {
            resultInput.value = resultInput.value.slice(0, resultInput.value.length - 1)
        } else if (this.value == '=') {
            resultInput.value = eval(resultInput.value)
        } else {
            resultInput.value += this.value
        }
    }
})
setInterval(() => {
    try {
        if (eval(resultInput.value) != undefined) {
            document.querySelector('.container').setAttribute('data-res', eval(resultInput.value))
        } else {
            document.querySelector('.container').setAttribute('data-res', '')
        }
    } catch (er) {
        console.log('')
    }
}, 100)