// utopian tree exercise on hackerRank
//
// Oct 20th '15
// max volz



var growTree = function(seasons){
	var treeHeight = 1,x,
		multiply = true;
	if(!seasons){
		return treeHeight;
	}
	for(x = seasons; x > 0; --x){
		if(multiply == true){
			treeHeight *= 2;
			multiply = false;
		}
		else{
			treeHeight += 1;
			multiply = true;
		}
	}
	return treeHeight;
}

var treeFactory = function(trees){
	var input = trees.split('\n'),x;
	for(x=1;x<input.length;++x){
		console.log(growTree(input[x]));
	}
}

treeFactory("3\n0\n1\n4");
//console.log(growTree(1) + " is 2?");
//console.log(growTree(4) + " is 7?");
