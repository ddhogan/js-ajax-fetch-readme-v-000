const app = "I don't do much.";
const token = 'f363d8860c4299ef6a751789233539db24edb151';

fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
}).then(res => res.json()).then(json => console.log(json));