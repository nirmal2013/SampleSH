<?php include 'header.php'; ?>



<div class="container-fluid">
  <div class="row justify-content-center">

    <div class="main">

      <h3>Please Log In</h3>



      <form role="form">
        <div class="form-group">
          <label for="inputUsernameEmail">Username or email</label>
          <input type="text" class="form-control" id="inputUsernameEmail">
        </div>
        <div class="form-group">
          <a class="pull-right" href="#">Forgot password?</a>
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control" id="inputPassword">
        </div>
        <div class="checkbox pull-right">
          <label>
            <input type="checkbox">
            Remember me </label>
        </div>
        <button type="submit" class="btn btn btn-primary" id="btnLogin">
          Log In
        </button>
        <button type="submit" class="btn btn btn-secondary" id="btnSignup">
          Sign Up
        </button>
      </form>

    </div>

  </div>
</div>

<script src="https://www.gstatic.com/firebasejs/4.5.0/firebase.js"></script>
<script src="js/login.js"></script>
<?php include "footer.php"; ?>
