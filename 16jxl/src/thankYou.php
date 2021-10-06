<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<meta name="description" content="Personal Portfolio">
<meta name="keywords" content="information, student, software, css, html">
<meta name="author" content="Joshua Novikoff">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Joshua Novikoff's Portfolio||Thank You</title>
<link rel="stylesheet" href="css/styles.css">
<script src="js/pf_scripts.js" defer></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono" rel="stylesheet">
</head>

<body>
    <?php
    
    $visitor_name = filter_input(INPUT_POST, 'Name');
    $visitor_email = filter_input(INPUT_POST, 'email');
    $visitor_enjoy = filter_input(INPUT_POST, 'enjoy');
    $visitor_rate = filter_input(INPUT_POST, 'rating');
    $visitor_msg = filter_input(INPUT_POST, 'comment');
    /* echo "Fields: " . $visitor_name . $visitor_email . $visitor_msg;  */
    
    // Validate inputs
    if ($visitor_name == null || $visitor_email == null || $visitor_enjoy == null ||
        $visitor_rate == null || $visitor_msg == null) {
        $error = "Invalid input data. Check all fields and try again.";
        /* include('error.php'); */
        echo "Form Data Error: " . $error; 
        exit();
        } else {
            $dsn = 'mysql:host=localhost;dbname=personalPortfolio';
            $username = 'root';
            $password = 'Pa$$w0rd';

            try {
                $db = new PDO($dsn, $username, $password);

            } catch (PDOException $e) {
                $error_message = $e->getMessage();
                /* include('database_error.php'); */
                echo "DB Error: " . $error_message; 
                exit();
            }

            // Add the product to the database  
            $query = 'INSERT INTO visitor
                         (visitor_name, visitor_email, visitor_enjoy, visitor_rate, visitor_msg)
                      VALUES
                         (:visitor_name, :visitor_email, :visitor_enjoy, :visitor_rate, :visitor_msg)';
            $statement = $db->prepare($query);
            $statement->bindValue(':visitor_name', $visitor_name);
            $statement->bindValue(':visitor_email', $visitor_email);
            $statement->bindValue(':visitor_enjoy', $visitor_enjoy);
            $statement->bindValue(':visitor_rate', $visitor_rate);
            $statement->bindValue(':visitor_msg', $visitor_msg);
            $statement->execute();
            $statement->closeCursor();
            /* echo "Fields: " . $visitor_name . $visitor_email . $visitor_msg; */
}
?>
<nav>
<a href="index.html"><img src="images/logo.png" alt="logo with theme colors and JN printed"></a>
<div id="timeDate"></div>
<ul>
	<li><a href="index.html">Home</a></li>
	<li><a href="about.html">About</a></li>
	<li><a href="experience.html">Experience</a></li>
	<li><a href="contact.html">Contact</a></li>
</ul>
</nav>
<main>
    <h2>Thank you, <?php echo $visitor_name; ?>, for contacting me! I will get back to you shortly.</h2>
</main>

<footer>
<br>
<a href="https://github.com/deanthepilot" target="_blank"><img src="images/iconmonstr-github-1-64.png" alt="cat logo representing github"></a>
<a href="https://www.linkedin.com/in/joshuanovikoff" target="_blank"><img src="images/iconmonstr-linkedin-3-64.png" alt="letters i and n representing linkedin"></a>
</footer>

</body>
</html>