const pwd = document.getElementById("pwd");
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");
generate.addEventListener("click" , function()
{
    let characters = "";
    for (let i = 65; i <= 90; i++) //A-Z
    {
        characters += String.fromCharCode(i);
    }
    for (let i = 97; i<=122; i++) //a-z
    {
        characters +=String.fromCharCode(i);
    }
    for (let i = 48; i<=57; i++) //0-9
        {
            characters +=String.fromCharCode(i);
        }
    let special = "!@#$%^&*"; //special characters
    characters += special;
    let length = 12; //password ko length set gareko
    let password = "";
    for (let i=0; i < length; i++)
    {
        let random = Math.floor(Math.random() * characters.length);
        password += characters[random];
    }
    

    if( /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) 
    {
        pwd.value = password;
        alert("Your password is created successfully.");
    }
    else
    {
        let missing = "";
        if (!/[A-Z]/.test(password))
        {
           missing += "uppercase letter ";
        }
        if(!/[a-z]/.test(password))
        {
           missing += "lowercase letter ";
        }
        if(!/[0-9]/.test(password))
        {
           missing += "number, ";
        }
        if(!/[^A-Za-z0-9]/.test(password))
        {
           missing += "special character ";
        }
           alert("Your password is missing:\n" + missing);
    }
});
copy.addEventListener("click", function()
{
    navigator.clipboard.writeText(pwd.value);
});
