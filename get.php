<?php
echo file_get_contents("boardstate".intval($_POST['id']).".json");
?>