//Af David Wogelius

opretknap = document.getElementById("opretknap");
login = document.getElementById("login-knap");


function gemData(){
  fornavn = document.getElementById("fornavn").value;
  efternavn = document.getElementById("efternavn").value;
  brugernavn = document.getElementById("brugernavn").value;
  kode = document.getElementById("kode").value;
  email = document.getElementById("email").value;

  localStorage.setItem('name', fornavn);
  localStorage.setItem('lastname', efternavn);
  localStorage.setItem('username', brugernavn);
  localStorage.setItem('password', kode);
  localStorage.setItem('email', email);

  document.getElementById('login-container').style.display = 'flex';
  document.getElementById('opret-bruger-container').style.display = 'none';

  let data =[
    ['Netflix', 99, localStorage.getItem('name')],
    ['disney+', 49, 'Tobias'],
    ['Slack', 499, 'Elisabeth'],
    ['Google', 499, 'Henriette']
  ];

  console.table(data);
}

function validateLogin(){
  if(
    document.getElementById('user-login').value == localStorage.getItem('username')
    && document.getElementById('user-code').value == localStorage.getItem('password')) {
    window.location = "../index.html";
  }
  else{
    alert("forkert brugernavn eller adgangskode")
  }
}

opretknap.addEventListener("click", gemData);

login.addEventListener("click", validateLogin)
