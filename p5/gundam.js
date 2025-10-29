function setup() {
  var cameraCanvas = document.getElementById('cameraCanvas');
  var cameraContext = cameraCanvas.getContext('2d');
  var box1 = document.getElementById('box1');
  box1.value = 0;
  var slider3 = document.getElementById('slider3');
  slider3.value = 0;
  var slider4 = document.getElementById('slider4');
  slider4.value = 0;

  var context = cameraContext; // default to drawing in the camera window
  var viewAngle = Math.PI;
  var time = 0;
  function draw() {
    
  // clear both canvas instances
cameraCanvas.width = cameraCanvas.width;

// use the sliders to get the angles
  //var viewAngle = slider2.value*0.02*Math.PI;
  var headAngle = slider3.value*0.01*Math.PI;
  var armsAngle = slider4.value*0.01*Math.PI;
   
function moveToTx(loc,Tx)
{var res=vec3.create(); vec3.transformMat4(res,loc,Tx); context.moveTo(res[0],res[1]);}

function lineToTx(loc,Tx)
{var res=vec3.create(); vec3.transformMat4(res,loc,Tx); context.lineTo(res[0],res[1]);}

function drawObject(color,TxU,scale) {
    context.globalAlpha = 0.5;
      var Tx = mat4.clone(TxU);
      mat4.scale(Tx,Tx,[scale,scale,scale]);
      context.beginPath();
    const grad=context.createRadialGradient(200,100,40,200,200,200);
    grad.addColorStop(0,"white");
    grad.addColorStop(0.3,"cyan");
    grad.addColorStop(1,"blue");
    context.fillStyle = grad;  
      moveToTx([0,  0, -30],Tx);
      lineToTx([-50,  10, 0],Tx);
      lineToTx([-10,  20, 0],Tx);
      lineToTx([0,  20, -10],Tx);
      context.closePath();
      context.fill();
      moveToTx([0,  0, -30],Tx);
      lineToTx([50,  10, 0],Tx);
      lineToTx([10,  20, 0],Tx);
      lineToTx([0,  20, -10],Tx);
      context.closePath();
      context.fill();
      moveToTx([0,  0, 30],Tx);
      lineToTx([-50,  10, 0],Tx);
      lineToTx([-10,  20, 0],Tx);
      lineToTx([0,  20, 10],Tx);
      context.closePath();
      context.fill();
      moveToTx([0,  0, 30],Tx);
      lineToTx([50,  10, 0],Tx);
      lineToTx([10,  20, 0],Tx);
      lineToTx([0,  20, 10],Tx);
    context.closePath();
      context.fill();
    
      moveToTx([-10,  20, 0],Tx);
      lineToTx([0,  20, -10],Tx);
      lineToTx([0,  30, -8],Tx);
      lineToTx([-8,  30, 0],Tx);
      context.closePath();
      context.fill();
      moveToTx([10,  20, 0],Tx);
      lineToTx([0,  20, -10],Tx);
      lineToTx([0,  30, -8],Tx);
      lineToTx([8,  30, 0],Tx);
      context.closePath();
      context.fill();
      moveToTx([-10,  20, 0],Tx);
      lineToTx([0,  20, 10],Tx);
      lineToTx([0,  30, 8],Tx);
      lineToTx([-8,  30, 0],Tx);
      context.closePath();
      context.fill();
      moveToTx([10,  20, 0],Tx);
      lineToTx([0,  20, 10],Tx);
      lineToTx([0,  30, 8],Tx);
      lineToTx([8,  30, 0],Tx);
      context.closePath();
      context.fill();
    
      //body
    
      moveToTx([0,  0, -30],Tx);
      lineToTx([0,  -30, -20],Tx);
      lineToTx([-40,  -20, 0],Tx);
      lineToTx([-50,  10, 0],Tx);
      context.closePath();
      context.fill();
      moveToTx([0,  0, -30],Tx);
      lineToTx([0,  -30, -20],Tx);
      lineToTx([40,  -20, 0],Tx);
      lineToTx([50,  10, 0],Tx);
      context.closePath();
      context.fill();
      moveToTx([-40,  -20, 0],Tx);
      lineToTx([-15,  -40, -15],Tx);
      lineToTx([15,  -40, -15],Tx);
      lineToTx([40,  -20, 0],Tx);
      context.closePath();
      moveToTx([-15,  -40, -15],Tx);
      lineToTx([-10,  -80, -10],Tx);
      lineToTx([10,  -80, -10],Tx);
      lineToTx([15,  -40, -15],Tx);
      context.closePath();
      context.fill();
      moveToTx([-10,  -80, -10],Tx);
      lineToTx([-30,  -75, 0],Tx);
      lineToTx([-40,  -20, 0],Tx);
      lineToTx([-15,  -40, -15],Tx);
      context.closePath();
      context.fill();
      moveToTx([10,  -80, -10],Tx);
      lineToTx([30,  -75, 0],Tx);
      lineToTx([40,  -20, 0],Tx);
      lineToTx([15,  -40, -15],Tx);
      context.closePath();
      context.fill();
      moveToTx([0,  0, 30],Tx);
      lineToTx([0,  -60, 20],Tx);
      lineToTx([30,  -60, 0],Tx);
      lineToTx([50,  10, 0],Tx);
      context.closePath();
      context.fill();
      moveToTx([0,  0, 30],Tx);
      lineToTx([0,  -60, 20],Tx);
      lineToTx([-30,  -60, 0],Tx);
      lineToTx([-50,  10, 0],Tx);
      context.closePath();
      context.fill();
      moveToTx([0,  -60, 20],Tx);
      lineToTx([0,  -80, 20],Tx);
      lineToTx([30,  -75, 0],Tx);
      lineToTx([30,  -60, 0],Tx);
      context.closePath();
      context.fill();
      moveToTx([0,  -60, 20],Tx);
      lineToTx([0,  -80, 20],Tx);
      lineToTx([-30,  -75, 0],Tx);
      lineToTx([-30,  -60, 0],Tx);
      context.closePath();
      context.fill();
    
      context.strokeStyle = "black";
      context.stroke();
}
    
  function drawCube(color,TxU,x,y,z,scale) {
      var Tx = mat4.clone(TxU);
      mat4.scale(Tx,Tx,[scale,scale,scale]);
      context.beginPath();
    
      context.fillStyle = color;  
      
      //[65,  -70, 0]
    
      moveToTx([5+x, 5+y, 5+z],Tx);
      lineToTx([-5+x, 5+y, 5+z],Tx);
      lineToTx([-5+x, -5+y, 5+z],Tx);
      lineToTx([5+x, -5+y, 5+z],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([5+x, 5+y, -5+z],Tx);
      lineToTx([-5+x, 5+y, -5+z],Tx);
      lineToTx([-5+x, -5+y, -5+z],Tx);
      lineToTx([5+x, -5+y, -5+z],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([5+x, 5+y, 5+z],Tx);
      lineToTx([5+x, 5+y, -5+z],Tx);
      lineToTx([-5+x, 5+y, -5+z],Tx);
      lineToTx([-5+x, 5+y, 5+z],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([5+x, -5+y, 5+z],Tx);
      lineToTx([5+x, -5+y, -5+z],Tx);
      lineToTx([-5+x, -5+y, -5+z],Tx);
      lineToTx([-5+x, -5+y, 5+z],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([5+x, 5+y, 5+z],Tx);
      lineToTx([5+x, 5+y, -5+z],Tx);
      lineToTx([5+x, -5+y, -5+z],Tx);
      lineToTx([5+x, -5+y, 5+z],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([-5+x, 5+y, 5+z],Tx);
      lineToTx([-5+x, 5+y, -5+z],Tx);
      lineToTx([-5+x, -5+y, -5+z],Tx);
      lineToTx([-5+x, -5+y, 5+z],Tx);
      context.closePath();
      context.fill();
  }
    
  function drawRightElbow(color,TxU,scale) {
    context.globalAlpha = 0.5;
      var Tx = mat4.clone(TxU);
      mat4.scale(Tx,Tx,[scale,scale,scale]);
      context.beginPath();
    const grad=context.createRadialGradient(200,100,40,200,200,200);
    grad.addColorStop(0,"white");
    grad.addColorStop(0.3,"cyan");
    grad.addColorStop(1,"blue");
    context.fillStyle = grad; 
    
      moveToTx([-60,  -20, 10],Tx);
      lineToTx([-55,  -25, 0],Tx);
      lineToTx([-70,  -20, -10],Tx);
      lineToTx([-70,  -15, 5],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([-55,  -25, 0],Tx);
      lineToTx([-65,  -70, 0],Tx);
      //lineToTx([-67,  -55, -5],Tx);
      lineToTx([-70,  -20, -10],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([-60,  -20, 10],Tx);
      lineToTx([-65,  -70, 0],Tx);
      lineToTx([-55,  -25, 0],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([-70,  -20, -10],Tx);
      lineToTx([-70,  -15, 5],Tx);
      lineToTx([-65,  -70, 0],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([-70,  -15, 5],Tx);
      lineToTx([-60,  -20, 10],Tx);
      lineToTx([-65,  -70, 0],Tx);
      context.closePath();
      context.fill();
    
      context.strokeStyle = "black";
      context.stroke();
  }
    
  function drawRightElbow2(color,TxU,scale) {
    context.globalAlpha = 0.5;
      var Tx = mat4.clone(TxU);
      mat4.scale(Tx,Tx,[scale,scale,scale]);
      context.beginPath();
    const grad=context.createRadialGradient(200,100,40,200,200,200);
    grad.addColorStop(0,"white");
    grad.addColorStop(0.3,"cyan");
    grad.addColorStop(1,"blue");
    context.fillStyle = grad; 
    
      moveToTx([-60,  -20, 10],Tx);
      lineToTx([-55,  -25, 0],Tx);
      lineToTx([-70,  -20, -10],Tx);
      lineToTx([-70,  -15, 5],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([-55,  -25, 0],Tx);
      lineToTx([-65,  -70, 0],Tx);
      //lineToTx([-67,  -55, -5],Tx);
      lineToTx([-70,  -20, -10],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([-60,  -20, 10],Tx);
      lineToTx([-65,  -70, 0],Tx);
      lineToTx([-55,  -25, 0],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([-70,  -20, -10],Tx);
      lineToTx([-70,  -15, 5],Tx);
      lineToTx([-65,  -70, 0],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([-70,  -15, 5],Tx);
      lineToTx([-60,  -20, 10],Tx);
      lineToTx([-65,  -70, 0],Tx);
      context.closePath();
      context.fill();
    
      context.strokeStyle = "black";
      context.stroke();
    
      var Translation = mat4.create();
      mat4.fromTranslation(Translation, [-65,-85,0]);
      var Tcube = mat4.create();
      mat4.multiply(Tcube, Tcube, Tx);
      mat4.multiply(Tcube, Tcube, Translation);
      mat4.rotateX(Tcube,Tcube,-time*0.01*Math.PI);
      mat4.rotateY(Tcube,Tcube,-time*0.01*Math.PI);
      mat4.rotateZ(Tcube,Tcube,-time*0.01*Math.PI);
      var Tcube2 = mat4.create();
      mat4.multiply(Tcube2, Tcube2, Tx);
      mat4.multiply(Tcube2, Tcube2, Translation);
      mat4.rotateX(Tcube2,Tcube2,time*0.01*Math.PI);
      mat4.rotateY(Tcube2,Tcube2,time*0.01*Math.PI);
      mat4.rotateZ(Tcube2,Tcube2,time*0.01*Math.PI);
      context.globalAlpha = 0.3;
      drawCube("blueviolet",Tcube,0,0,0,2.0);
      drawCube("crimson",Tcube2,0,0,0,2.5);
      context.globalAlpha = 1;
  }
    
  function drawLeftElbow(color,TxU,scale) {
    context.globalAlpha = 0.5;
      var Tx = mat4.clone(TxU);
      mat4.scale(Tx,Tx,[scale,scale,scale]);
      context.beginPath();
    const grad=context.createRadialGradient(200,100,40,200,200,200);
    grad.addColorStop(0,"white");
    grad.addColorStop(0.3,"cyan");
    grad.addColorStop(1,"blue");
    context.fillStyle = grad; 
    
      moveToTx([60,  -20, 10],Tx);
      lineToTx([55,  -25, 0],Tx);
      lineToTx([70,  -20, -10],Tx);
      lineToTx([70,  -15, 5],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([55,  -25, 0],Tx);
      lineToTx([65,  -70, 0],Tx);
      //lineToTx([-67,  -55, -5],Tx);
      lineToTx([70,  -20, -10],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([60,  -20, 10],Tx);
      lineToTx([65,  -70, 0],Tx);
      lineToTx([55,  -25, 0],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([70,  -20, -10],Tx);
      lineToTx([70,  -15, 5],Tx);
      lineToTx([65,  -70, 0],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([70,  -15, 5],Tx);
      lineToTx([60,  -20, 10],Tx);
      lineToTx([65,  -70, 0],Tx);
      context.closePath();
      context.fill();
    
      context.strokeStyle = "black";
      context.stroke();
  }
    
  function drawLeftElbow2(color,TxU,scale) {
    context.globalAlpha = 0.5;
      var Tx = mat4.clone(TxU);
      mat4.scale(Tx,Tx,[scale,scale,scale]);
      context.beginPath();
    const grad=context.createRadialGradient(200,100,40,200,200,200);
    grad.addColorStop(0,"white");
    grad.addColorStop(0.3,"cyan");
    grad.addColorStop(1,"blue");
    context.fillStyle = grad; 
    
      moveToTx([60,  -20, 10],Tx);
      lineToTx([55,  -25, 0],Tx);
      lineToTx([70,  -20, -10],Tx);
      lineToTx([70,  -15, 5],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([55,  -25, 0],Tx);
      lineToTx([65,  -70, 0],Tx);
      //lineToTx([-67,  -55, -5],Tx);
      lineToTx([70,  -20, -10],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([60,  -20, 10],Tx);
      lineToTx([65,  -70, 0],Tx);
      lineToTx([55,  -25, 0],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([70,  -20, -10],Tx);
      lineToTx([70,  -15, 5],Tx);
      lineToTx([65,  -70, 0],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([70,  -15, 5],Tx);
      lineToTx([60,  -20, 10],Tx);
      lineToTx([65,  -70, 0],Tx);
      context.closePath();
      context.fill();
    
      context.strokeStyle = "black";
      context.stroke();
    
      var Translation = mat4.create();
      mat4.fromTranslation(Translation, [65,-85,0]);
      var Tcube = mat4.create();
      mat4.multiply(Tcube, Tcube, Tx);
      mat4.multiply(Tcube, Tcube, Translation);
      mat4.rotateX(Tcube,Tcube,time*0.01*Math.PI);
      mat4.rotateY(Tcube,Tcube,time*0.01*Math.PI);
      mat4.rotateZ(Tcube,Tcube,time*0.01*Math.PI);
      var Tcube2 = mat4.create();
      mat4.multiply(Tcube2, Tcube2, Tx);
      mat4.multiply(Tcube2, Tcube2, Translation);
      mat4.rotateX(Tcube2,Tcube2,-time*0.01*Math.PI);
      mat4.rotateY(Tcube2,Tcube2,-time*0.01*Math.PI);
      mat4.rotateZ(Tcube2,Tcube2,-time*0.01*Math.PI);
      context.globalAlpha = 0.3;
      drawCube("blueviolet",Tcube,0,0,0,2.0);
      drawCube("crimson",Tcube2,0,0,0,2.5);
      context.globalAlpha = 1;
  }
    
  function drawRightShoulder(color,TxU,scale) {
    context.globalAlpha = 0.5;
      var Tx = mat4.clone(TxU);
      mat4.scale(Tx,Tx,[scale,scale,scale]);
      context.beginPath();
    const grad=context.createRadialGradient(200,100,40,200,200,200);
    grad.addColorStop(0,"white");
    grad.addColorStop(0.3,"cyan");
    grad.addColorStop(1,"blue");
    context.fillStyle = grad; 
    
      moveToTx([-45,  5, 10],Tx);
      lineToTx([-55,  0, -15],Tx);
      lineToTx([-67,  13, -10],Tx);
      lineToTx([-55,  15, 5],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([-55,  0, -15],Tx);
      lineToTx([-70,  -20, -10],Tx);
      lineToTx([-77,  0, -7],Tx);
      lineToTx([-67,  13, -10],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([-70,  -20, -10],Tx);
      lineToTx([-60,  -20, 10],Tx);
      lineToTx([-45,  5, 10],Tx);
      lineToTx([-55,  0, -15],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([-55,  15, 5],Tx);
      lineToTx([-66,  6, 6],Tx);
      lineToTx([-77,  0, -7],Tx);
      lineToTx([-67,  13, -10],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([-66,  6, 6],Tx);
      lineToTx([-60,  -20, 10],Tx);
      lineToTx([-45,  5, 10],Tx);
      lineToTx([-55,  15, 5],Tx);
      context.closePath();
      context.fill();
    
      context.fill();
      context.strokeStyle = "black";
      context.stroke();
  }
    
  function drawLeftShoulder(color,TxU,scale) {
    context.globalAlpha = 0.5;
      var Tx = mat4.clone(TxU);
      mat4.scale(Tx,Tx,[scale,scale,scale]);
      context.beginPath();
    const grad=context.createRadialGradient(200,100,40,200,200,200);
    grad.addColorStop(0,"white");
    grad.addColorStop(0.3,"cyan");
    grad.addColorStop(1,"blue");
    context.fillStyle = grad; 
    
      moveToTx([45,  5, 10],Tx);
      lineToTx([55,  0, -15],Tx);
      lineToTx([67,  13, -10],Tx);
      lineToTx([55,  15, 5],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([55,  0, -15],Tx);
      lineToTx([70,  -20, -10],Tx);
      lineToTx([77,  0, -7],Tx);
      lineToTx([67,  13, -10],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([70,  -20, -10],Tx);
      lineToTx([60,  -20, 10],Tx);
      lineToTx([45,  5, 10],Tx);
      lineToTx([55,  0, -15],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([55,  15, 5],Tx);
      lineToTx([66,  6, 6],Tx);
      lineToTx([77,  0, -7],Tx);
      lineToTx([67,  13, -10],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([66,  6, 6],Tx);
      lineToTx([60,  -20, 10],Tx);
      lineToTx([45,  5, 10],Tx);
      lineToTx([55,  15, 5],Tx);
      context.closePath();
      context.fill();
    
      context.fill();
      context.strokeStyle = "black";
      context.stroke();
  }
    
  function drawHead(color,TxU,scale) {
    context.globalAlpha = 0.5;
    var Tx = mat4.clone(TxU);
      mat4.scale(Tx,Tx,[scale,scale,scale]);
      context.beginPath();
    const grad=context.createRadialGradient(200,350,40,200,300,160);
    grad.addColorStop(0,"white");
    grad.addColorStop(0.3,"cyan");
    grad.addColorStop(1,"blue");
    context.fillStyle = grad; 
    moveToTx([0, 25, -15],Tx);
      lineToTx([0, 50, -18],Tx);
      lineToTx([-18, 55, -5],Tx);
      lineToTx([-13, 30, -8],Tx);
      context.closePath();
      context.fill();
      moveToTx([0, 25, -15],Tx);
      lineToTx([0, 50, -18],Tx);
      lineToTx([18, 55, -5],Tx);
      lineToTx([13, 30, -8],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([0, 50, -18],Tx);
      moveToTx([0, 48, -25],Tx);
      lineToTx([0, 75, -10],Tx);
      lineToTx([0, 88, 10],Tx);
      lineToTx([-15, 75, -5],Tx);
      lineToTx([-30, 75, 10],Tx);
      lineToTx([-28, 65, 0],Tx);
      lineToTx([-20, 53, -7],Tx);
      context.closePath();
      context.fill();
      moveToTx([0, 50, -18],Tx);
      moveToTx([0, 48, -25],Tx);
      lineToTx([0, 75, -10],Tx);
      lineToTx([0, 88, 10],Tx);
      lineToTx([15, 75, -5],Tx);
      lineToTx([30, 75, 10],Tx);
      lineToTx([28, 65, 0],Tx);
      lineToTx([20, 53, -7],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([-18, 55, -5],Tx);
      lineToTx([-15, 25, -5],Tx);
      lineToTx([-25, 30, 5],Tx);
      lineToTx([-30, 70, 10],Tx);
      context.closePath();
      context.fill();
      moveToTx([18, 55, -5],Tx);
      lineToTx([15, 25, -5],Tx);
      lineToTx([25, 30, 5],Tx);
      lineToTx([30, 70, 10],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([0, 75, -10],Tx);
      lineToTx([0, 80, 25],Tx);
      lineToTx([0, 60, 25],Tx);
      lineToTx([0, 40, 20],Tx);
      lineToTx([0, 20, 20],Tx);
      lineToTx([-20, 40, 5],Tx);
      context.closePath();
      context.fill();
      moveToTx([0, 75, -10],Tx);
      lineToTx([0, 80, 25],Tx);
      lineToTx([0, 60, 25],Tx);
      lineToTx([0, 40, 20],Tx);
      lineToTx([0, 20, 20],Tx);
      lineToTx([20, 40, 5],Tx);
      context.closePath();
      context.fill();
    
      context.strokeStyle = "black";
      context.stroke();
  }
    
  function drawCube2(color,TxU,scale) {
      var Tx = mat4.clone(TxU);
      mat4.scale(Tx,Tx,[scale,scale,scale]);
      context.beginPath();
      context.globalAlpha = 0.5;
      context.fillStyle = "blueviolet";
    
      moveToTx([5, 5, 5],Tx);
      lineToTx([-5, 5, 5],Tx);
      lineToTx([-5, -5, 5],Tx);
      lineToTx([5, -5, 5],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([5, 5, -5],Tx);
      lineToTx([-5, 5, -5],Tx);
      lineToTx([-5, -5, -5],Tx);
      lineToTx([5, -5, -5],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([5, 5, 5],Tx);
      lineToTx([5, 5, -5],Tx);
      lineToTx([-5, 5, -5],Tx);
      lineToTx([-5, 5, 5],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([5, -5, 5],Tx);
      lineToTx([5, -5, -5],Tx);
      lineToTx([-5, -5, -5],Tx);
      lineToTx([-5, -5, 5],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([5, 5, 5],Tx);
      lineToTx([5, 5, -5],Tx);
      lineToTx([5, -5, -5],Tx);
      lineToTx([5, -5, 5],Tx);
      context.closePath();
      context.fill();
    
      moveToTx([-5, 5, 5],Tx);
      lineToTx([-5, 5, -5],Tx);
      lineToTx([-5, -5, -5],Tx);
      lineToTx([-5, -5, 5],Tx);
      context.closePath();
      context.fill();
    
      context.globalAlpha = 1;
  }
    
  var Hermite = function(t) {
  return [
2*t*t*t-3*t*t+1,
t*t*t-2*t*t+t,
-2*t*t*t+3*t*t,
t*t*t-t*t
  ];
}

var HermiteDerivative = function(t) {
    return [
    6*t*t-6*t,
    3*t*t-4*t+1,
    -6*t*t+6*t,
    3*t*t-2*t
    ];
}

function Cubic(basis,P,t){
  var b = basis(t);
  var result=vec3.create();
  vec3.scale(result,P[0],b[0]);
  vec3.scaleAndAdd(result,result,P[1],b[1]);
  vec3.scaleAndAdd(result,result,P[2],b[2]);
  vec3.scaleAndAdd(result,result,P[3],b[3]);
  return result;
}

var p0=[-160,-120, 100];
var d0=[100,300, 0];
    
var p1=[100,100, 0];
var d1=[0,300, 100];
    
var p2=[160,-120, 100];
var d2=[-100,300, 0];
    
var p3=[-100,100, 0];
var d3=[0,300, 100];

var P0 = [p0,d0,p1,d1]; // First two points and tangents
var P1 = [p1,d1,p2,d2]; // Last two points and tangents
var P2 = [p2,d2,p3,d3]; // First two points and tangents
var P3 = [p3,d3,p0,d0]; // Last two points and tangents

var C0 = function(t_) {return Cubic(Hermite,P0,t_);};
var C1 = function(t_) {return Cubic(Hermite,P1,t_);};
var C2 = function(t_) {return Cubic(Hermite,P2,t_);};
var C3 = function(t_) {return Cubic(Hermite,P3,t_);};

var C0prime = function(t_) {return Cubic(HermiteDerivative,P0,t_);};
var C1prime = function(t_) {return Cubic(HermiteDerivative,P1,t_);};
var C2prime = function(t_) {return Cubic(HermiteDerivative,P2,t_);};
var C3prime = function(t_) {return Cubic(HermiteDerivative,P3,t_);};
  
var Ccomp = function(t) {
    if (t%4<1) {
        var u = t%1;
        return C0(u);
    } else if (t%4<2) {
        var u = t%1;
        return C1(u);
    } else if (t%4<3) {
        var u = t%1;
        return C2(u);
    } else {
        var u = t%1;
        return C3(u);
    }   
}

var Ccomp_tangent = function(t) {
    if (t%4<1) {
        var u = t%1;
        return C0prime(u);
    } else if (t%4<2) {
        var u = t%1;
        return C1prime(u);
    } else if (t%4<3) {
        var u = t%1;
        return C2prime(u);
    } else {
        var u = t%1;
        return C3prime(u);
    }          
}
                
    var CameraCurve = function(angle) {
      var distance = 120.0;
      var eye = vec3.create();
      eye[0] = distance*Math.sin(viewAngle);
      eye[1] = 0;
      eye[2] = distance*Math.cos(viewAngle);  
      return [eye[0],eye[1],eye[2]];
  }

  function drawTrajectory(t_begin,t_end,intervals,C,Tx,color) {
      context.globalAlpha = 1;
    context.strokeStyle=color;
    context.beginPath();
      moveToTx(C(t_begin),Tx);
      for(var i=1;i<=intervals;i++){
          var t=((intervals-i)/intervals)*t_begin+(i/intervals)*t_end;
          lineToTx(C(t),Tx);
      }
      context.stroke();
}
    
  function DrawBG() {
    context.beginPath();
    context.fillStyle = "black";
    context.rect(0,0,400,400)
    context.fill();
  }

  // Create Camera (lookAt) transform
   var eyeCamera = CameraCurve(viewAngle);
  viewAngle = viewAngle + 0.01;
  var targetCamera = vec3.fromValues(0,-50,0); // Aim at the origin of the world coords
  var upCamera = vec3.fromValues(0,100,0); // Y-axis of world coords to be vertical
var TlookAtCamera = mat4.create();
  mat4.lookAt(TlookAtCamera, eyeCamera, targetCamera, upCamera);
    
  // Create ViewPort transform 
  var Tviewport = mat4.create();
mat4.fromTranslation(Tviewport,[200,300+5*Math.sin(0.05*time),0]);  // Move the center of the
                                                // "lookAt" transform (where
                                                // the camera points) to the
                                                // canvas coordinates (200,300)
mat4.scale(Tviewport,Tviewport,[100,-100,1]); // Flip the Y-axis,
                                                // scale everything by 100x 

  context = cameraContext;

  // Create Camera projection transform
  // (orthographic for now)
  var TprojectionCamera = mat4.create();
  mat4.ortho(TprojectionCamera,-100,100,-100,100,-1,1);
  //mat4.perspective(TprojectionCamera,Math.PI/4,1,-1,1); // Use for perspective teaser!
   
  // Create transform t_VP_PROJ_CAM that incorporates
  // Viewport, projection and camera transforms
  var tVP_PROJ_VIEW_Camera = mat4.create();
  mat4.multiply(tVP_PROJ_VIEW_Camera,Tviewport,TprojectionCamera);
  mat4.multiply(tVP_PROJ_VIEW_Camera,tVP_PROJ_VIEW_Camera,TlookAtCamera);

  context = cameraContext;
  DrawBG();
  // drawUpVector("orange",upCamera,tVP_PROJ_VIEW_Camera,1.0);
  if (box1.checked) {
    drawTrajectory(0.0,4.0,100,Ccomp,tVP_PROJ_VIEW_Camera,"yellow");
  }
  //draw3DAxes("green", tVP_PROJ_VIEW_MOD_Camera,100.0); // Uncomment to see "model" coords
  for (let i = 0; i < 40; i++) {
    var Tmodel2 = mat4.create();
    mat4.fromTranslation(Tmodel2,Ccomp(time*0.01-0.1*i));
    var Tmodel_rot2=mat4.create();
    var eyePlane2 = vec3.fromValues(0,0,0);
    mat4.lookAt(Tmodel_rot2, eyePlane2, Ccomp_tangent(time*0.01-0.1*i), upCamera);  
    mat4.invert(Tmodel_rot2,Tmodel_rot2);
    mat4.multiply(Tmodel2,Tmodel2,Tmodel_rot2);
    var tVP_PROJ_VIEW_MOD_Camera2 = mat4.create();
    mat4.multiply(tVP_PROJ_VIEW_MOD_Camera2, tVP_PROJ_VIEW_Camera, Tmodel2);
    drawCube2("green",tVP_PROJ_VIEW_MOD_Camera2,0.5);
  }
  var Thead = mat4.create();
  mat4.rotateY(Thead,tVP_PROJ_VIEW_Camera,headAngle);
  var Tshoulders = mat4.create();
  mat4.rotateX(Tshoulders,tVP_PROJ_VIEW_Camera,armsAngle);
  var Telbows = mat4.create();
  mat4.rotateX(Telbows,Tshoulders,armsAngle*2)
  time = time + 1;
  drawRightShoulder("green",Tshoulders,1.0);
  drawLeftShoulder("green",Tshoulders,1.0);
  if (armsAngle < Math.PI/6) {
    drawRightElbow("green",Telbows,1.0);
    drawLeftElbow("green",Telbows,1.0);
  } else {
    drawRightElbow2("green",Telbows,1.0);
    drawLeftElbow2("green",Telbows,1.0);
  }
  drawObject("green",tVP_PROJ_VIEW_Camera,1.0); 
  drawHead("green",Thead,1.0);
  if (viewAngle%(2*Math.PI) > Math.PI) {
    drawRightShoulder("green",Tshoulders,1.0);
    if (armsAngle < Math.PI/6) {
      drawRightElbow("green",Telbows,1.0);
    } else {
      drawRightElbow2("green",Telbows,1.0);
    }
  } else if (viewAngle%(2*Math.PI) < Math.PI) {
    drawLeftShoulder("green",Tshoulders,1.0);
    if (armsAngle < Math.PI/6) {
      drawLeftElbow("green",Telbows,1.0);
    } else {
      drawLeftElbow2("green",Telbows,1.0);
    }
  }
    
    window.requestAnimationFrame(draw);
  }
  

  window.requestAnimationFrame(draw);
}
window.onload = setup;
