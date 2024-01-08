

// ========== Input Kolloh ==========


var siteNameInput = document.getElementById("siteNameInput") ;
var siteUrlInput = document.getElementById("siteUrlInput") ;

var urlAlertInput = document.getElementById ("urlAlertInput") ;

var linkInput = document.getElementById("linkInput") ;






var myWebsiteNameAlertInput = document.getElementById("myWebsiteNameAlertInput") ;

var myWebsiteUrlAlertInput = document.getElementById("myWebsiteUrlAlertInput") ;





// ========== sitesList array ==========

var sitesList = [] ;

if ( localStorage.getItem("websitesName") != null )
{

  sitesList =  JSON.parse(localStorage.getItem("websitesName"))

  displaySites () ;


}



// ====================== function to add site and to apply the invoking functions (remove , display)  ==============

function addYourSite()
{

if (checkValidateWebsiteName() == true && checkValidateWebsiteUrl() == true)

{

// ========== object  ==========

var siteNameAndUrl = {

  siteName : siteNameInput.value ,
  
  siteUrl : siteUrlInput.value 
  
  };
  
  
  // ========== push objects in array ==========
  
  sitesList.push(siteNameAndUrl) ;
  
  localStorage.setItem( "websitesName" , JSON.stringify(sitesList)  ) ;
  
  
  
  
  
  //  ========== apply remove data function  ==========
  
  removeSitesName() ;
  
  
  
  //  ========== apply display data function  ==========
  
  
  displaySites () ;

  urlAlertInput.classList.add("d-none") ;




  
  
  

}

else
{

  urlAlertInput.classList.remove("d-none") ;

}


}

// ======================= end of function addYourSite =====================================================












// ========== function to remove Sites Name  ==========



function removeSitesName()
{
siteNameInput.value = "" ;

siteUrlInput.value = "" ;


}




// ========== function to display data  ==========

function displaySites ()
{

cartona = "";

for ( var i = 0 ; i < sitesList.length  ; i ++)

{

cartona += `<tr>

<td> ${i+1} </td>

<td> ${sitesList[i].siteName} </td>

<td>  <a  id="linkInput" target="_blank"  href="https://${sitesList[i].siteUrl}/"     class="btn btn-outline-success"> <span><i class="fa-solid fa-eye pe-2"></i></span> Visit</a> </td>

<td>  <button onclick=" deleteWebSite(${i});" class="btn btn-outline-danger"> <i class="fa-solid fa-trash-can"></i> Delete</button> </td>

</tr>`;


}


document.getElementById("tableContent").innerHTML = cartona;


}








// ========== function to delete website  ==========


function deleteWebSite(index1)
{
sitesList.splice( index1 , 1) ;

localStorage.setItem( "websitesName" , JSON.stringify(sitesList)  ) ;


displaySites () ;


}









// ========== function to validate site Name ==========

function checkValidateWebsiteName ()
{


var regexWebsiteName = /^[a-zA-Z]{3,}$/ ;


if ( regexWebsiteName.test( siteNameInput.value) )
{

  siteNameInput.classList.add("is-valid") ;

  siteNameInput.classList.remove("is-invalid") ;

  myWebsiteNameAlertInput.classList.add("d-none") ;



  return true ;



}

else
{

  siteNameInput.classList.add("is-invalid") ;

  siteNameInput.classList.remove("is-valid") ;

  myWebsiteNameAlertInput.classList.remove("d-none") ;




  return false ;




}




}




// ========== function to validate site URL ==========

function checkValidateWebsiteUrl ()

{


var regexWebsiteUrl = /^(\w*\.)?\w{3,}(\.com)$/  ;



if ( regexWebsiteUrl.test( siteUrlInput.value  ) )
{

  siteUrlInput.classList.add("is-valid") ;

  siteUrlInput.classList.remove("is-invalid") ;

  myWebsiteUrlAlertInput.classList.add("d-none") ;



  return true ;



}

else
{

  siteUrlInput.classList.add("is-invalid") ;

  siteUrlInput.classList.remove("is-valid") ;

  myWebsiteUrlAlertInput.classList.remove("d-none") ;


  return false ;




}




}




// ========== function to delete Alert that contains the rules or conditions of login  ==========

 function deleteAlert ()
 {

// console.log ("hi") ;

urlAlertInput.classList.add("d-none") ;



 }








/*  

name validation
/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/ 

*/




/* 
url validation

^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$

 */