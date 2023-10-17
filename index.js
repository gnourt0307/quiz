const questions = [
    {
        title: '1. Hôm này là ngày gì?',
        answers: ['20/10', 'Sinh nhật Thu Thương', 'Ngày phụ nữ Việt Nam', 'Tất cả các đáp án trên'],
        correctAnswer: 3,
        correctText: 'Không gì chính xác hơn 👏👏',
        incorrectText: 'Cũng đúng nhưng chưa có đủ'
    },
    {
        title: '2. Hôm nay là 20-10, hỏi có tất cả bao nhiêu câu hỏi?',
        answers: ['10 câu', '20 câu', '69 câu', 'cẹtu câu'],
        correctAnswer: 0,
        correctText: 'Ghê zậy bít luôn',
        incorrectText: 'Thương thử lại đii',
        incorrectText2: 'Thôi cũng tạm chấp nhận là đúng 😏 '
    },
    {
        title: '3. Tại sao Thương nên uống nước đầy đủ 💧💧',
        answers: ['Vì tốt cho sức khỏe', 'Tốt cho da', 'Cản thiện lưu thông', 'Loại bỏ độc tố'],
        correctAnswer: 0,
        correctText: 'Cái nào cũng đúng thôi nên là uống nhiều lên 😠😠',
        incorrectText: 'Cái nào cũng đúng thôi nên là uống nhiều lên 😠😠'
    },
    {
        title: '4. Chấm điểm độ lười của chính mình',
        answers: ['10/10', 'Siêu lười', 'Hơi lười', '🦥'],
        correctAnswer: 0,
        correctText: 'Đúng là đồ lười 😒😒😒',
        incorrectText: 'Đúng là đồ lười 😒😒😒'
    },
    {
        title: '5. Tại sao Thương toàn đi bắt nạt trẻ con zậy',
        answers: ['Vì chúng nó dễ lừa', 'Vì mình là người xấu', 'Vì mình thít', 'Vì zui'],
        correctAnswer: 1,
        correctText: 'Không hiểu sao bạn lại chơi với người xấu 😒',
        incorrectText: 'Quá là tồi',
        incorrectText2: 'Mình zui nó bùn 🙄'
    },
    {
        title: '6. Mèo là loài Thương thích, hỏi Felis Catus là loài gì',
        answers: ['Mèo', 'Chó', '🐧', '🐸'],
        correctAnswer: 0,
        correctText: 'Trời bít lun hả, giỏi quá zậy',
        incorrectText: 'Sai gòi nha'
    },
    {
        title: '7. Những đồ ăn Thương thích nhất là',
        answers: ['Cái này bạn không biết thật', 'Nên là tí ra nhắn cho bạn đi', 'Đồ ngọt, nước... của hãng nào lun', 'Để bạn còn bít'],
        correctAnswer: 0,
        correctText: '',
        incorrectText: ''
    },
    {
        title: '8. Top những điều sai trái Thương đã làm với bạn',
        answers: ['...', '...', '...', '...'],
        correctAnswer: 0,
        correctText: 'Đúng rồi làm gì có, điều duy nhất Thương sai là: sai gính >:3',
        incorrectText: 'Đúng rồi làm gì có, điều duy nhất Thương sai là: sai gính >:3'
    },
    {
        title: '9. Tại sao Thương lại đáng iu như zậy',
        answers: ['...', '...', '...', '...'],
        correctAnswer: 0,
        correctText: 'ko có đáp án vì ko có cách nào diễn tả hết sự đáng iu ấyy >:)',
        incorrectText: 'ko có đáp án vì ko có nào diễn tả hết sự đáng iu ấyy >:)'
    },
    {
        title: '10. Thương có ghét bạn không? (bạn sẽ biết Thương chọn cái nào đó nha)',
        answers: ['Có','Không'],
        correctAnswer: 0,
        correctText: 'ok ban hieu roi :<',
        incorrectText: ''
    },
    {
        title: 'Chúc mừng Thương đã xuất sắc hoàn thành các câu hỏi của bạn',
        answers: [],
        correctAnswer: 0,
        correctText: '',
        incorrectText: ''
    },
]

let questionElement = document.getElementById('question')
let nextQuestion = document.getElementById('increase')
let preQuestion = document.getElementById('decrease')
let answer = document.querySelectorAll('.answer')

var i = -1;

nextQuestion.addEventListener('click',function(){
    ++i;
    document.getElementById('critic').innerHTML =''
    document.getElementById('remove').removeAttribute('style')
    document.getElementById('remove').classList.remove('test')
    if(i < 0){
        document.getElementById('question').innerHTML = 'Thương hãy trả lời các câu hỏi sau để có cho mình 1 chiếc bánh sinh nhật cực kỳ thơm ngon'
        document.querySelector('ul').style.display = 'none'
        nextQuestion.innerHTML = 'gét gô'
        preQuestion.style.display = 'none'
        document.getElementById('critic').style.display = 'none'
    }
    else {
        document.querySelector('ul').style.display = 'block'
        nextQuestion.innerHTML = 'Câu hỏi tiếp theo'
        preQuestion.style.display = 'inline-block'
        document.getElementById('critic').style.display = 'block'
    }
    questionElement.innerHTML = questions[i].title
    if (questionElement.innerHTML == 'Chúc mừng Thương đã xuất sắc hoàn thành các câu hỏi của bạn'){
        document.getElementById('cake').style.display = 'block'
        nextQuestion.style.display = 'none'
        preQuestion.style.marginTop = '-80px'
    }


    else{
        document.getElementById('cake').style.display = 'none'
        nextQuestion.style.display = 'block'
        preQuestion.style.marginTop = '0'
    }

    if (questionElement.innerHTML == '10. Thương có ghét bạn không? (bạn sẽ biết Thương chọn cái nào đó nha)'){
        document.getElementById('rotate').innerHTML = 'Bạn thích Thương nhiều lắm.'
    }

    else {
        document.getElementById('rotate').innerHTML = 'Phiền Thương quay ngang điện thoại nhé :3'
    }

    answer.forEach(function(element,index){
        element.textContent = questions[i].answers[index]
        element.addEventListener('click', function(){
            var random = Math.round(Math.random() * (150 - 50) + 50) +'px'
            var random2 = Math.round(Math.random() * (500 - 0) + 0) +'px'
            if (questions[i].correctAnswer == index){
                document.getElementById('critic').innerHTML = questions[i].correctText
            }
            else if(element.innerHTML == 'Không'){
                element.classList.add('test')
                element.style.top = random
                element.style.left = random2
                element.style.width = 'fit-content'
                element.style.height = 'fit-content'
                element.style.padding = '0px'
            }
            else if(element.innerHTML == 'cẹtu câu'){
                document.getElementById('critic').innerHTML = questions[i].incorrectText2
            }
            else if(element.innerHTML == 'Vì zui'){
                document.getElementById('critic').innerHTML = questions[i].incorrectText2
            }
            else{
                document.getElementById('critic').innerHTML = questions[i].incorrectText
            }
        })
    })
})

preQuestion.addEventListener('click',function(){
    --i;
    document.getElementById('critic').innerHTML =''
    document.getElementById('remove').removeAttribute('style')
    document.getElementById('remove').classList.remove('test')
    if(i < 0){
        document.getElementById('question').innerHTML = 'Thương hãy trả lời các câu hỏi sau để có cho mình 1 chiếc bánh sinh nhật cực kỳ thơm ngon'
        document.querySelector('ul').style.display = 'none'
        nextQuestion.innerHTML = 'gét gô'
        preQuestion.style.display = 'none'
        document.getElementById('critic').style.display = 'none'
    }
    else{
        document.querySelector('ul').style.display = 'block'
        nextQuestion.innerHTML = 'Câu hỏi tiếp theo'
        preQuestion.style.display = 'inline-block'
        document.getElementById('critic').style.display = 'block'
    }
    questionElement.innerHTML = questions[i].title
    if (questionElement.innerHTML == 'Chúc mừng Thương đã xuất sắc hoàn thành các câu hỏi của bạn'){
        document.getElementById('cake').style.display = 'block'
        nextQuestion.style.display = 'none'
        preQuestion.style.marginTop = '-80px'
    }

    else{
        document.getElementById('cake').style.display = 'none'
        nextQuestion.style.display = 'block'
        preQuestion.style.marginTop = '0'
    }
    if (questionElement.innerHTML == '10. Thương có ghét bạn không? (bạn sẽ biết Thương chọn cái nào đó nha)'){
        document.getElementById('rotate').innerHTML = 'Bạn thích Thương nhiều lắm.'
    }

    else {
        document.getElementById('rotate').innerHTML = 'Phiền Thương quay ngang điện thoại nhé :3'
    }
    answer.forEach(function(element,index){
        element.textContent = questions[i].answers[index]
    })
})





