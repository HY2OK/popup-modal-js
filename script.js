const viewBtn = document.querySelector('.view-modal')
const popup = document.querySelector('.popup')
const close = popup.querySelector('.close')
const field = popup.querySelector('.field')
const input = popup.querySelector('input')
const copy = popup.querySelector('button')

viewBtn.addEventListener('click', () => {
    popup.classList.toggle('show')
})

close.addEventListener('click', () => {
    viewBtn.click()
})

copy.addEventListener('click', async () => {
    input.select()

    navigator.clipboard
        .writeText(input.value)
        .then(() => {
            field.classList.add('acitve')
            copy.innerText = 'Copied'
            setTimeout(() => {
                field.classList.remove('active')
                copy.innerText = 'Copy'
                window.getSelection().removeAllRanges()
            }, 3000)
        })
        .catch(err => {
            console.log('Something went wrong', err)
        })
})
