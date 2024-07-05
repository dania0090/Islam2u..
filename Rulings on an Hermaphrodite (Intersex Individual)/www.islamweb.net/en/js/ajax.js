 $(document).ready(function(){
    
 $('#btnVisitor').on('click', function() {
     
var username=$("#username").val().trim();
var email=$("#email").val().trim();
var request=$("#request").val().trim();
var code=$("#hidden_vercode").val().trim();

if(username && email && request && code)
{
parameter={username:username,sid:Math.random(),email:email,request:request,hidden_vercode:code};
ajaxrequests.prepareAjax('guestform.php?refresh=1','POST',parameter,'').done(function(response){

                           //console.log(response);
                           if(response.indexOf('~') !== -1)
                            {
                            var arr=response.split("~");  
                            alert(arr[2]);    
                            }
                            else
                           $("#guestform").html(response);//for responsive there is two div 

                });
}
else
alert("Please fill the form");                
     
});




         
/*$(".icoink").click(function() { 
    $('html, body').animate({ scrollTop: $("#jquery_jplayer_2").offset().top-70 }, 1000); 
    });     
*/
 
});
    
 
 var ajaxrequests={

        

            prepareAjax     : function(page,method,parameter,beforesendContext)
            {   //befroesendContext - loader image div id during request

              

                return $.ajax({

                    url : page,

                    type : method,
                     beforeSend: function(jqXHR, settings) {
                        jqXHR.setRequestHeader('X-Requested-With', 'islamweb-ajax');
                    },    

                    data : parameter

                    

                });

            }
};
    

               
function istiList(ID,div)
{
	document.getElementById(div).innerHTML = '<br><p align="center"><img alt="" src="../images/loading.gif" width="48" height="48" /><p dir="rtl" align="center"><b>Ã«—Ì «· Õ„Ì· ...</b>';
	ajaxopen2(div, 'istiList.php','pid=' + ID);
}  

/*For voting*/
function VoteShow()
{

//alert(document.getElementsByName("select").value);
var selVal="";
for (var i=0; i < document.getElementsByName('select').length; i++)
          {
             if (document.getElementsByName('select')[i].checked) 
			 {
				 selVal=document.getElementsByName('select')[i].value; 
			 }
          }


if(selVal=="")
{
alert("Chose your answer");
return false;
}
else
{
$(".voteoptions").each(function(){//both hidden fro mobile and visible for desktop
  $(this).html("<table align='center'><tr><td height='200px' valign='middle' style='font-size:12px; color:#990000'><img src='../images/loading_vote.gif'>Result Loading...</td></tr></table>");  
});
var vid=document.getElementById("vid").value;
parameter={vid:vid,sid:Math.random(),select:selVal,lang:'E'};
ajaxrequests.prepareAjax('/ajax/votenew.php','POST',parameter,'').done(function(response){
                         $('.voteoptions').each(function(){
                           $(this).html(response);//for responsive there is two div 
                        });
                });

}

} 


/*-----------Start----------*/
function ShowResult()
{
$(".voteoptions").each(function(){//both hidden fro mobile and visible for desktop
  $(this).html("<table align='center'><tr><td height='200px' valign='middle' style='font-size:12px; color:#990000'><img src='../images/loading_vote.gif'>Result Loading...</td></tr></table>");  
});

var vid=document.getElementById("vid").value;
parameter={vid:vid,sid:Math.random(),showresult:1,lang:'E'};

ajaxrequests.prepareAjax('/ajax/votenew.php','POST',parameter,'').done(function(response){
                        
                        $('.voteoptions').each(function(){
                           $(this).html(response);//for responsive there is two div 
                        });
                        
                });
}


function InsertFatwa()
{

document.getElementById("LeafArticle_Page").innerHTML="<table align='center'><tr><td height='200px' valign='middle' style='font-size:12px; color:#990000'><img src='Javascript/loading.gif'>Processing..</td></tr></table>";


ajaxrequests.prepareAjax('insert_new_fatwa','POST','','');

}

