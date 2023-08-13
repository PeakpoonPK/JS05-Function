let username = prompt('username');
let password = prompt('passworrd');


function login(username, password) {
    if (username === "admin" && password === "P@ssw0rd") { alert('unsuccessful'); }
    else { alert("OK"); }
}

login(username, password);