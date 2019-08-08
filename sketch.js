var symbolSize = 20;
var streams = [];

function setup() {
	createCanvas(window.innerWidth,window.innerHeight);//make a canvas
	//innerWidth returns the width of browser content area

	var x =0;
	var y =0;
	for(var i = 0;i<=width / symbolSize;i++){
		var stream = new  Stream();
		stream.generateSymbols(x,random(-1000,-10));
		streams.push(stream);
		x +=symbolSize;
		y

	}
	textSize(symbolSize);

}

function draw() {
	background(0,150);
	streams.forEach(function(stream){
		stream.render();
	})

}

function Symbol(x,y,speed,first){//(x,y) shows the location on the canvas
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.switchInterval = round(random(2,30));
	this.first = first;
	this.setToRandomSymbol = function() {//randomly select a symbol
		if(frameCount % this.switchInterval === 0){
		this.value = String.fromCharCode(
			0x4E00 + round(random(0,256)));
		}
	}

	this.rain = function(){
		if(this.y >= height){
			this.y = 0;
		}
		else{
		this.y += this.speed;
		}
	}
}



function Stream(){
	this.symbols = [];
	this.totalSymbols = round(random(2,20));
	this.speed = random(2,10);

	this.generateSymbols = function(x,y){
		var first = round(random(0,4)) === 1;
		for (var i = 0; i<= this.totalSymbols;i++){
			symbol = new Symbol(x,y,this.speed,first);
			symbol.setToRandomSymbol();
			this.symbols.push(symbol);
			y -= symbolSize;
			first = false;
		}
	}


	this.render = function(){
		this.symbols.forEach(function(symbol){
			if(symbol.first){
				fill(180,255,180);
			}
			else{
				fill(0,255,70);
			}
		text(symbol.value,symbol.x,symbol.y);
		symbol.rain();
		symbol.setToRandomSymbol();
		})
	}
}













