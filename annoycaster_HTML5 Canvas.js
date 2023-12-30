(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACvAAQAABJgzAzQgzAzhJAAQhIAAgzgzQgzgzAAhJQAAhIAzgzQAzgzBIAAQBJAAAzAzQAzAzAABIg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ah7B7QgzgzAAhIQAAhHAzg0QA0gzBHAAQBIAAAzAzQA0A0AABHQAABIg0AzQgzA0hIAAQhHAAg0g0g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-18.5,-18.5,37,37), null);


(lib.redBullet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAMgMQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGQgFgFAAgHQAAgGAFgGQAGgFAGAAQAHAAAFAFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgMAMQgEgFAAgHQAAgGAEgGQAGgEAGAAQAHAAAFAEQAGAGgBAGQABAHgGAFQgFAGgHgBQgGABgGgGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redBullet, new cjs.Rectangle(-2.7,-2.7,5.5,5.5), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AD6AAInzAA");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("Aj5j5IHzD5InzD6g");
	this.shape_1.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,0,52,50), null);


// stage content:
(lib.annoycaster_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Animate Vertically
		Moves the symbol instance vertically on the stage by decreasing or increasing its y property within an Tick event.
		
		Instructions:
		1. The default direction of the animation is down.
		2. To change the direction of the animation to up, change the number 10 below to a negative value.
		3. To change the speed at which the symbol instance moves, change the number 10 below to the number of pixels you want the symbol instance to move in each frame.
		4. Because the animation uses an Tick event, it progresses only when the playhead moves to a new frame. The speed of the animation is also affected by the document frame rate.
		
		
		this.addEventListener("tick", fl_AnimateVertically.bind(this));
		
		function fl_AnimateVertically()
		{
			this.character.y++
		}*/
		var up_press = false
		var down_press = false
		var left_press = false
		var right_press = false
		this.addEventListener("tick", handleTick.bind(this));
		
		var assholes = 0
		//textfield=this.ass
			function handleTick() {
				/*character = this.character
			character.x = stage.mouseX
			character.y = stage.mouseY*/
				//this.ass.text
				//character.x++
				void_control();
				this.ass.text = KeyPress
			}
		var KeyPress = new Array(255)
		document.addEventListener("keydown", function (event) {
			KeyPress[event.keyCode] = 1
		}.bind(this));
		document.addEventListener("keyup", function (event) {
			KeyPress[event.keyCode] = 0
		}.bind(this));
		var character = this.character
			function void_control() {
				character.moveX = Math.cos(character.rotation / 180 * Math.PI)
				character.moveY = Math.sin(character.rotation / 180 * Math.PI)
				if (KeyPress[65] == 1) {
					character.rotation -= 1
					//stage.addChild("redBullet")
				}
				if (KeyPress[68] == 1) {
					character.rotation += 1
				}
				if (KeyPress[87] == 1) {
					character.x += character.moveX
					character.y += character.moveY
				}
				if (KeyPress[83] == 1) {
					character.x -= character.moveX
					character.y -= character.moveY
				}
				if (left_press == true) {
					character.rotation -= 1
					//stage.addChild("redBullet")
				}
				if (right_press == true) {
					character.rotation += 1
				}
				if (up_press == true) {
					character.x += character.moveX
					character.y += character.moveY
				}
				if (down_press == true) {
					character.x -= character.moveX
					character.y -= character.moveY
				}
		
			}
		
			// Declare an array to hold references to the projectiles
		var bulletArray = [];
		
		// Function to shoot a projectile
		function shoot() {
			// Create a new instance of the "redBullet" symbol
			var bullet = new lib.redBullet(); // Make sure to replace "lib" with the actual name of your library
			bullet.x = character.x; // Set the initial x position
			bullet.y = character.y; // Set the initial y position
		
			// Add the bullet to the stage
			stage.addChild(bullet);
		
			// Add the bullet to the array for further reference or cleanup
			bulletArray.push(bullet);
		}
		
		// Function to handle projectile movement or other logic
		function handleProjectiles() {
			for (var i = 0; i < bulletArray.length; i++) {
				var bullet = bulletArray[i];
		
				// Add your logic for projectile movement or other behaviors here
				bullet.x += bullet.speedX; // Example: Move the bullet horizontally
				bullet.y += bullet.speedY; // Example: Move the bullet vertically
		
				// Check if the bullet is out of bounds or collided with something, and remove if needed
				if (bullet.x < 0 || bullet.x > stage.canvas.width || bullet.y < 0 || bullet.y > stage.canvas.height) {
					// Remove the bullet from the stage
					stage.removeChild(bullet);
		
					// Remove the bullet from the array
					bulletArray.splice(i, 1);
		
					// Decrement the loop counter to account for the removed element
					i--;
				}
			}
		}
		
		// Call the shoot function when the spacebar is pressed
		document.addEventListener("keydown", function (event) {
			if (event.keyCode === 32) { // Spacebar
				shoot();
			}
		}.bind(this));
		
		
		this._left.addEventListener("mousedown", function () {
			left_press = true
		});
		this._right.addEventListener("mousedown", function () {
			right_press = true
		});
		this._up.addEventListener("mousedown", function () {
			up_press = true
			//alert("fuchs")
		});
		this._down.addEventListener("mousedown", function () {
			down_press = true
		});
		
		this._left.addEventListener("pressup", function () {
			left_press = false
		});
		this._right.addEventListener("pressup", function () {
			right_press = false
		});
		this._up.addEventListener("pressup", function () {
			up_press = false
		});
		this._down.addEventListener("pressup", function () {
			down_press = false
		});
		
		// Initialize variables to track button states
		/*var left_press = false;
		var right_press = false;
		var up_press = false;
		var down_press = false;*/
		
		// Function to handle touchstart event
		/*
		function handleTouchStart(event) {
		    // Prevent default behavior to avoid double tap zooming on mobile devices
		    event.preventDefault();
		
		    // Get the name of the button
		    var buttonName = event.currentTarget.name;
		
		    // Check which button was touched
		    switch (buttonName) {
		        case "_left":
		            left_press = true;
		            break;
		        case "_right":
		            right_press = true;
		            break;
		        case "_up":
		            up_press = true;
		            break;
		        case "_down":
		            down_press = true;
		            break;
		    }
		}
		
		// Function to handle touchend event
		function handleTouchEnd(event) {
		    // Prevent default behavior
		    event.preventDefault();
		
		    // Reset all press states
		    left_press = false;
		    right_press = false;
		    up_press = false;
		    down_press = false;
		}
		
		// Enable touch events for the stage
		createjs.Touch.enable(stage);
		
		// Add touchstart event listeners for buttons
		this._left.addEventListener("mousedown", handleTouchStart);
		this._right.addEventListener("mousedown", handleTouchStart);
		this._up.addEventListener("mousedown", handleTouchStart);
		this._down.addEventListener("mousedown", handleTouchStart);
		
		// Add touchend event listeners for buttons
		this._left.addEventListener("pressup", handleTouchEnd);
		this._right.addEventListener("pressup", handleTouchEnd);
		this._up.addEventListener("pressup", handleTouchEnd);
		this._down.addEventListener("pressup", handleTouchEnd);*/
		
		/*document.addEventListener("click", function () {
			character.x = stage.mouseX
			character.y = stage.mouseY
		});*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this._shoot = new lib.Symbol3();
	this._shoot.name = "_shoot";
	this._shoot.setTransform(474.5,320.55);

	this._left = new lib.Symbol3();
	this._left.name = "_left";
	this._left.setTransform(32.5,320.55);
	new cjs.ButtonHelper(this._left, 0, 1, 1);

	this._down = new lib.Symbol3();
	this._down.name = "_down";
	this._down.setTransform(67.5,355.55);
	new cjs.ButtonHelper(this._down, 0, 1, 1);

	this._right = new lib.Symbol3();
	this._right.name = "_right";
	this._right.setTransform(102.5,320.55);
	new cjs.ButtonHelper(this._right, 0, 1, 1);

	this._up = new lib.Symbol3();
	this._up.name = "_up";
	this._up.setTransform(67.5,285.55);
	new cjs.ButtonHelper(this._up, 0, 1, 1);

	this.ass = new cjs.Text("", "12px 'Times New Roman'", "#FFFFFF");
	this.ass.name = "ass";
	this.ass.lineHeight = 15;
	this.ass.lineWidth = 505;
	this.ass.parent = this;
	this.ass.setTransform(23,28.3);

	this.character = new lib.Symbol1();
	this.character.name = "character";
	this.character.setTransform(96,157,1,1,0,0,0,0,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.character},{t:this.ass},{t:this._up},{t:this._right},{t:this._down},{t:this._left},{t:this._shoot}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(289,226.3,241,147.8);
// library properties:
lib.properties = {
	id: 'D379427591B93843AD89262D5020BF66',
	width: 550,
	height: 400,
	fps: 60,
	color: "#999999",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D379427591B93843AD89262D5020BF66'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;