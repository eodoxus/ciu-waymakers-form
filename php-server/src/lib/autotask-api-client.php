<?php
// Expects the following to be defined in settings.php. Their values can be
// retreived from MyGlue as Username, Password and Tracking Identifier:
// - AUTOTASK_API_ENDPOINT: The URL to Autotask REST API server
// - AUTOTASK_API_INTEGRATION_CODE: Tracking Identifier
// - AUTOTASK_API_SECRET: Password
// - AUTOTASK_API_USERNAME: Username
include_once('config/load.php');

class AutotaskApiClient
{
  private static $endpoint = AUTOTASK_API_ENDPOINT;
  private static $integration_code = AUTOTASK_API_INTEGRATION_CODE;
  private static $secret = AUTOTASK_API_SECRET;
  private static $username = AUTOTASK_API_USERNAME;

  private $ch;

  public function __construct()
  {
    $this->ch = curl_init();
    curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, 1);
  }

  public function __destruct()
  {
    curl_close($this->ch);
  }

  public function create_ticket($ticket_attrs)
  {
    $this->post('/Tickets', $ticket_attrs);
  }

  public function post($url, $json_data)
  {
    curl_setopt($this->ch, CURLOPT_POST, 1);
    $this->request($url, $json_data);
  }

  private function request($url, $data)
  {
    curl_setopt($this->ch, CURLOPT_URL, self::$endpoint . $url);
    curl_setopt($this->ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($this->ch, CURLOPT_HTTPHEADER, [
      'Content-Type: application/json',
      'ApiIntegrationCode: ' . self::$integration_code,
      'Secret: ' . self::$secret,
      'UserName: ' . self::$username,
    ]);

    $response = curl_exec($this->ch);
    $status_code = curl_getinfo($this->ch, CURLINFO_HTTP_CODE);
    if ($status_code >= 300) {
      $error = curl_error($this->ch);
      throw new Exception($error || $response, $status_code);
    }

    return $response;
  }
}
