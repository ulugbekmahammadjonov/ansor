const icon = document.querySelector('.icon')
const siteList =document.getElementById('sitenav-list')
const overlay = document.querySelector('.overlay')

icon.addEventListener('click', () =>{
    siteList.classList.toggle('active')
    overlay.classList.toggle('hidden')
    
})
overlay.addEventListener('click',() =>{
    siteList.classList.remove('active')
    overlay.classList.add('hidden')
})
document.addEventListener('scroll',() =>{
    siteList.classList.remove('active')
    overlay.classList.add('hidden')
})