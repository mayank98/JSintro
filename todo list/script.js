var check=document.getElementsByName("task")
var labels=document.getElementsByTagName("label")
var i,n=check.length

function printCompletedTasks()
{
	var list=document.getElementById("name").children[0]
	list.innerHTML=""
	for(i=0;i<n;i++)
	{
		if(check[i].checked)
			list.innerHTML += "<li>"+labels[i].innerHTML+"</li>"
	}
}

function printPendingTasks()
{
	var list=document.getElementById("name").children[0]
	list.innerHTML=""
	for(i=0;i<n;i++)
	{
		if(!check[i].checked)
			list.innerHTML += "<li>"+labels[i].innerHTML+"</li>"
	}
}