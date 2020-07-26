$( document ).ready(function() {
    var timer = document.getElementById("timer");
    var startButton = document.getElementById('startButton');
    var stopButton = document.getElementById('stopButton');
    var resetButton = document.getElementById('resetButton');

    var watch = new Stopwatch(timer);

    startButton.addEventListener('click', function() {
        watch.start();
    });

    stopButton.addEventListener('click', function() {
        watch.stop();
    });

    resetButton.addEventListener('click', function() {
        watch.reset();
    });
});

