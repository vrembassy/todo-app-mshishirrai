;(function(){
//creating object to store the item	
var items = {}	
	

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


function insertdisplay(item2){		
	var item1=document.getElementById("items");
	item1.value=null;
	
	var ul=document.getElementById("disp");
	var div=document.createElement('DIV');
	div.id=item2+"div";
	var count = ul.childNodes.length;
	
	var chkid="checkbox"+ count;
	var stat = "unchecked";
	var tditm=template(item2);
	
	div.innerHTML=tditm.join('');
	ul.appendChild(div);
	var insertedItems = {id : chkid, name : item2, state : stat};
	
     store(insertedItems);	
}
	

function template(item2)
{  
    var ul=document.getElementById("disp");
    var count = ul.childNodes.length;
    var chkid="checkbox"+count;// checkbox id
	var elm = [];
    var index =0;
	elm[index++] = "<li class='horline' id="+item2+"li>";
	elm[index++] = "<input type = 'checkbox' id = '"+chkid+"'/>";
	elm[index++] = "<span>"+item2+"</span>";
	elm[index++] = "<a href='#' id="+item2+"delete"+" class='deletestyle'>Delete</a>";
	elm[index++] = "</li>";
	return elm;
}
//deleteing item
function deleteitem(id)
{
	var litem=document.getElementById(id);
	litem.parentNode.parentNode.removeChild(litem.parentNode);	
}


function store(insertedItems)
{
	iditm = insertedItems.id;
	items[iditm] = insertedItems;
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
