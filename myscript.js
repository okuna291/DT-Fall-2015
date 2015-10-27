function load() {
	var mydata = JSON.parse(data);
	console.log(mydata[0].name + mydata[0].age);
	alert(mydata[0].name);
	alert(mydata[0].age);
}