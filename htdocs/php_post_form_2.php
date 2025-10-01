<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP POST</title>
</head>
<body>
    <p>
        <?php
        $zmienna = $_POST['pole1'];
        echo "wartosc pola pole1 z formularza to: $zmienna";
        ?>
    </p>
</body>
</html>