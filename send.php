<?php
if ($_POST) {
    date_default_timezone_set('Europe/Ulyanovsk');
    $to = [
        "sales@pro100agency.ru",
        "a.bolshakov@pro100agency.ru",
        "y.kravcov@pro100agency.ru",
        "n.bogoutdinov@pro100agency.ru",
        "shimansky@bk.ru",
    ]; //куда отправлять письмо
    $from = "no-reply@pro100agency.ru"; // от кого
    $subject = "Новая заявка на аудит сайта"; //тема


    $message = "Имя: " . filter_var($_POST['name'] ?? '', FILTER_SANITIZE_STRING) . "\r\n";
    $message .= "Дата и время поступления заявки: " . date(DATE_RSS) . "\r\n";
    $message .= "Телефон: " . filter_var($_POST['phone'] ?? '', FILTER_SANITIZE_STRING) . "\r\n";
    $message .= "Сайт: " . filter_var($_POST['site'] ?? '', FILTER_SANITIZE_STRING) . "\r\n";
    $message .= "Email: " . filter_var($_POST['email'] ?? '', FILTER_SANITIZE_STRING) . "\r\n";
    $headers = "From: $from\r\nReply-To: $from\r\nContent-type: text/plain; charset=utf-8\r\n";

    $result = mail(implode(', ', $to), $subject, $message, $headers);

    file_put_contents(
        __DIR__ . DIRECTORY_SEPARATOR . 'leads.txt',
        $message . PHP_EOL . PHP_EOL,
        FILE_APPEND | LOCK_EX
    );

    if ($result) {
        echo "Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи";
    }
}
?>
