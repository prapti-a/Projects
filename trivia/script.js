let quizform = document.getElementById("quizform");
let result = document.getElementById("result");
let resetbtn = document.getElementById("resetbtn");

let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");
let question4 = document.getElementById("question4");
let question5 = document.getElementById("question5");


quizform.addEventListener("submit", function(event)
{
    event.preventDefault();

    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q1message = document.getElementById("q1message");

    if (!q1)
    {
        q1message.textContent = "Please select an answer for Question 1.";

        window.scrollTo({
            top: question1.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth"
        });

        return;
    }
    else if (q1.value == "1")
    {
        score++;
        question1.classList.add("correct");
        q1message.textContent = "✓ Correct!";
    }
    else
    {
        question1.classList.add("incorrect");
        q1message.textContent = "✗ Incorrect! Correct answer: Deepika Padukone";
    }

    document.querySelectorAll('input[name="q1"]').forEach(function(input)
    {
        input.disabled = true;
    });


    let q2 = document.querySelectorAll('input[name="q2"]:checked');
    let q2message = document.getElementById("q2message");

    if (q2.length === 0)
    {
        q2message.textContent = "Please select at least one answer for Question 2.";

        window.scrollTo({
            top: question2.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth"
        });

        return;
    }
    else if (q2.length === 7)
    {
        score++;
        question2.classList.add("correct");
        q2message.textContent = "✓ Correct!";
    }
    else
    {
        question2.classList.add("incorrect");
        q2message.textContent = "✗ Incorrect! All the options are correct.";
    }

    document.querySelectorAll('input[name="q2"]').forEach(function(input)
    {
        input.disabled = true;
    });


    let q3 = document.getElementById("q3");
    let q3message = document.getElementById("q3message");

    if (q3.value.trim() === "")
    {
        q3message.textContent = "Please enter an answer for Question 3.";

        window.scrollTo({
            top: question3.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth"
        });

        return;
    }
    else if (q3.value.trim().toLowerCase() === "bunny")
    {
        score++;
        question3.classList.add("correct");
        q3message.textContent = "✓ Correct!";
    }
    else
    {
        question3.classList.add("incorrect");
        q3message.textContent = "✗ Incorrect! Correct answer: Bunny";
    }

    q3.disabled = true;


    let q4 = document.getElementById("q4");
    let q4message = document.getElementById("q4message");

    if (q4.value === "")
    {
        q4message.textContent = "Please select an answer for Question 4.";

        window.scrollTo({
            top: question4.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth"
        });

        return;
    }
    else if (q4.value === "1")
    {
        score++;
        question4.classList.add("correct");
        q4message.textContent = "✓ Correct!";
    }
    else
    {
        question4.classList.add("incorrect");
        q4message.textContent = "✗ Incorrect! Correct answer: 1931";
    }

    q4.disabled = true;


    let q5 = document.querySelector('input[name="q5"]:checked');
    let q5message = document.getElementById("q5message");

    if (!q5)
    {
        q5message.textContent = "Please select an answer for Question 5.";

        window.scrollTo({
            top: question5.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth"
        });

        return;
    }
    else if (q5.value == "1")
    {
        score++;
        question5.classList.add("correct");
        q5message.textContent = "✓ Correct!";
    }
    else
    {
        question5.classList.add("incorrect");
        q5message.textContent = "✗ Incorrect! Correct answer: Hrithik Roshan";
    }

    document.querySelectorAll('input[name="q5"]').forEach(function(input)
    {
        input.disabled = true;
    });


    let percentage = (score / 5) * 100;

    let message;

    if (score === 5)
    {
        message = "You're a true Bollywood fan!";
    }
    else if (score >= 3)
    {
        message = "Great job! You know your Bollywood!";
    }
    else
    {
        message = "Not bad! Maybe it's time for a Bollywood rewatch!";
    }

    result.innerHTML = "<i>Your score is " + score + " out of 5" +
                       "<br>Percentage: " + percentage + "%" +
                       "<br>" + message + "</i>";
});


quizform.addEventListener("input", function()
{
    if (document.querySelector('input[name="q1"]:checked'))
    {
        document.getElementById("q1message").textContent = "";

        if (!document.querySelector('input[name="q2"]:checked'))
        {
            window.scrollTo({
                top: question2.getBoundingClientRect().top + window.scrollY - 100,
                behavior: "smooth"
            });
        }
    }

    if (document.querySelectorAll('input[name="q2"]:checked').length > 0)
    {
        document.getElementById("q2message").textContent = "";

        if (document.getElementById("q3").value.trim() === "")
        {
            window.scrollTo({
                top: question3.getBoundingClientRect().top + window.scrollY - 100,
                behavior: "smooth"
            });
        }
    }

    if (document.getElementById("q3").value.trim() !== "")
    {
        document.getElementById("q3message").textContent = "";

        if (document.getElementById("q4").value === "")
        {
            window.scrollTo({
                top: question4.getBoundingClientRect().top + window.scrollY - 100,
                behavior: "smooth"
            });
        }
    }

    if (document.getElementById("q4").value !== "")
    {
        document.getElementById("q4message").textContent = "";

        if (!document.querySelector('input[name="q5"]:checked'))
        {
            window.scrollTo({
                top: question5.getBoundingClientRect().top + window.scrollY - 100,
                behavior: "smooth"
            });
        }
    }

    if (document.querySelector('input[name="q5"]:checked'))
    {
        document.getElementById("q5message").textContent = "";
    }
});


resetbtn.addEventListener("click", function()
{
    quizform.reset();

    result.innerHTML = "";

    document.getElementById("q1message").textContent = "";
    document.getElementById("q2message").textContent = "";
    document.getElementById("q3message").textContent = "";
    document.getElementById("q4message").textContent = "";
    document.getElementById("q5message").textContent = "";

    question1.classList.remove("correct", "incorrect");
    question2.classList.remove("correct", "incorrect");
    question3.classList.remove("correct", "incorrect");
    question4.classList.remove("correct", "incorrect");
    question5.classList.remove("correct", "incorrect");

    document.querySelectorAll('input[name="q1"]').forEach(function(input)
    {
        input.disabled = false;
    });

    document.querySelectorAll('input[name="q2"]').forEach(function(input)
    {
        input.disabled = false;
    });

    document.getElementById("q3").disabled = false;
    document.getElementById("q4").disabled = false;

    document.querySelectorAll('input[name="q5"]').forEach(function(input)
    {
        input.disabled = false;
    });
});