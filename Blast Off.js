//Countdown Timer for Blast Off 10-1 seconds. 
function startCountdown() {
    var count = 10;

    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;
    //Sets a timer to run 
    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        //Decreases count by one
        count = count - 1;
        //Waits  1 second before displaying results
    }, 1000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  2 seconds before displaying results
    }, 2000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  3 seconds before displaying results
    }, 3000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  4 seconds before displaying results
    }, 4000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  5 seconds before displaying results
    }, 5000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  6 seconds before displaying results
    }, 6000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  7 seconds before displaying results
    }, 7000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  8 seconds before displaying results
    }, 8000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  9 seconds before displaying results
    }, 9000);

    setTimeout(function () {
        //after 1 sec, will print "BLAST OFF!!!"
        document.getElementById("countdownTimer").innerHTML = "BLAST OFF!!! ";
        //Waits  10 seconds before displaying results
    }, 10000);
}