function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	camara=createCapture(VIDEO);
	camara.size(500,500);
	camara.parent("controles");
	red_neuronal=ml5.poseNet(camara, cargado);
    red_neuronal.on("pose", resultados);
}

function cargado(){
    console.log("termine cargando");
}

function resultados(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX"+noseX);
        console.log("noseY"+noseY);
    }
}

function draw() {
	game();
}






