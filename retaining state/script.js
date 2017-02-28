var boxes=document.getElementsByName("box")
var i,n=boxes.length

for(i=0;i<n;i++)
	boxes[i].checked=(localStorage[i]=="true")

function checkAll()
{
	for(i=0;i<n;i++)
		boxes[i].checked=true
}

function saveChoices()
{
	for(i=0;i<n;i++)
		localStorage[i]=boxes[i].checked
}

function delChoices()
{
	for(i=0;i<n;i++)
	{
		localStorage[i]=false
		boxes[i].checked=false
	}
}