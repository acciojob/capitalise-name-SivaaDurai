//your JS code here. If required.
let name=document.getElementById("fname");
name.addEventListener("blur",function () {
	console.log(name.value.toUppeCase());
})
