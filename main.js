var arkhalisCount = 0;
document.addEventListener('keydown', function(event){
	if(event.keyCode == 71){
		buyGuide()
	}
	else if(event.keyCode == 69){
		buyClickUpgrade()
	}
	else if(event.keyCode == 78){
		buyNightEdge()
	}
	else if(event.keyCode == 66){
		buyBHS()
	}
	else if(event.keyCode == 72){
		buyBHSLimit()
	}
});

//Function for clicking main button 
function arkhalisClick(number){
	arkhalisCount = arkhalisCount + (number + enchantedSwords + (nightsEdges*5));
	document.getElementById("arkhalisCount").innerHTML = arkhalisCount;
};
//Function for incrementing buildings
function arkhalisIncrement(number){
	arkhalisCount = arkhalisCount + number;
	document.getElementById("arkhalisCount").innerHTML = arkhalisCount;
};

//Function for guides, increase APS by +1
var guides = 0;
function buyGuide(){
	var guideCost = Math.floor(10 * Math.pow(1.0725,guides));
	if (arkhalisCount >= guideCost){
		guides = guides + 1;
		arkhalisCount = arkhalisCount - guideCost;
		document.getElementById('guides').innerHTML = guides;
		document.getElementById('arkhalisCount').innerHTML = arkhalisCount;
	};
	var guideCost = Math.floor(10 * Math.pow(1.0725,guides));
	document.getElementById('guideCost').innerHTML = guideCost;
};
//Function for Ench. Swords, increases ACP by +1
var enchantedSwords = 0;
function buyClickUpgrade(){
	var enchantedSwordCost = Math.floor(30 * Math.pow(1.125,enchantedSwords));
	if (arkhalisCount >= enchantedSwordCost){
		enchantedSwords = enchantedSwords + 1;
		arkhalisCount = arkhalisCount - enchantedSwordCost;
		document.getElementById('enchantedSwords').innerHTML = enchantedSwords;
		document.getElementById('arkhalisCount').innerHTML = arkhalisCount;
	};
	var enchantedSwordCost = Math.floor(30 * Math.pow(1.125,enchantedSwords));
	document.getElementById('enchantedSwordCost').innerHTML = enchantedSwordCost;
};
//Function for Nights Edges, Increases APC + APS by 5
var nightsEdges = 0;
function buyNightEdge(){
	var nightsEdgeCost = Math.floor(400 * Math.pow(1.15,nightsEdges));
	if (arkhalisCount >= nightsEdgeCost){
		nightsEdges = nightsEdges + 1;
		arkhalisCount = arkhalisCount - nightsEdgeCost;
		document.getElementById('nightsEdges').innerHTML = nightsEdges;
		document.getElementById('arkhalisCount').innerHTML = arkhalisCount;
	};
	var nightsEdgeCost = Math.floor(400 * Math.pow(1.15,nightsEdges));
	document.getElementById('nightsEdgeCost').innerHTML = nightsEdgeCost;
};

var BHSTotal = 0;
var BHSLimit = 20;
var BHSLimitTotal = 0;
function buyBHS(){
	if (BHSTotal < BHSLimit){
		var BHSCost = Math.floor(1600 * Math.pow(1.125,BHSTotal));
		if (arkhalisCount >= BHSCost){
			BHSTotal = BHSTotal + 1;
			arkhalisCount = arkhalisCount - BHSCost;
			document.getElementById('BHSTotal').innerHTML = BHSTotal;
			document.getElementById('arkhalisCount').innerHTML = arkhalisCount;
		};
		var BHSCost = Math.floor(1600 * Math.pow(1.125,BHSTotal));
		document.getElementById('BHSCost').innerHTML = BHSCost;
	}
};

function buyBHSLimit(){
	var BHSLimitCost = Math.floor(16 * (1+BHSLimitTotal))
	if (nightsEdges >= BHSLimitCost){
		BHSLimit = BHSLimit + 10
		BHSLimitTotal = BHSLimitTotal + 1
		nightsEdges = nightsEdges - BHSLimitCost
		document.getElementById('nightsEdges').innerHTML = nightsEdges;
		document.getElementById('BHSLimit').innerHTML = BHSLimit;
	};
	var BHSLimitCost = Math.floor(16 * (1+BHSLimitTotal))
	document.getElementById('BHSLimitCost').innerHTML = BHSLimitCost;
	
	var nightsEdgeCost = Math.floor(400 * Math.pow(1.15,nightsEdges));
	document.getElementById('nightsEdgeCost').innerHTML = nightsEdgeCost;
};

//Game looper, loops nested code every second.
window.setInterval(function(){ 
	arkhalisIncrement(guides); //Adds APS from guides each second.
	arkhalisIncrement((nightsEdges*5) * ((100+(BHSTotal*20)) / 100));
}, 1000); 

//Updates APS and APC respectively.
window.setInterval(function(){
	var arkhalisPerSec = guides + ((nightsEdges*5) * ((100+(BHSTotal*20)) / 100));
	var arkhalisPerSec = arkhalisPerSec.toFixed(0);
	document.getElementById('arkhalisPerSec').innerHTML = arkhalisPerSec;
	
	var arkhalisPerClick = 1 + enchantedSwords + ((nightsEdges*5) * ((100+(BHSTotal*20)) / 100));
	var arkhalisPerClick = arkhalisPerClick.toFixed(0);
	document.getElementById('arkhalisPerClick').innerHTML = arkhalisPerClick;
	
	arkhalisCount = Math.round(arkhalisCount);
	document.getElementById('arkhalisCount').innerHTML = arkhalisCount;
	
}, 20);