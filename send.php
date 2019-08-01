<?php
    if($_POST) {
        $to = "p.ivanov@pro100agency.ru"; //куда отправлять письмо
        $from = "no-replay@mail.com"; // от кого
        $subject = $_POST['theme']; //тема
        $message = "Имя: ".$_POST['name']."\r\n";
        $message .= "Телефон: ".$_POST['phone']."\r\n";
        $message .= "Email: ".$_POST['Email'];
        $headers = "From: $from\r\nReplay-To: $from\r\nContent-type: text/plain; charset=utf-8\r\n";
        $result = mail($to, $subject, $message, $headers);

        if ($result){
            echo "Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи";
        }
    }
?>
