<?php
if ($_POST) {
    date_default_timezone_set('Europe/Ulyanovsk');
    $to = [
        "p.ivanov@pro100agency.ru",
    ]; //куда отправлять письмо
    $from = "no-reply@noreply.ru"; // от кого
    $subject = "Новая заявка на аудит сайта"; //тема


    $message = "Имя: " . filter_var($_POST['name'] ?? '', FILTER_SANITIZE_STRING) . "\r\n";
    $message .= "Дата и время поступления заявки: " . date(DATE_RSS) . "\r\n";
    $message .= "Телефон: " . filter_var($_POST['phone'] ?? '', FILTER_SANITIZE_STRING) . "\r\n";
    $message .= "Email: " . filter_var($_POST['email'] ?? '', FILTER_SANITIZE_STRING) . "\r\n";
    $headers = "From: $from\r\nReply-To: $from\r\nContent-type: text/plain; charset=utf-8\r\n";

    $result = mail(implode(', ', $to), $subject, $message, $headers);

    if ($result) {
        echo $message;
    }
}
?>
