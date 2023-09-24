const cake = document.getElementById('cake')
const text = document.getElementById('text')

const chat = [
    {
        text: 'Chê cái gì bạn cố gắng làm đẹp hết mức rồi >:('
    },
    {   text: 'xời ngon không'
    },
    {
        text: 'bạn biết ngon mà'
    },
    {
        text: 'ơ ăn từ từ thôi'
    },
    {
        text: 'cho bạn với chứuuuuuu'
    },
    {
        text: 'vch 1 mình ăn hết luôn mà (ấn tiếp đi)'
    },
    {
        text: 'biết Thương ăn nhìu nên bạn chuẩn bị 2 cái rồi =)))'
    },
    {
        text: 'nói chung là'
    },
    {
        text: 'chúc Thương lúc nào cũng vui vẻ'
    },
    {
        text: 'tích cực'
    },
    {
        text: 'không bùn nhìu'
    },
    {
        text: 'với cả luôn đáng iu như bây giờ nhé :33'
    },
    {
        text: 'chúc Thương sinh nhật thiệt là zui zẻeeee'
    },
    {
        text: 'hết òi, ra rep bạn đi còn gì nữa =)))'
    },
]

var j = -1;
var h = 0;

cake.addEventListener('click',function(){
    j++;
    h++;
    text.innerHTML = chat[j].text;
    cake.src = "./assets/cake"+ h + ".png"
    if (h >= 7){
        cake.src = "./assets/cake1.png"
    }
})


