function increase_counter() {
    console.log("Counter increase");
    document.getElementById("num-arrows").innerHTML = parseInt(document.getElementById("num-arrows").innerHTML) + 1 ;
}

function hit() {
    console.log("Hit");
    let target = document.getElementById("hit").innerHTML;
    console.log(target);

    if (target == "Bullseye!") {

        alert("User does not want to continue!\n" + window.location.href);

    } else {

        if (parseInt(target) == (20)) {
            document.getElementById("hit").innerHTML = "Bullseye!"
        } else {
            document.getElementById("hit").innerHTML = parseInt(target) + 1 ;
        }
        increase_counter();

    }
}

function miss() {
    console.log("Miss");
    increase_counter()
}