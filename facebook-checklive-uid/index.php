<?php 
/**
 * Copyright 2020 HonqphucIT <honqphucit@gmail.com>
 *
 * Zalo: https://zalo.me/hongphucit
 */

require_once __DIR__ . DIRECTORY_SEPARATOR . 'src/honqphucit/Facebook.php';

if(isset($_GET['uid'])){
	$App = new Facebook($_GET['uid']);
}


?>