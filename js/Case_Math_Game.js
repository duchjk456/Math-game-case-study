let answer = '';
let timeCount = 10;
let runTime = '';
let score = 0;
class Expression {
    constructor(value) {
        this.value = value;
        this.mark = ['+', '-'];
    }

    getValue() {
        return this.value = Math.ceil(Math.random() * 100);
    }

    getMark() {
        let i = Math.floor(Math.random() * this.mark.length);
        return this.mark[i];
    }
}

function countDown() {
    if (timeCount < 0) {
        stopTime();
        if (window.confirm('Time out! You lose!' + " Your score is : " + score + '. Do you want play again?')) {
            window.location.reload();
        }
    }
    document.getElementById('time').innerHTML = timeCount;
    timeCount--;
}

function stopTime() {
    clearInterval(runTime);
}

function get() {            //Nút click Play
    timeCount = 10;
    let num = new Expression();
    let mark = new Expression();
    let a = num.getValue();
    let b = mark.getMark();
    let c = num.getValue();
    document.getElementById('num1').innerHTML = `${a}`;
    document.getElementById('mark1').innerHTML = `${b}`;
    document.getElementById('num2').innerHTML = `${c}`;
    document.getElementById('mark2').innerHTML = '=';
    document.getElementById('ket_qua').innerHTML = '?';
    runTime = setInterval(countDown, 1000)
    document.getElementById('playBtn').style.display="none";

    return answer = eval(a + b + c);
}

function checkAnswer() { //Nút check kết quả
    if(score==0 && document.getElementById('result').value==score){
        alert('Please! Click Play button to start game! ');
        window.location.reload();
    }
    else if (document.getElementById('result').value == answer ) {
        score++;
        document.getElementById('answer').innerHTML = score + '';
        stopTime();
        get();
        document.getElementById('result').value = '';

    } else {
        alert('You are not my boss! ')
        window.location.reload();
    }
    if (score >2) {
        alert('You are my boss! We have a gift for you! Click "?" to take it!');
        document.getElementById('finish').innerHTML=`<a href="gift.html">?</a>`
    }
}
