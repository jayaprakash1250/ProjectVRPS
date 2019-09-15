/**
 * 
 */
//create ajax object
window.addEventListener('load',function()
{
	
	alert("working");
	
	var ajaxObject=null;
	try
	{
		ajaxObject=new XMLHttpRequest();
	}
	catch(e)
	{
		try
		{
			ajaxObject=new ActivexmlObject("Msxml2.XMLHTTP3.0");
		}
		catch(e)
		{
			alert("Ajax object Support not available");
		}
	}
	//check the wheter the form is submitted or not
	document.querySelector("form").addEventListener('submit',function()
	{
		//servlet call
		ajaxObject.open("get","../",true)
		
		var referenceId=document.querySelector("#referenceId").value;
		
		ajaxObject.setRequestHeader("Content-type","application/x-www-form-urlencoded;");
		ajaxObject.send("referenceId="+referenceId);
		
		var formRef=document.querySelector("form");
		
		//use ready State Change event
		ajaxObject.onreadystatechange=function()
		{
			if((ajaxObject.readyState == 4)&&(ajaxObject.status==200))	
				{
				//console.log(ajaxObject.responseText);
				//element=document.createElement("p");
				//textNode=document.createTextNode(ajaxObject.responseText);
				//e//lement.appendChild(textNode);
				//formRef.appendChild(element);	
				document.getElementById("status").innerHTML=ajaxObject.responseText;			
			}
		}
		return false;
		
	})
	
});