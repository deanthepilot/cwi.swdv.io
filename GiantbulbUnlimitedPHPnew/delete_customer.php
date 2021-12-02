<!--/********************************************************************************************************************************/
/*  Date	Name	Description                                 																*/
/*  ----------------------------------------------------------------------------------------------------------------------------*/
/*                                                                  															*/
/*  2/7/2020  JNovikoff   Added require of database.php & call to getDB(); 													*/
/********************************************************************************************************************************/-->

<?php
require ('./model/database.php');
//$dsn = 'mysql:host=localhost;dbname=gusystem';
//            $username = 'root';
//            $password = 'Pa$$w0rd';

            try {
//                $db = new PDO($dsn, $username, $password);
                $db = Database::getDB();

            } catch (PDOException $e) {
                $error_message = $e->getMessage();
                //include('./database_error.php');
                echo "DB Error: " . $error_message; 
                exit();
            }
// Get IDs
$inquiryID = filter_input(INPUT_POST, 'inquiry_id', FILTER_VALIDATE_INT);
$employeeID = filter_input(INPUT_POST, 'employee_id', FILTER_VALIDATE_INT);

// Delete the product from the database
if ($inquiryID != false && $employeeID != false) {
    $query = 'DELETE FROM inquiry
              WHERE inquiryID = :inquiry_id';
    $statement = $db->prepare($query);
    $statement->bindValue(':inquiry_id', $inquiryID);
    $success = $statement->execute();
    $statement->closeCursor();    
}

// Display the Product List page
//include('gu_admin.php');
header("Location: gu_admin.php");