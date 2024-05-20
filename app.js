// let count =0;

// document.getElementsByClassName('decrease-button').onclick = function(){
//     count -= 1;
//     document.getElementsByClassName('count').innerHTML = count;
// }
// document.getElementsByClassName('reset-button').onclick = function(){
//     count = 0;
//     document.getElementsByClassName('count').innerHTML = count;
// }
// document.getElementsByClassName('increase-button').onclick = function(){
//     count += 1;
//     document.getElementsByClassName('count').innerHTML = count;
// }



let count = 0;

function updateCounter() {
    document.getElementById('counter').textContent = count;
}

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}