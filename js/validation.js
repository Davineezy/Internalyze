function validate()
{
var name=document.getElementById('name').value;
var email=document.getElementById('email').value;
var Current_Level_of_Education=document.getElementById('Current_Level_of_Education').value;
var Prepared_Entering_The_Job_Market=document.getElementById('Prepared_Entering_The_Job_Market').value;
var aboutus=document.getElementById('aboutus').value;
if(name=="")
{
alert("name is empty");
return false;
}
if(email=="")
{
alert("email is empty");
return false;
}
if(Current_Level_of_Education=="Current_Level_of_Education")
{
alert("Current_Level_of_Education is empty");
return false;
}
if(Prepared_Entering_The_Job_Market=="Prepared_Entering_The_Job_Market")
{
alert("Prepared_Entering_The_Job_Market is empty");
return false;
}
if(aboutus=="aboutus")
{
alert("aboutus is empty");
return false;
}
return true;
}
