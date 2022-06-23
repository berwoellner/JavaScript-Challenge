const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {

    e.preventDefault()

    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    
    document.querySelector("form").reset()
})