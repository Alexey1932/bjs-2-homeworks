function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;
	if (discriminant === 0) {
		let discriminantSquare = -b / (2 * a);
		arr.push(discriminantSquare);
	}
	else if (discriminant > 0) {
		let discriminantSquare1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let discriminantSquare2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(discriminantSquare1, discriminantSquare2);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
