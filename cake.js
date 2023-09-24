const cake = document.getElementById('cake')
const text = document.getElementById('text')

const chat = [
    {
        text: 'Chê cái gì bạn cố gắng làm đẹp hết mức rồi >:('
    },
    {   text: 'Sth'
    },
    {
        text: 'hehehe'
    },
    {
        text: 'hehehe2'
    },
    {
        text: 'hehehe3'
    },
    {
        text: 'hehehe4'
    },
    {
        text: 'hehehe'
    },
    {
        text: 'hehehe6'
    },
]

var j = -1;
var h = 0;

cake.addEventListener('click',function(){
    j++;
    h++;
    text.innerHTML = chat[j].text;
    cake.src = "./assets/cake"+ h + ".png"
    if (h >= 6){
        cake.src = "./assets/cake1.png"
    }
})


