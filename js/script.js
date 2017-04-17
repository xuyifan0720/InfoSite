function popup(element_clicked)
{
	//var element = document.getElementById(element_clicked);
	element_clicked.getElementsByTagName("span")[0].classList.toggle("show");
}