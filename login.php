<?php
   ob_start();
   session_start();
?>

<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Login</title>
  <meta name="description" content="impossible octopus fitness">
  <meta name="Kris and Rona" content="impossible octopus fitness">
  <meta name="keywords" content="impossible octopus fitness, impossible, octopus, fitness, holberton, kris, bredemeier, rona, chong">
  <meta name="robots" content="index, follow">

  <link rel="STYLESHEET" type="text/css" href="style/fg_membersite2.css" />
  <link rel="stylesheet" type="text/css" href="style.css">
  <script type='text/javascript' src='scripts/gen_validatorv31.js'></script>

  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>

<body>
	<div id="container">
	<header>



		<img id="logo" width="100px" src="http://www.procliparts.com/cliparts/pele/ekiE9gTAo-orange-bird.png" alt="log">
		<h1>Warbler</h1>
		<p id="tag_line">Home of impossible octopus fitness.</p>

		<ul id="menu">
			<li><a href="index.html">Home</a></li>
			<li><a href="twitter_profile.html">My Statuses</a></li>
			<li><a href="twitter_list.html">All Users</a></li>
		</ul>
</header>

  <h2>Login</h2>


    <div>

       <form role = "form"
          action = "index.php" method = "post">

          <input type = "text"
             name = "username" placeholder = "username"
             required autofocus></br>
          <input type = "password"
             name = "password" placeholder = "password" required>
          <button type = "submit"
             name = "login">submit</button>
       </form>

    </div>
	</section>
  </html>
