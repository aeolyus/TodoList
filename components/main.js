document.getElementById('list').innerHTML=localStorage['list']||"";
setInterval(function(){
	localStorage['list']=document.getElementById('list').innerHTML;
},100);
function newItem(){
	var item=document.getElementById('input').value;
	var ul=document.getElementById('list');
	var li=document.createElement('li');
	li.appendChild(document.createTextNode(item));
	ul.appendChild(li);
	document.getElementById('input').value="";
	ul.onclick=done;
}
document.body.onkeydown=function(e){
	if(e.keyCode==13&&document.getElementById('input').value!=""){
		newItem();
	}
}
function done(e){
	e.target.parentElement.removeChild(e.target);
}