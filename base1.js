



async function getdata() {

    const a = await fetch('http://localhost:8000/myapp/tweet/')
    const b = await a.json()
    // console.log(b)
    // b=[
    //     { "id": 1, "User": "<html><body><p>HR</p></body></html>", "Tweets": "<html><body><p>Human Resource</p></body></html>" },
    //     { "id": 2, "User": "<html><body><p>HR</p></body></html>", "Tweets": "<html><body><p>Human Resource</p></body></html>" },
    //     { "id": 3, "User": "<html><body><p>HR</p></body></html>", "Tweets": "<html><body><p>Human Resource</p></body></html>" }
    // ]

    // const c = JSON.stringify(b)

    d = ""
    for (let i = 0; i < b.length; i++) {
        d += ` THE NAME IS : ${b[i].User}  THE TWEET IS : ${b[i].Tweets}<br><br>`
    }

    document.getElementById("data").innerHTML = d

}



function adddb() {
    const payload = {
        User: document.getElementById("user").value,
        Tweets: document.getElementById("tweet").value,
    };

    const apiurl = "http://localhost:8000/myapp/tweet/";

    fetch(apiurl, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(payload)
    });
}



function register() {
    const payloadd = {
        Username: document.getElementById('uname').value,
        Email: document.getElementById("email").value,
        Password: document.getElementById('password').value,
    };

    const apiurll = "http://127.0.0.1:8000/myapp/register/";

    fetch(apiurll, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(payloadd)
    });
}

function check() {
    var username = document.getElementById('uname').value
    var password = document.getElementById('password').value
    var conpass = document.getElementById('conpass').value

    if (password.length > 8) {
        if (password === conpass) {
            alert(`"Account created successfully", ${username}`)
        }
        else {
            alert("the password and the confirm password must be same")
        }
    }
    else {
        alert("The password must be atleast 8 char long")
    }
}


async function login() {
    const a = await fetch("http://127.0.0.1:8000/myapp/register/")
    const b = await a.json()

    var username = document.getElementById('luname').value
    var password = document.getElementById('lpassword').value

    console.log(b.Username)
    console.log(b.Password)
    console.log(username)
    console.log(password)


    for (const data of b) {
        if ((username == data.Username) && (password == data.Password)) {
            alert(`Login Successfull ${username}`)
        } else {
            alert(`Invalid Username or Password, Kindly try again`)
        }
    }
}