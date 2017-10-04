(function() {

  // Initializing firebase
    var config = {
        apiKey: "AIzaSyBTQH3-SoFZONQc59ePx56TiFTYA9d6vTM",
        authDomain: "samplesh-b3659.firebaseapp.com",
        databaseURL: "https://samplesh-b3659.firebaseio.com",
        projectId: "samplesh-b3659",
        storageBucket: "samplesh-b3659.appspot.com",
        messagingSenderId: "976914319411"
      };
      firebase.initializeApp(config);

  // Get elements
  const inputUsernameEmail = document.getElementById('inputUsernameEmail');
  const inputPassword = document.getElementById('inputPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');

  // Add login event
  btnLogin.addEventListener('click', e => {
    // Get email and pass
    const email = inputUsernameEmail.value;
    const pass = inputPassword.value;
    const auth = firebase.auth();
    // Sign In
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  //Add signup event
  btnSignup.addEventListener('click', e => {
    // Get email and pass
    const email = inputUsernameEmail.value;
    const pass = inputPassword.value;
    const auth = firebase.auth();
    // Sign In
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
}());
