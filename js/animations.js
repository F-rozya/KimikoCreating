let recentBackS = document.querySelectorAll('.recent-back')
let recentForwardS = document.querySelectorAll('.recent-forward')
let recentMoreS = document.querySelectorAll('.recent-more-link')
let favoriteMoreS = document.querySelectorAll('.favorite-more-link')
let recomendMoreS = document.querySelectorAll('.recomend-more-link')
let popularMoreS = document.querySelectorAll('.popular-more-link')

function Animation(item , timeout = 1000) {
    item.addEventListener('click' , ()=>{
        item.classList.add('--animation')
        setTimeout(() => {
            item.classList.remove('--animation')
        }, timeout);    
    })
}

recentBackS.forEach((item)=>{
    Animation(item , 100)
})
recentForwardS.forEach((item)=>{
    Animation(item , 100)
})
recentMoreS.forEach((item)=>{
    Animation(item , 200)
})
favoriteMoreS.forEach((item)=>{
    Animation(item , 200)
})
recomendMoreS.forEach((item)=>{
    Animation(item , 200)
})
popularMoreS.forEach((item)=>{
    Animation(item , 200)
})


let recetns = document.querySelectorAll('.recent-content')
let recentButtons = document.querySelectorAll('.recent-buttons')

recentBackS.forEach((recentBack , i)=>{
    recentBack.addEventListener('click' , ()=>{
        recetns[i].scrollLeft -=  recetns[i].clientWidth
    })
})

recentForwardS.forEach((recentForward , i)=>{
    recentForward.addEventListener('click' , ()=>{
        recetns[i].scrollLeft +=  recetns[i].clientWidth
    })
})



recentButtons.forEach((recentButton , i)=>{

    recentBackS[i].classList.add('--opacity20')

    recentButton.addEventListener('click' , ()=>{
        setTimeout(() => {
            if (recetns[i].scrollLeft == 0){
                recentBackS[i].classList.add('--opacity20')
            } else {
                recentBackS[i].classList.remove('--opacity20')
            }
            if (recetns[i].scrollLeft == recetns[i].scrollWidth - recetns[i].clientWidth) {
                recentForwardS[i].classList.add('--opacity20')
            } else {
                recentForwardS[i].classList.remove('--opacity20')
            }
        }, 300);

        console.log(recetns[i].scrollLeft)
        console.log(recetns[i].scrollWidth - recetns[i].clientWidth)
    }) 
})