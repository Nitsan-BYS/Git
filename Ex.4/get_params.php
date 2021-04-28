<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>New Item</title>
</head>
<body id="background">
    <?php 
        $organName = $_GET ["organName"];
        $amount = $_GET ["amount"];

        if($organName == "heart" && $amount == "1")
            echo "<h2> Organ: " .$organName. " has been added to the storage.</h2>";
        else
            echo "<h2 style='color:red;'> Error - Organ name must be 'Heart' and the amount must be 1 .</h2>"
    ?>
</body>
</html>