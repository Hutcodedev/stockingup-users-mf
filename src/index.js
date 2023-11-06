console.log('### Users mf ###');

const root = document.querySelector('#root-products')
let content = ''

for(let i = 0; i < 3; i++) {
    content += `<div>${i} - Content from users mf</div>`
}

root.innerHTML = content;