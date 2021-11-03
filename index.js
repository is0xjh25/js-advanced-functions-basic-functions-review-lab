function saturdayFun(a="roller-skate") {
	return `This Saturday, I want to ${a}!`;
}

function mondayWork(a="go to the office") {
	return `This Monday, I will ${a}.`;
}

function wrapAdjective(y="*") {
	return function (x="sepcial") {
		return `You are ${y}${x}${y}!`;
	} 
}

let Calculator= {
	add(x, y) {
		return x + y;
	},
	subtract(x, y) {
		return x - y;
	},
	multiply(x, y) {
		return x * y;
	},
	divide(x, y) {
		return x / y;
	}
};

function actionApplyer(s, fns) {
	if (fns.length === 0) {
		return s;
	} else {
		let a = 13;
		for (let i = 0; i < fns.length; i++) {
			a = fns[i](a);
		}
		return a;		
	}

}
