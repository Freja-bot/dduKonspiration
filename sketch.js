//kommentar 
let mainbody = document.getElementById('main-body')
let page0 = document.getElementById('pages').children.item(0)
let page1 = document.getElementById('pages').children.item(1)
let page2 = document.getElementById('pages').children.item(2)
let page3 = document.getElementById('pages').children.item(3)
let page4 = document.getElementById('pages').children.item(4)
let page5 = document.getElementById('pages').children.item(5)
let page6 = document.getElementById('pages').children.item(6)

let button0 = document.getElementById('button0')
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')
let button5 = document.getElementById('button5')
let button6 = document.getElementById('button6')

let maintitle = document.getElementById('main-title')
let title0 = document.getElementById('titles').children.item(0)
let title1 = document.getElementById('titles').children.item(1)
let title2 = document.getElementById('titles').children.item(2)
let title3 = document.getElementById('titles').children.item(3)
let title4 = document.getElementById('titles').children.item(4)
let title5 = document.getElementById('titles').children.item(5)
let title6 = document.getElementById('titles').children.item(6)

button0.addEventListener('click', () => {
    mainbody.innerHTML = page0.innerHTML
    maintitle.innerHTML = title0.innerHTML
})
button1.addEventListener('click', () => {
    mainbody.innerHTML = page1.innerHTML
    maintitle.innerHTML = title1.innerHTML
})
button2.addEventListener('click', () => {
    mainbody.innerHTML = page2.innerHTML
    maintitle.innerHTML = title2.innerHTML
})
button3.addEventListener('click', () => {
    mainbody.innerHTML = page3.innerHTML
    maintitle.innerHTML = title3.innerHTML
})
button4.addEventListener('click', () => {
    mainbody.innerHTML = page4.innerHTML
    maintitle.innerHTML = title4.innerHTML
})
button5.addEventListener('click', () => {
    mainbody.innerHTML = page5.innerHTML
    maintitle.innerHTML = title5.innerHTML
})
button6.addEventListener('click', () => {
    mainbody.innerHTML = page6.innerHTML
    maintitle.innerHTML = title6.innerHTML
})
mainbody.innerHTML = page0.innerHTML
maintitle.innerHTML = title0.innerHTML

