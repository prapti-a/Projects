let quizform = document.getElementById("quizform");
let result = document.getElementById("result");
let resetbtn = document.getElementById("resetbtn");

quizform.addEventListener("submit", function(event)
{
    event.preventDefault();

    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q1message = document.getElementById("q1message");

    if (!q1)
    {
        q1message.textContent = "Please answer Question 1.";
        return;
    }
    else if (q1.value == "1")
    {
        score++;
    }

    let q2 = document.querySelectorAll('input[name="q2"]:checked');
    let q2message = document.getElementById("q2message");

    if (q2.length === 0)
    {
        q2message.textContent = "Please answer Question 2.";
        return;
    }
    else if (q2.length === 7)
    {
        score++;
    }

    let q3 = document.getElementById("q3");
    let q3message = document.getElementById("q3message");

    if (q3.value.trim() === "")
    {
        q3message.textContent = "Please answer Question 3.";
        return;
    }
    else if (q3.value.trim().toLowerCase() === "bunny")
    {
        score++;
    }

    let q4 = document.getElementById("q4");
    let q4message = document.getElementById("q4message");

    if (q4.value === "")
    {
        q4message.textContent = "Please answer Question 4.";
        return;
    }
    else if (q4.value === "1")
    {
        score++;
    }

    let q5 = document.querySelector('input[name="q5"]:checked');
    let q5message = document.getElementById("q5message");

    if (!q5)
    {
        q5message.textContent = "Please answer Question 5.";
        return;
    }
    else if (q5.value == "1")
    {
        score++;
    }

    result.innerHTML = "Your score is " + score + " out of 5";
});


quizform.addEventListener("input", function()
{
    if (document.querySelector('input[name="q1"]:checked'))
    {
        document.getElementById("q1message").textContent = "";
    }

    if (document.querySelectorAll('input[name="q2"]:checked').length > 0)
    {
        document.getElementById("q2message").textContent = "";
    }

    if (document.getElementById("q3").value.trim() !== "")
    {
        document.getElementById("q3message").textContent = "";
    }

    if (document.getElementById("q4").value !== "")
    {
        document.getElementById("q4message").textContent = "";
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
});