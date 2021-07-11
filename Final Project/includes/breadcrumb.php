<?php
    $path = strtok($_SERVER["REQUEST_URI"], '?');
    // echo $path;
    if($path=="/index.php" ){
        echo '<li>Home</li>';
    }
    if($path=="/reportlist.php"){
        echo '<li><a href="index.php">Home</a></li><li>Report List</li>';
    }
    if($path=="/current_report.php"){
        echo '<li><a href="index.php">Home</a></li><li><a href="reportlist.php">Report List</a></li><li>Current Report</li>';
    }
    if($path=="/shifts.php"){
        echo '<li><a href="index.php">Home</a></li><li>Shifts</li>';
    }
    if($path=="/reportform.php"){
        echo '<li><a href="index.php">Home</a></li><li><a href="reportlist.php">Report List</a></li><li>Report Form</li>';
    }
    if($path=="/edit_user.php"){
        echo '<li><a href="index.php">Home</a></li><li>Edit User</li>';
    }

 