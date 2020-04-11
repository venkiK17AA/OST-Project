<?php
      // DATABASE NAME 'qanda'
      //TABLE NAME 'winner'
      $servername = "localhost";
      $username = "root";
      $password = "test1234";
      $db = "os";

      // Create connection
      $conn = new mysqli($servername, $username, $password,$db);
      $winner_name = $_POST["name"];
      // Check connection
      if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
      }
      $sql = "INSERT INTO winner (name)
                  VALUES ('$winner_name')";

      if ($conn->query($sql) === TRUE) {
            echo $winner_name;
      } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
      }

      $conn->close();
?>
