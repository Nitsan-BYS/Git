<?php
    $path = strtok($_SERVER["REQUEST_URI"], '?');
?>



<nav>
    <ul>
        <li id="<?php if ($path == '/index.php' || $path == '/') echo "selected2"; ?>">
            <a href="index.php"><img src='images/homelight.png'>
                <p>Home</p>
            </a>
        </li>
        <li id="<?php if ($path == '/reportlist.php' || $path == '/reportform.php' || $path == '/current_report.php') echo "selected2"; ?>">
            <a href="reportlist.php">
                <img src='images/d.png'>
                <p>Reports List</p>
            </a></li>
        <li><a href="#"><img src='images/blacklistlight.png'>
                <p>Black List</p>
            </a></li>
        <li><a href="shifts.php"><img src='images/shifts.png'>
                <p>Shifts</p>
            </a></li>
    </ul>
</nav>