<?php
file_put_contents("boardstate".intval($_POST['id']).".json",$_POST['state']);
?>