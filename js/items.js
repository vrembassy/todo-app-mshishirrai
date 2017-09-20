todo.itemsfl= (function(){
function insertdisplay(item2){		
	var item1=document.getElementById("items");
	item1.value=null;
	
	var ul=document.getElementById("disp");
	var div=document.createElement('DIV');
	div.id=item2+"div";
	var count = ul.childNodes.length;
	
	var chkid="checkbox"+ count;
	var stat = "unchecked";
	var tditm=todo.itemfl.method2(item2);
	
	div.innerHTML=tditm.join('');
	ul.appendChild(div);
	var insertedItems = {id : chkid, name : item2, state : stat};
	
     todo.itemfl.method4(insertedItems);	
}

return{
method1:insertdisplay
};
})();