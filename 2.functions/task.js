function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let avg = Number((arr.reduce((a, b) => a + b) / arr.length).toFixed(2));
	return { min: min, max: max, avg: avg };
 }
 

function summElementsWorker(...arr) {
	if (arr.length === 0){
		return 0
	}
	let sum = arr.reduce((a, b) => a + b, 0)
	return sum
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0){
		return 0
	}
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let difference = max - min;
	return difference
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0){
		return 0
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i=0; i<arr.length; i++){
		if (arr[i] % 2 === 0){
			sumEvenElement += arr[i]
		}
		else{
			sumOddElement += arr[i]
		}
	}
	let difference = sumEvenElement - sumOddElement;
	return difference
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0){
		return 0
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i=0; i<arr.length; i++){
		if (arr[i] % 2 === 0){
			sumEvenElement += arr[i]
			countEvenElement++;
		}
			}
	let average = sumEvenElement / countEvenElement;
	return average;
}

function makeWork (arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i=0; i<arrOfArr.length; i++){
		let result = func(...arrOfArr[i]);
		if (result > maxWorkerResult){
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, differenceEvenOddWorker));