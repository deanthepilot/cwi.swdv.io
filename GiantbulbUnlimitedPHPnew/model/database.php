<!--/********************************************************************************************************************************/
/*  Date	Name	Description                                 																*/
/*  ----------------------------------------------------------------------------------------------------------------------------*/
/*                                                                  															*/
/*  2/7/2020  JNovikoff   Initial Deployment 													*/
/********************************************************************************************************************************/-->
<?php
class Database {
    function OpenConnection()
    {
        $serverName = "tcp:sqldev01.cndzqfrigosm.us-west-2.rds.amazonaws.com,1433";
        $connectionOptions = array("Database"=>"gusystem",
           "Uid"=>"admin", "PWD"=>"MSPress#1");
        $conn = sqlsrv_connect($serverName, $connectionOptions);
        if($conn == false)
            die(FormatErrors(sqlsrv_errors()));

        return $conn;
    }

    private function __construct() {}

    public static function getDB () {
        if (!isset(self::$db)) {
            try {
                self::$db = new PDO(self::$serverName,
                                     self::$connectionOptions);
            } catch (PDOException $e) {
                $error_message = $e->getMessage();
                //return $error_message;
                include('./database_error.php');
                exit();
            }
        }
        return self::$db;
    }
}
?>

