function toFixedCeil(val){
	return (Math.ceil(parseFloat(val) * 100) / 100).toFixed(2);
}

function toFixedFloor(val){
	return (Math.floor(parseFloat(val) * 100) / 100).toFixed(2);
}

function toFixedCalculate(valArr, notation){
	var size = {'+': 100,'-': 100,'*': 10000,'/': 1}
	var num = valArr[0];

	for(var i = 1; i < valArr.length; i++){
		num = (eval((num * 100) + notation + (valArr[i] * 100)) / size[notation]).toFixed(2);
	}

	return num;
}