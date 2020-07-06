<?php 
include_once("dbcon.php");
$query="select id,name,email,Current_Level_of_Education,Prepared_Entering_The_Job_Market,aboutus from form";
$result=mysqli_query($conn,$query);
?>


<!DOCTYPE html>
<html>
    <head>
        <title> Fetch Data From Database </title>
    </head>
<body>
    
    <table align="center" border="1px" style="width:600px; line-height:40px;">
        <tr>
            <th  colspan="4"><h2>Student Record</h2></th>
        </tr>
        <t>
            <th> ID </th>
            <th> Name </th>
            <th> Email </th>
            <th> Current_Level_of_Education </th>
            <th>Prepared_Entering_The_Job_Market</th>
            <th>aboutus</th>
        </t>
    <?php 
        while($rows=mysqli_fetch_assoc($result))
        {
    ?>        
            <tr>
                <td><?php echo $rows['id']; ?></td>
                <td><?php echo $rows['name']; ?></td>
                <td><?php echo $rows['email']; ?></td>
                <td><?php echo $rows['Current_Level_of_Education']; ?></td>
                <td><?php echo $rows['Prepared_Entering_The_Job_Market']; ?></td>
                <td><?php echo $rows['aboutus']; ?></td>
            </tr>
    <?php     
        }
    ?>    
    </table>
    
</body>
</html>