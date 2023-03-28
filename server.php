<?php
/**
 * @author Roman Volkov
 * v1.0
 */

$botId = ''; 
$token = ''; 
$chatId = ''; 


$json = file_get_contents('php://input');
$data = json_decode($json, true);
$message = $data['text'];

$response = sendMessage($message, $botId, $token, $chatId);
header('Content-Type: application/json');
print_r($response); 

function sendMessage($message, $botId, $token, $chatId) {
    $url = "https://api.telegram.org/bot{$botId}:{$token}/sendMessage";
    $data = [
        'chat_id' => $chatId,
        'text' => $message,
        'parse_mode' => 'Markdown'
    ];
    $options = [
        CURLOPT_URL => $url,
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POSTFIELDS => json_encode($data),
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json'
        ]
    ];
    $curl = curl_init();
    curl_setopt_array($curl, $options);
    $response = curl_exec($curl);
    curl_close($curl);
    return $response;
}