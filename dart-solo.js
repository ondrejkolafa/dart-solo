document.getElementById('hitBtn').addEventListener('click', hit);
document.getElementById('missBtn').addEventListener('click', miss);


function increase_counter() {
    console.log("Counter increase");
    document.getElementById("num-arrows").innerHTML = parseInt(document.getElementById("num-arrows").innerHTML) + 1 ;
}

function hit() {
    console.log("Hit");
    playDingSound();
    let target = document.getElementById("hitBtn").innerHTML;
    console.log(target);

    if (target == "Bullseye!") {

        alert("Hotovo!");

    } else {

        if (parseInt(target) == (20)) {
            document.getElementById("hitBtn").innerHTML = "Bullseye!"
        } else {
            document.getElementById("hitBtn").innerHTML = parseInt(target) + 1 ;
        }
        increase_counter();

    }
}

function miss() {
    console.log("Miss");
    playDingSound();
    increase_counter()
}

function playDingSound() {
    let audio = document.getElementById('dingSound');
    audio.currentTime = 0;
    audio.play();
  }