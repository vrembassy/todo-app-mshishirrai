;(function(){
//creating object to store the item	
var items = {}	

window.items=items;	

document.addEventListener("DOMContentLoaded", function(event){
	
	var preloadedItems = ["Design","Code"];
		preloadedItems.map(function(item)
			{
				insertdisplay(item);
			});
	
	$itemtxt = document.querySelector("#items");
	$itemtxt.addEventListener("keydown" , onPress, false);
	
	document.querySelector("#disp").addEventListener("click",assignListener);

});

function onPress(event){
	var item = document.getElementById("items");
	if(event.keyCode === 13)
	{
	     
		if (item.value.length < 1 || item.value == " ")
        {
			alert("enter proper value");
        }
		else
		{  	
			insertdisplay(item.value);
			
		}
	}
}


function chkitm(id){
		
	var chk = document.getElementById(id);
	var name = chk.nextSibling;
	if(chk.checked)
	{     
	
	name.classList.add("addl");
	items[id].state = "checked";
	}
	else 
	{
		console.log('checkbox unchecked');
		name.classList.remove("addl");
		items[id].state = "unchecked";
	}
		
}



function assignListener()
{
	if (event.target.type == "checkbox")
		{
			var id = event.target.id;
			chkitm(id);	
		}
	else if(event.target.classList.contains("deletestyle"))
		{
		id = event.target.parentNode.id;
		deleteitem(id);
		}
}
})();
