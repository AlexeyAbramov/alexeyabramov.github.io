<?php
    $title = "Обращение с сайта";
    $inbox = "abramov.alexey.93@ya.ru";
    // получаем данные формы
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // функция-преобразование
    $email = htmlspecialchars($email);
    $message = htmlspecialchars($message);

    $email = urldecode($email);
    $message = urldecode($message);

    $email = trim($email);
    $message = trim($message);

    $text = "От ".$email." пришло сообщение ".$message."";
    mail($inbox, $title , $text, "Content-type:text/plain");
    echo $inbox;
    echo "<br>";
    echo $title;
    echo "<br>";
    echo $text;
    echo "<br>";
?>