function pyramid(n) {
	
	for (let row = 1; row <= n; row++) {
		let step = '';
		
		for (let space = 1; space <= n - row; space++) {
			step += ' ';
		}
		
		for (let hash = 1; hash <= (row - 1); hash++) {
			step += '#';
		}
		
		console.log(step);
	}
}

pyramid(10)
