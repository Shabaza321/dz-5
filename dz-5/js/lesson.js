// PHONE BLOCK 

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_span')

const regExp = /\+996 [2579]\d{2}-\d{2}-\d{2}-\d{2}/

phoneButton.onclick = () => {
    if (regExp) {
         
    }
}

const tapContentBlocks = document.querySelector('.tab_content_block')

const hidetTapContentBlocks = () => {
    tapContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })
}