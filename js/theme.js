let darkThemeButton = document.querySelector('.style-dark')
let lightThemeButton = document.querySelector('.style-light')
let navBarr = document.querySelector('.nav')
let rootStyle1 = [
    "--text-color: #fff;",
    "--background1: #000;",
    "--background2: #111;",
    "--background3: #222;",
    "--background4: #181818;",
    "--background5: #f90;",
    "--placeholder-color:#777;",
    "--placeholder-color2:#555;",
    "--transparent:transparent;"
]
let rootStyle2 = [
    "--text-color:#000;",
    "--background1:#aaa;",
    "--background1:#aaa",
    "--background2:#ddd;",
    "--background3:#ccc;",
    "--background4:#d2d2d2;",
    "--background5:#03f;",
    "--placeholder-color:#555;",
    "--placeholder-color2:#777;",
    "--transparent:transparent;"
]

function theme(e){
    e.forEach(element => {
        document.body.style.cssText += element
    });
}

theme(rootStyle1)

darkThemeButton.addEventListener('click' , ()=>{
    theme(rootStyle1)
})

lightThemeButton.addEventListener('click' , ()=>{
    theme(rootStyle2)
})

// navBarr.style.cssText = 'background-color: var(--transparent);'

// window.addEventListener('scroll' , ()=>{
//     if (window.scrollY <= 0) {
//         navBarr.style.cssText = `background-color: var(--transparent);`
//     } else {
//         navBarr.style.cssText = 'background-color: var(--background2);'
//     }
// })