<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = 'micheal';

  $con = mysqli_connect($servername, $username, $password, $dbname);

  if(!$con){
    echo "Database connection error".mysqli_connect_error();
  }
  else{
    echo "not found";
  }

?>
