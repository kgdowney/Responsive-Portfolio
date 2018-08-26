

$('#start').on('click', function () {
    game.start();
})
$(document).on('click', '#end', function() {
    game.done();
})
var questions = [{
    question: "What year did Beverly Hills Cop get released?",
    answers: ["1982", "1989", "1984", "1986"],
    correctAnswer: "1984"
}, {
    question: "How many Friday the 13th movies are there?",
    answers: ["11", "9", "10", "8"],
    correctAnswer: "11"
}, {
    question: "Who is the main character in Little Shop of Horrors?",
    answers: ["Rick Moranis", "Ellen Greene", "Vincent Gardenia", "Steve Martin", "All of the above"],
    correctAnswer: "All of the above"
}, {
    question: "Did Back to the Future part 2 come out in the 80's?",
    answers: ["Yes", "No"],
    correctAnswer: "Yes"
}, {
    question: "Is The Outsiders based on a book?",
    answers: ["Yes", "No"],
    correctAnswer: "Yes"
}, {
    question: "Who directed The Karate Kid?",
    answers: ["John G. Avildsen", "Steven Speilberg", "John Carpenter"],
    correctAnswer: "John G. Avildsen"
}, {
    question: "Who voices Gizmo in Gremlins?",
    answers: ["Howie Mandel", "No one, it's computer made", "Christopher Lloyd"],
    correctAnswer: "Howie Mandel"
}, {
    question: "Arsenio Hall is in Coming to America",
    answers: ["True", "False"],
    correctAnswer: "True"
}];


var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend('<h2> Time Remaining: <span id="counter">20</span></h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<br></br><br><h2>' + questions[i].question + '</h2></br>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#subwrapper').append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $('#subwrapper').append('<br><button id="end">DONE</button></br>');
    },
    done: function () {
        $.each($('input[name=question-0]:checked'), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name=question-1]:checked'), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name=question-2]:checked'), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name=question-3]:checked'), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name=question-4]:checked'), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name=question-5]:checked'), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }); $.each($('input[name=question-6]:checked'), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name=question-7]:checked'), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },
    result: function () {
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>All done!</h2>");
        $("#subwrapper").append("<h3>Correct Answers: " + this.correct + "</h3>");
        $("#subwrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $("#subwrapper").append("<h3>Unaswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3><br>");
    }

}



