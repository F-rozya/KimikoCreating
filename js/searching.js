let menuSearch = document.querySelector('.menu-link-search')
let inputSearch = document.querySelector('.menu-item-search-input')
let textSearch = document.querySelector('.menu-link-search-text')
let glass = document.querySelector('.fa-magnifying-glass')
let inputContainer = document.querySelector('.search-input-container')
let searchinglistContainer = document.querySelector('.searchinglist-container')
let searchinglist = document.querySelector('.searchinglist')

menuSearch.addEventListener('click' , ()=>{
    inputContainer.classList.remove('--of')
    textSearch.classList.add('--of')
    glass.classList.add('--of')
    inputSearch.focus()
    menuSearch.parentNode.classList.add('menu-item-hover-absolute')
})
document.addEventListener('click' , (e) => {
    let clicked = e.target.classList[0]
    let clicked2 = e.target.classList[1]
    if(
        clicked2 !== 'menu-item-search'
        &&clicked2 !== 'menu-link-search'
        &&clicked !== 'fa-solid'
        &&clicked !== 'menu-link-search-text' 
        && clicked !== 'menu-item-search-input' 
        && clicked !== 'searchinglist' 
        && clicked !== 'searchinglist-item' 
        ){
            inputSearch.value = ''
            textSearch.classList.remove('--of')
            glass.classList.remove('--of')
            inputContainer.classList.add('--of')
            searchinglistContainer.classList.add('--of')
            menuSearch.parentNode.classList.remove('menu-item-hover-absolute')
    }
})

inputSearch.addEventListener('input' , ()=>{
    searchinglistContainer.classList.remove('--of')
    searchinglist.classList.add('--animation')
    if(inputSearch.value == ''){
        searchinglistContainer.classList.add('--of')
    }
})


inputSearch.oninput = function(){
    try{
        let val = this.value.trim()
        let notification = document.querySelector('.searchinglist-notification')
        let elasticitems = document.querySelectorAll('.searchinglist-item')
        if (val[0] == '.' || val[0] == undefined) {
            notification.classList.remove('--of')
            elasticitems.forEach(()=>{
                elem.classList.add('--of')
            })
        }
        else if (val != ''){
            elasticitems.forEach(function(elem){
                let textTransfer = elem.textContent.toUpperCase().search(val.toUpperCase())
                if(textTransfer === -1){
                    elem.classList.add('--of')
                    elem.innerHTML = elem.textContent
                }
                else{
                    elem.classList.remove('--of')
                    let str = elem.textContent
                    elem.innerHTML = insertMark(str , textTransfer , val.length)
                }
            })
        }
        else {
            elasticitems.forEach(function(elem){
                elem.classList.remove('--of')
                elem.innerHTML = elem.textContent
            })
        }

        notificationFn()

        let itemNumber = 0
        elasticitems.forEach(function(elem){
            if(elem.classList[1] !== '--of'){
                console.log(true)
                itemNumber += 1
                if (itemNumber > 4){
                    elem.classList.add('--of')
                }
            }
        })

    } catch (err) {
        let notification = document.querySelector('.searchinglist-notification')
        let elasticitems = document.querySelectorAll('.searchinglist-item')
        notification.classList.remove('--of')
        for (const i of elasticitems) {
            i.classList.add('--of')
        }
    }
}

function resetItems(elem){
    elem.classList.remove('--of')
    elem.innerHTML = elem.textContent
}
function insertMark(string , pos , len){
    return string.slice(0 , pos)+'<mark class="mark-item">'+ string.slice(pos , pos+len)+'</mark>'+string.slice(pos+len);
}
function notificationFn(){
    let notification = document.querySelector('.searchinglist-notification')
    let elasticitems = document.querySelectorAll('.searchinglist-item')
    let ofNumber = 0
    for (const i of elasticitems) {
        if (i.classList[1] == '--of') {
        ofNumber += 1
        } else {
        ofNumber = ofNumber
        }
    }
    if (ofNumber == elasticitems.length) {
        notification.classList.remove('--of')
    } else{
        notification.classList.add('--of')
    }
}
