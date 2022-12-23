import { diffDates, diffToHtml, setTime, diffTime } from "./datecalc.js"
import { formatError } from './error.js'


const dateCalcForm = document.getElementById('datecalc')
const dateCalcResult = document.getElementById('datecalc_result')
const openCalc = document.querySelector('.opencalc')

const handleCalcDates = (event) => {
    dateCalcResult.innerHTML = '';
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff)
    }
    else {
        dateCalcResult.innerHTML = formatError('Заполните оба поля')
    }
}

dateCalcForm.addEventListener('submit', handleCalcDates)

//timer

const input = document.getElementById('input')
const blockTime = document.querySelector('.time')

const stop = document.getElementById('stop')
const start = document.getElementById('start')
const reset = document.getElementById('reset')

const openTimer = document.querySelector('.opentimer')
const timer = document.querySelector('.timer')

blockTime.innerHTML = ''
input.value = ''
let interval;
const sound = new Howl({
    src: ['./les_den.mp3']
});

const timerWork = () => {
    if (input.value > 0) {
        input.value--
    }
    else if
        (input.value < 0) {
        input.value = 0;
        blockTime.innerHTML = 0
    } else {
        input.value = ''
        sound.play();
    }

    const datetime = setTime(input.value)
    blockTime.innerHTML = diffTime(datetime)
}

start.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(timerWork, 1000)
})
stop.addEventListener('click', () => {
    clearInterval(interval)
    sound.stop()
})
reset.addEventListener('click', () => {
    blockTime.innerHTML = ''
    input.value = ''
    clearInterval(interval)
    sound.stop()
})

openTimer.addEventListener('click', () => {
    vieText(timer, dateCalcForm)
})
openCalc.addEventListener('click', () => {
    vieText(dateCalcForm, timer)
})

const vieText = (timer, dateCalcForm) => {
    if (timer.style.display == 'block' && dateCalcForm == 'none') {
        timer.style.display = 'none'
        dateCalcForm.style.display = 'block'
    } else {
        timer.style.display = 'block'
        dateCalcForm.style.display = 'none'
    }
}
