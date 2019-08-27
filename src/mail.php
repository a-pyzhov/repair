<?php
$data = $_POST;
$name = json_encode($data['username'],JSON_UNESCAPED_UNICODE);
$name = str_replace('"', '', $name);
echo $name;