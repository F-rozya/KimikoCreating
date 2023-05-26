let menuLink = document.querySelectorAll('.menu-link')
let styleList = document.querySelector('.style-list')
let logo = document.querySelector('.logo-link')
let profileReg = document.querySelector('.profile-registration')
let profileButton = document.querySelector('.others-link')
let profileStatus = 'guest'



for (const i of menuLink) {
    i.addEventListener('mouseover' , ()=>{
        i.parentNode.classList.add('menu-item-hover')
    })
    i.addEventListener('mouseout' , ()=>{
        i.parentNode.classList.remove('menu-item-hover')
    })
}

logo.addEventListener('click' , ()=>{
    styleList.classList.remove('--of')
    styleList.classList.add('--animation')
})

profileButton.addEventListener('click' , ()=>{
    if(profileStatus == 'guest'){
        profileReg.classList.remove('--of')
        profileReg.classList.add('--animation')
    } else {
        location.href = 'gogle.com'
    }
})

document.addEventListener('click' , (e)=>{
    let clicked = e.target.classList[0]
    if(
        clicked !== 'profile-registration'
        && clicked !== 'profile-registration-login'
        && clicked !== 'profile-registration-signup'
        && clicked !== 'others-link'
        && clicked !== 'others-profile'
        && clicked !== 'fa-user'
        ){ 
            profileReg.classList.add('--of')
    }
    if(
        clicked !== 'style-list'
        && clicked !== 'style-dark'
        && clicked !== 'style-light'
        && clicked !== 'logo-link'
        && clicked !== 'logo'
        && clicked !== 'logo-sub'
        ){ 
            styleList.classList.add('--of')
    }
})

let setings = document.querySelectorAll('.recent-item-image-seting')
let setingList = document.querySelectorAll('.recent-item-image-seting-list')

setings.forEach((item , i)=>{

    document.addEventListener('click' , (e)=>{
        let clicked = e.target.classList[0]
        
        if(
            clicked !== 'recent-item-image-seting-list'
            && clicked !== 'recent-item-image-seting-list-item'
            && clicked !== 'recent-item-image-seting'
            && clicked !== 'fa-ellipsis-vertical'
        ){
             setingList[i].classList.add('--of')
        }
    })

    item.addEventListener('click' , ()=>{
        setingList.forEach((item)=>{
            item.classList.add('--of')
        })
        setingList[i].classList.remove('--of')
    })
})


genresRowItems = document.querySelectorAll('.favorite-genresrow-item')
let genresSlide = 0


genresRowItems.forEach((item , i)=>{
    item.classList.add(`genresrow-button-${i}`)
    item.addEventListener('click' , ()=>{
        genresSlide = i
    })
})

let favoriteContainerAll = document.querySelectorAll('.favorite-container')

favoriteContainerAll.forEach((favoriteContainer , i)=>{
    let childVal = favoriteContainer.childElementCount
    let wrapper = document.querySelectorAll('.favorite-wrapper')[i]
    let favoriteGenresrow = document.querySelectorAll('.favorite-genresrow')[i]

    favoriteContainer.style.width = 100 * childVal +'%'

    favoriteGenresrow.childNodes.forEach((button , i)=>{
        button.addEventListener('click' , ()=>{
            wrapper.scrollLeft = wrapper.clientWidth * ((i - 1) / 2)
            for (const i of favoriteGenresrow.childNodes) {
                if (i.classList != undefined) {
                    i.classList.remove('--active')
                }
            }
            button.classList.add('--active')    
            wrapper.classList.add('--animation')
            setTimeout(() => {
                wrapper.classList.remove('--animation')
            }, 300);
        })
    })
})


let popularContainer = document.querySelectorAll('.popular-container')
popularContainer.forEach((item , i)=>{
    let list = document.querySelectorAll('.popular-status-container-list')[i]
    let button = document.querySelectorAll('.popular-status-container-button')[i]
    let childVal = item.childElementCount
    let wrapper = document.querySelectorAll('.popular-wrapper')[i]

    button.addEventListener('mouseover' , ()=>{
        list.classList.add('--open')
    })
    button.addEventListener('mouseout' , ()=>{
        list.classList.remove('--open')
    })

    item.style.width = 100 * childVal + '%'

    list.childNodes.forEach((item2 , i)=>{
        if (item2.classList != undefined) {
            item2.addEventListener('click' , ()=>{
                button.classList.add('--animation')
                list.classList.add('--animation')
                item.classList.add('--animation')
                setTimeout(() => {
                    wrapper.scrollLeft = wrapper.clientWidth * ((i - 1) / 2)
                    item.classList.remove('--animation')
                    list.classList.remove('--animation')
                    button.classList.remove('--animation')
                    button.textContent = item2.textContent
                }, 700);
            })
        }
    })
})