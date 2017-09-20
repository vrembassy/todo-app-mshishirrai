todo.itemfl= (function(){
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

return{
	method2:template,
	method3:deleteitem,
	method4:store,
	method5:chkitm
	
};

})();