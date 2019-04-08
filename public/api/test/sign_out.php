<?php
session_start();

// unset($_SESSION['user']); // this will unset the session & then destroy, but it is REDUNDANT!

session_destroy();

print(json_encode(['success' => true]));

?>