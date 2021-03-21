//function
function getRandomNumber() {
    let rand = 0.5 + Math.random() * (3);
    return Math.round(rand);
}

function getSvg() {
    let number = getRandomNumber();
    let svg = new Image();
    svg.setAttribute('class', 'svgPic')

    if(number === 1) {
        svg.src = './img/stone.svg';
    } else if(number === 2) {
        svg.src = './img/paper.svg';
    } else if(number === 3) {
        svg.src = './img/scissors.svg';
    }
    return svg
}

function checkWhoWinner() {
    let arrOfResult = [...document.querySelectorAll('.svgPic')]
    
    let firstPlayerNumber = getNumber(arrOfResult[0].src);
    let secondPlayerNumber = getNumber(arrOfResult[1].src);

    let result;

    if(firstPlayerNumber === secondPlayerNumber) {
        result = 'draw'
    } else if(firstPlayerNumber === 1 && secondPlayerNumber === 2) {
        result = 'Winner First Player'
    } else if(firstPlayerNumber === 2 && secondPlayerNumber === 3) {
        result = 'Winner First Player'
    } else if(firstPlayerNumber === 3 && secondPlayerNumber === 1) {
        result = 'Winner First Player'
    } else {result = 'Winner Second Player'
    }
    document.querySelector('.main-body__text').innerHTML = '';
    return result
}

function getNumber(str) {
    let value;
    if(str.endsWith("stone.svg")) {
        value = 1;
    } else if(str.endsWith("scissors.svg")) {
        value = 2;
    } else if(str.endsWith("paper.svg")) {
        value = 3;
    }
    return value
}

function showButtonRetry() {
    document.querySelector('.retryBtn').style = `display: block`;
    document.querySelector('.main-body__text').style = `display: none`
}

//Event
document.querySelector('.firstPlayer-btn').onclick = () => {
    let svg = getSvg();
    document.querySelector('.firstPlayer-btn').style = `display: none`;
    document.querySelector('.main-body__item-firstPlayer').append(svg);

    if([...document.querySelectorAll('.svgPic')].length === 2) {
        document.querySelector('.main-head-text').innerHTML = checkWhoWinner()
        showButtonRetry()
    }
}

document.querySelector('.secondPlayer-btn').onclick = () => {
    let svg = getSvg();
    document.querySelector('.secondPlayer-btn').style = `display: none`;
    document.querySelector('.main-body__item-SecondPlayer').append(svg);

    if([...document.querySelectorAll('.svgPic')].length === 2) {
        document.querySelector('.main-head-text').innerHTML = checkWhoWinner()
        showButtonRetry()
    }
}

document.querySelector('.retryBtn').onclick = () => {
    document.querySelector('.main-head-text').innerHTML = '';
    [...document.querySelectorAll('.svgPic')].forEach(item => item.remove())
    document.querySelector('.retryBtn').style = `display: none`;
    document.querySelector('.main-body__text').style = `display: flex`
    document.querySelector('.main-body__text').innerText = 'who will win ???';
    document.querySelector('.firstPlayer-btn').style = `display: block`;
    document.querySelector('.secondPlayer-btn').style = `display: block`;
}