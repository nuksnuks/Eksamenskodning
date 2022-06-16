//af David Wogelius

localStorage.setItem('name', 'admin');
localStorage.setItem('lastname', 'admin');
localStorage.setItem('username', 'admin');
localStorage.setItem('password', 'admin');
localStorage.setItem('email', 'admin');

opretbruger = document.getElementById('opretbruger-knap');

function display1(){
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('opret-bruger-container').style.display = 'flex';
}

opretbruger.addEventListener('click', display1);
