// checking answers
const correctAnswers = ['B', 'B', 'B', 'B']
const form = document.querySelector('.quiz-form')

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    // check answers
    userAnswers.forEach((userAnswer, index) =>{
        if(userAnswer === correctAnswers[index]){
            score += 25;
        }
    })
    document.querySelector('p').innerHTML = 'Score is ' + score + '%'
    
    
})

