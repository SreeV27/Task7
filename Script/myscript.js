$(document).ready(function () {

   var passwordError = $('#passwordError');

   // Regular expression to enforce the password format
   var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


   var emailError = $('#emailError');

   // Regular expression to enforce the email format
   var emailRegex = /[a-z0-9._]+@[a-z]+\.[a-z]{2,4}$/;


   var phnoError = $('#phnoError');
   var phnoRegex = /^\d{10}$/;

   $('#password').on('input', function () {


      var password = $(this).val();
      if (!passwordRegex.test(password)) {
         passwordError.text("Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long.");
      } else {
         passwordError.text(""); // Clear any previous error message
      }
   });


   $('#email').on('input', function () {
      var email = $(this).val();


      if (!emailRegex.test(email)) {
         emailError.text("Please enter a valid email address.");
      } else {
         emailError.text(""); // Clear any previous error message
      }
   });
   $('#phnumber').on('input', function () {
      var phnumber = $(this).val();


      if (!phnoRegex.test(phnumber)) {
         phnoError.text("Please enter a valid Phone number.");
      } else {
         phnoError.text(""); // Clear any previous error message
      }
   });

   $('#cPassword').on('input', function () {
      var password = $('#password').val();
      var cpassword = $(this).val();
      var cPasswordError = $('#cPasswordError');


      if (cpassword !== password) {
         cPasswordError.text("Password doesn't macth");
      } else {
         cPasswordError.text(""); // Clear any previous error message
      }
   });


   $('#button').click(function () {


      var flag = 0;
      var password = $('#password').val();
      var cpassword = $('#cPassword').val();
      var email = $('#email').val();
      var cPasswordError = $('#cPasswordError');
      var firstName = $('#fname').val();
      var address = $('#address').val();
      var firstNameError = $('#firstName');
      var addressError = $('#addressError ');

      if (!passwordRegex.test(password)) {
         passwordError.text("Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long.");
         flag = 1;

      } else {
         passwordError.text(""); // Clear any previous error message
      }


      if (!emailRegex.test(email)) {
         emailError.text("Please enter a valid email address.");
         flag = 1;
      } else {
         emailError.text(""); // Clear any previous error message
      }

      var phnumber = $('#phnumber').val();


      if (!phnoRegex.test(phnumber)) {
         phnoError.text("Please enter a valid phone number.");
         flag = 1;

      } else {
         phnoError.text(""); // Clear any previous error message
      }


      if (cpassword !== password) {
         cPasswordError.text("Password doesn't match");
         flag = 1;

      } else {
         cPasswordError.text(""); // Clear any previous error message
      }


      if (firstName == "") {
         firstNameError.text("First name cannot be null");
         flag = 1;


      } else {
         firstNameError.text("");

      }

      if (address == "") {
         addressError.text("Address cannot be null");
         flag = 1;


      } else {
         addressError.text("");

      }


      if (flag == 0) {

         alert('Form submitted Successfully');
         $('input').val('');
         $('textarea').val('');
      }

   });


});