<?php
    $title = "Birds";
    include('lib/header.php');
    $dir = 'birds/';
    $files = scandir($dir);
    foreach($files as $file){
        if($file != '.' && $file != '..'){
            $str = '<img alt="Bird" src="' . $dir . $file . '" height="20" width="20"></img>';
            print_r($str);
        }
    }
?>
