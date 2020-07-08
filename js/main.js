const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

//Selecionar tab content item
function selectItem(e) {
    removeBorda()
    removeShow()
    // adiciona a borda no tab atual
    this.classList.add('tab-border')
    // pegue o item de conteúdo do DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    // Adicionar a classe show
    tabContentItem.classList.add('show')
}

function removeBorda() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

//Ouvindo o click no tab 
tabItems.forEach(item => item.addEventListener('click', selectItem))
