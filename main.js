//code for site as well:
function sub(){
	var amount = document.getElementById("oneToo").value; 
	var lengthOf = document.getElementById("multiples").value;

	var multObj = multi(amount, lengthOf);
	document.getElementById("instruct").innerHTML = "You can copy and paste the below output and create a obj and store the value in(This creates a valid JSON object): " 
	document.getElementById("output").innerHTML = JSON.stringify(multObj);
	document.getElementById("pretty").innerHTML = "Below is the 'pretty' output(formatted):";

	//just want to remove all the paragraphs created through a previous submit:
	var div = document.getElementById("formatted");
	while (div.hasChildNodes()) {
		div.removeChild(div.lastChild);
	}


	for (elem in multObj) {
		//console.log(multObj[elem]); //Testing
		var para = document.createElement("p"); //create the paragraph element.
		var text = document.createTextNode(multObj[elem]); //This is a object (JSON is an object of objects and datatypes - may need to stringify the object)
		para.appendChild(text);

		var div = document.getElementById("formatted"); //selecting the div
		div.appendChild(para); //adding our paragraphs to the div

	}
}
//sub.onclick = multi(amount.value, lengthOf.value);
//




//need to generate multiples of a specified length and store them in a json file/object.
//Need to work on creating a json file and storing the results in. Does however create the json object.
//takes in a user specified number:
function multi(m, lengthOut) {
	var multiples = {}  //made an object
	var out = []; //the array of multiples
	for (var i = 1; i <= m; ++i) {
		multiples[i.toString()]  = null; //creating the key
		for (var k = 1; k <= lengthOut; ++k) {
			//	
			if (out.length == lengthOut) { 
				out = [];
			} 
				out.push(i*k);	
				multiples[i.toString()]  = out; 	
			//
		}
	}
	return multiples;
}

//The test:
//var out = multi(3, 12);


//You need to learn how to implement nodejs as your server side language.