<?php

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

switch ($path)
{
case '/facebook': 
  	header('Location: https://www.facebook.com/CinnamonWarBand');
	exit;

case '/twitter':
	header('Location: https://www.twitter.com/CinnamonWar');
	exit;

case '/soundcloud':
	header('Location: https://www.soundcloud.com/CinnamonWar');
	exit;

case '/youtube':
	header('Location: https://www.youtube.com/user/CinnamonWarBand');
	exit;

case '/mail':
	header('Location: mailto:info@cinnamonwar.com');
	exit;

case '/instagram':
	header('Location: https://instagram.com/cinnamonwarband/');
	exit;

case '/shadows':
	header('Location: http://goo.gl/HeLvIj');
	exit;
}

header('Location: index.php');