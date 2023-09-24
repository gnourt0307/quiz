const questions = [
    {
        title: 'Câu hỏi 1',
        answers: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
        correctAnswer: 1,
        correctText: 'Chuan roi day',
        incorrectText: 'Sai roi cu'
    },
    {
        title: 'Câu hỏi 2',
        answers: ['answer 23423', 'answer 2', 'answer 3', 'answer 4'],
        correctAnswer: 2,
        correctText: 'Chuan roi day',
        incorrectText: 'Sai roi cu'
    },
    {
        title: 'Câu hỏi 3',
        answers: ['answer 5234523', 'answer 2', 'answer 3', 'answer 4'],
        correctAnswer: 3,
        correctText: 'Chuan roi day',
        incorrectText: 'Sai roi cu'
    },
    {
        title: 'Câu hỏi 4',
        answers: ['answer 234234', 'answer 2', 'answer 3', 'answer 4'],
        correctAnswer: 3,
        correctText: 'Chuan roi day',
        incorrectText: 'Sai roi cu'
    },
    {
        title: 'Câu hỏi 5',
        answers: ['answer asdf', 'answer 2', 'answer 3', 'answer 4'],
        correctAnswer: 3,
        correctText: 'Chuan roi day',
        incorrectText: 'Sai roi cu'
    },
    {
        title: 'Câu hỏi 6',
        answers: ['answer 32432', 'answer 2', 'answer 3', 'answer 4'],
        correctAnswer: 3,
        correctText: 'Chuan roi day',
        incorrectText: 'Sai roi cu'
    },
    {
        title: 'Câu hỏi 7',
        answers: ['answer acvd', 'answer 2', 'answer 3', 'answer 4'],
        correctAnswer: 3,
        correctText: 'Chuan roi day',
        incorrectText: 'Sai roi cu'
    },
    {
        title: 'Câu hỏi 8',
        answers: ['answer ascv', 'answer 2', 'answer 3', 'answer 4'],
        correctAnswer: 3,
        correctText: 'Chuan roi day',
        incorrectText: 'Sai roi cu'
    },
    {
        title: 'Câu hỏi 9',
        answers: ['answer asdf', 'answer 2', 'answer 3', 'answer 4'],
        correctAnswer: 3,
        correctText: 'Chuan roi day',
        incorrectText: 'Sai roi cu'
    },
    {
        title: 'Câu 10: Thương có ghét bạn không?',
        answers: ['Có','Không'],
        correctAnswer: 0,
        correctText: 'ok ban hieu roi :<',
        incorrectText: 'Sai roi cu'
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
    if (questionElement.innerHTML == 'Chúc mừng Thương đã xuất sắc hoàn thành các câu hỏi'){
        document.getElementById('cake').style.display = 'block'
        nextQuestion.style.display = 'none'
        preQuestion.style.marginTop = '-80px'
    }


    else{
        document.getElementById('cake').style.display = 'none'
        nextQuestion.style.display = 'block'
        preQuestion.style.marginTop = '0'
    }

    if (questionElement.innerHTML == 'question 7'){
        document.getElementById('rotate').innerHTML = 'Hehe'
    }

    else {
        document.getElementById('rotate').innerHTML = 'Phiền Thương quay ngang điện thoại nhé :3'
    }

    answer.forEach(function(element,index){
        element.textContent = questions[i].answers[index]
        element.addEventListener('click', function(){
            var random = Math.round(Math.random() * (250 - 50) + 50) +'px'
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
    if (questionElement.innerHTML == 'Chúc mừng Thương đã xuất sắc hoàn thành các câu hỏi'){
        document.getElementById('cake').style.display = 'block'
        nextQuestion.style.display = 'none'
        preQuestion.style.marginTop = '-80px'
    }

    else{
        document.getElementById('cake').style.display = 'none'
        nextQuestion.style.display = 'block'
        preQuestion.style.marginTop = '0'
    }
    if (questionElement.innerHTML == 'question 7'){
        document.getElementById('rotate').innerHTML = 'Hehe'
    }

    else {
        document.getElementById('rotate').innerHTML = 'Phiền Thương quay ngang điện thoại nhé :3'
    }
    answer.forEach(function(element,index){
        element.textContent = questions[i].answers[index]
    })
})





