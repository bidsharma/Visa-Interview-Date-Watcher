///Created by Bid Sharma 
///Date : 2016-6-23
////////////////////////

//////////////////////////////////////////////////////////
//Login into the visa application site with a fake account
//open cosole of the browser
//copy the entire code below and paste there
/////////////////////////////////////////////////////////


function getFirstAvailable(){
	var months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

	var leftPaneDivs = document.getElementsByClassName('leftPanelText');
	var textArray = leftPaneDivs[0].innerText.split(" ");
	textArray = textArray.reverse();

	var year = parseInt(textArray[0].replace('.',''));
	var day = parseInt(textArray[1]);
	var month = months.indexOf(textArray[2]);

	return new Date(year,month,day)
}



function takeDateInput() {

	var year = parseInt(prompt("Enter year"));
	var month = parseInt(prompt("Enter month"));
	var day = parseInt(prompt("Enter day"));

	var yourVisaDate = new Date(year, month, day);

	return yourVisaDate

}

function main() {

	yourVisaDate = takeDateInput();
	var id = setInterval(compareFunction,10000);

	function compareFunction(){
		firstAvailableDate = getFirstAvailable();

		if(firstAvailableDate<yourVisaDate){
			alert("Another date is available : "+firstAvailableDate);
			clearInterval(id);

		}else{
			console.log("Watching for latest date");
		}
	}
}

main()
