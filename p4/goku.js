function setup() { "use strict";
  var canvas = document.getElementById('myCanvas');
  var box0 = document.getElementById('box0');
  var slider2 = document.getElementById('slider2');
  slider2.value = 0;
  var slider3 = document.getElementById('slider3');
  slider3.value = 400;
  var slider4 = document.getElementById('slider4');
  slider4.value = 1;
  var box1 = document.getElementById('box1');
  var y = 0;
  var theta = 0;
  var tParam = 0;
  var tParam2 = 0;
  function draw() {
    var context = canvas.getContext('2d');
    canvas.width = canvas.width;
    
    // use the sliders to get various parameters
    var dx = slider2.value;
    var speed = slider4.value;
    var factor = slider3.value*0.01;
    
    function moveToTx(loc,Tx)
    {var res=vec2.create(); vec2.transformMat3(res,loc,Tx); context.moveTo(res[0],res[1]);}

    function lineToTx(loc,Tx)
    {var res=vec2.create(); vec2.transformMat3(res,loc,Tx); context.lineTo(res[0],res[1]);}

    function circleAtTx(loc, r, Tx) {
      var res = vec2.create();
      vec2.transformMat3(res,loc,Tx);
      context.ellipse(res[0], res[1], r, r, 0, 0, 2 * Math.PI);
    }
    
    function DrawGoku(color, Tx) {
      context.beginPath();  //head
      context.strokeStyle = "black";
      context.fillStyle = "beige";  
      //context.arc(0, -27, 11, 0, 2 * Math.PI);
      circleAtTx([0,-27],11,Tx);
      context.stroke();
      context.fill(); 
      
      context.beginPath(); //gi
      context.fillStyle = color;
      moveToTx([0,-16],Tx);
      lineToTx([-13,-20],Tx);
      lineToTx([-22,-10],Tx);
      lineToTx([-18,-1],Tx);
      lineToTx([-18,12],Tx);
      lineToTx([-16,19],Tx);
      lineToTx([-16,26],Tx);
      lineToTx([-17,30],Tx);
      lineToTx([-18,43],Tx);
      lineToTx([-17,53],Tx);
      lineToTx([-18,60],Tx);
      lineToTx([-19,70],Tx);
      lineToTx([-15,75],Tx);
      lineToTx([0,77],Tx);
      lineToTx([15,75],Tx);
      lineToTx([19,70],Tx);
      lineToTx([18,60],Tx);
      lineToTx([17,53],Tx);
      lineToTx([18,43],Tx);
      lineToTx([17,30],Tx);
      lineToTx([16,26],Tx);
      lineToTx([16,19],Tx);
      lineToTx([18,12],Tx);
      lineToTx([18,-1],Tx);
      lineToTx([22,-10],Tx);
      lineToTx([13,-20],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath(); //arms
      context.fillStyle = "beige"; 
      moveToTx([-27,-18],Tx);
      lineToTx([-31,-31],Tx);
      lineToTx([-30,-44],Tx);
      lineToTx([-29,-49],Tx);
      lineToTx([-30,-53],Tx);
      lineToTx([-29,-58],Tx);
      lineToTx([-20,-56],Tx);
      lineToTx([-21,-47],Tx);
      lineToTx([-21,-43],Tx);
      lineToTx([-18,-34],Tx);
      lineToTx([-16,-25],Tx);
      context.stroke();
      context.fill();
      
      context.beginPath(); 
      moveToTx([27,-18],Tx);
      lineToTx([31,-31],Tx);
      lineToTx([30,-44],Tx);
      lineToTx([29,-49],Tx);
      lineToTx([30,-53],Tx);
      lineToTx([29,-58],Tx);
      lineToTx([20,-56],Tx);
      lineToTx([21,-47],Tx);
      lineToTx([21,-43],Tx);
      lineToTx([18,-34],Tx);
      lineToTx([16,-25],Tx);
      context.stroke();
      context.fill();
      
      context.beginPath(); //belt
      context.fillStyle = "navy";
      moveToTx([-16,19],Tx);
      lineToTx([-16,26],Tx);
      lineToTx([-6,28],Tx);
      lineToTx([6,28],Tx);
      lineToTx([16,26],Tx);
      lineToTx([16,19],Tx);
      lineToTx([5,21],Tx);
      lineToTx([-5,21],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath(); //shoulders
      moveToTx([-13,-20],Tx);
      lineToTx([-16,-25],Tx);
      lineToTx([-27,-18],Tx);
      lineToTx([-25,-13],Tx);
      lineToTx([-22,-10],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath();
      moveToTx([13,-20],Tx);
      lineToTx([16,-25],Tx);
      lineToTx([27,-18],Tx);
      lineToTx([25,-13],Tx);
      lineToTx([22,-10],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath(); //ankles
      moveToTx([-15,75],Tx);
      lineToTx([-12,85],Tx);
      lineToTx([0,88],Tx);
      lineToTx([12,85],Tx);
      lineToTx([15,75],Tx);
      lineToTx([0,77],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath(); //wrists
      moveToTx([-21,-47],Tx);
      lineToTx([-21,-43],Tx);
      lineToTx([-30,-44],Tx);
      lineToTx([-29,-49],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath();
      moveToTx([21,-47],Tx);
      lineToTx([21,-43],Tx);
      lineToTx([30,-44],Tx);
      lineToTx([29,-49],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath(); //boots
      context.fillStyle = "goldenrod";
      moveToTx([-12,85],Tx);
      lineToTx([-12,92],Tx);
      lineToTx([-10,101],Tx);
      lineToTx([0,106],Tx);
      lineToTx([10,101],Tx);
      lineToTx([12,92],Tx);
      lineToTx([12,85],Tx);
      lineToTx([0,88],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath(); //kame
      context.fillStyle = "white";
      //context.arc(0, 0, 10, 0, 2 * Math.PI);
      circleAtTx([0,0],10,Tx);
      context.fill();   
      context.stroke();
      
      context.beginPath();
      moveToTx([0,106],Tx);
      lineToTx([0,46],Tx);
      moveToTx([6,-4],Tx);
      lineToTx([-6,-4],Tx);
      moveToTx([5,0],Tx);
      lineToTx([-5,0],Tx);
      moveToTx([6,4],Tx);
      lineToTx([-6,4],Tx);
      moveToTx([0,4],Tx);
      lineToTx([0,-4],Tx);
      context.stroke();
      
      context.beginPath(); //hair
      context.fillStyle = "black";
      context.strokeStyle = "grey"; 
      moveToTx([-12,-35],Tx);
      lineToTx([-11,-40],Tx);
      lineToTx([-9,-48],Tx);
      lineToTx([-8,-40],Tx);
      lineToTx([-2,-50],Tx);
      lineToTx([6,-56],Tx);
      lineToTx([4,-49],Tx);
      lineToTx([3,-43],Tx);
      lineToTx([9,-48],Tx);
      lineToTx([13,-50],Tx);
      lineToTx([11,-45],Tx);
      lineToTx([10,-38],Tx);
      lineToTx([17,-36],Tx);
      lineToTx([19,-35],Tx);
      lineToTx([25,-31],Tx);
      lineToTx([19,-30],Tx);
      lineToTx([12,-27],Tx);
      lineToTx([19,-26],Tx);
      lineToTx([23,-24],Tx);
      lineToTx([10,-20],Tx);
      lineToTx([5,-15],Tx);
      lineToTx([2,-20],Tx);
      lineToTx([0,-13],Tx);
      lineToTx([-10,-20],Tx);
      lineToTx([-21,-20],Tx);
      lineToTx([-17,-24],Tx);
      lineToTx([-12,-27],Tx);
      lineToTx([-24,-27],Tx);
      lineToTx([-17,-33],Tx);
      context.closePath();
      context.stroke();
      context.fill();
    }   
    
    function DrawSuper(color, Tx) {
      context.beginPath();  //head
      context.strokeStyle = "yellow";
      context.fillStyle = "beige";  
      //context.arc(0, -27, 11, 0, 2 * Math.PI);
      circleAtTx([0,-27],11,Tx);
      context.stroke();
      context.fill(); 
      
      context.beginPath(); //gi
      context.fillStyle = color;
      moveToTx([0,-16],Tx);
      lineToTx([-13,-20],Tx);
      lineToTx([-22,-10],Tx);
      lineToTx([-18,-1],Tx);
      lineToTx([-18,12],Tx);
      lineToTx([-16,19],Tx);
      lineToTx([-16,26],Tx);
      lineToTx([-17,30],Tx);
      lineToTx([-18,43],Tx);
      lineToTx([-17,53],Tx);
      lineToTx([-18,60],Tx);
      lineToTx([-19,70],Tx);
      lineToTx([-15,75],Tx);
      lineToTx([0,77],Tx);
      lineToTx([15,75],Tx);
      lineToTx([19,70],Tx);
      lineToTx([18,60],Tx);
      lineToTx([17,53],Tx);
      lineToTx([18,43],Tx);
      lineToTx([17,30],Tx);
      lineToTx([16,26],Tx);
      lineToTx([16,19],Tx);
      lineToTx([18,12],Tx);
      lineToTx([18,-1],Tx);
      lineToTx([22,-10],Tx);
      lineToTx([13,-20],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath(); //arms
      context.fillStyle = "beige"; 
      moveToTx([-27,-18],Tx);
      lineToTx([-31,-31],Tx);
      lineToTx([-30,-44],Tx);
      lineToTx([-29,-49],Tx);
      lineToTx([-30,-53],Tx);
      lineToTx([-29,-58],Tx);
      lineToTx([-20,-56],Tx);
      lineToTx([-21,-47],Tx);
      lineToTx([-21,-43],Tx);
      lineToTx([-18,-34],Tx);
      lineToTx([-16,-25],Tx);
      context.stroke();
      context.fill();
      
      context.beginPath(); 
      moveToTx([27,-18],Tx);
      lineToTx([31,-31],Tx);
      lineToTx([30,-44],Tx);
      lineToTx([29,-49],Tx);
      lineToTx([30,-53],Tx);
      lineToTx([29,-58],Tx);
      lineToTx([20,-56],Tx);
      lineToTx([21,-47],Tx);
      lineToTx([21,-43],Tx);
      lineToTx([18,-34],Tx);
      lineToTx([16,-25],Tx);
      context.stroke();
      context.fill();
      
      context.beginPath(); //belt
      context.fillStyle = "navy";
      moveToTx([-16,19],Tx);
      lineToTx([-16,26],Tx);
      lineToTx([-6,28],Tx);
      lineToTx([6,28],Tx);
      lineToTx([16,26],Tx);
      lineToTx([16,19],Tx);
      lineToTx([5,21],Tx);
      lineToTx([-5,21],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath(); //shoulders
      moveToTx([-13,-20],Tx);
      lineToTx([-16,-25],Tx);
      lineToTx([-27,-18],Tx);
      lineToTx([-25,-13],Tx);
      lineToTx([-22,-10],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath();
      moveToTx([13,-20],Tx);
      lineToTx([16,-25],Tx);
      lineToTx([27,-18],Tx);
      lineToTx([25,-13],Tx);
      lineToTx([22,-10],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath(); //ankles
      moveToTx([-15,75],Tx);
      lineToTx([-12,85],Tx);
      lineToTx([0,88],Tx);
      lineToTx([12,85],Tx);
      lineToTx([15,75],Tx);
      lineToTx([0,77],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath(); //wrists
      moveToTx([-21,-47],Tx);
      lineToTx([-21,-43],Tx);
      lineToTx([-30,-44],Tx);
      lineToTx([-29,-49],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath();
      moveToTx([21,-47],Tx);
      lineToTx([21,-43],Tx);
      lineToTx([30,-44],Tx);
      lineToTx([29,-49],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath(); //boots
      context.fillStyle = "goldenrod";
      moveToTx([-12,85],Tx);
      lineToTx([-12,92],Tx);
      lineToTx([-10,101],Tx);
      lineToTx([0,106],Tx);
      lineToTx([10,101],Tx);
      lineToTx([12,92],Tx);
      lineToTx([12,85],Tx);
      lineToTx([0,88],Tx);
      context.closePath();
      context.fill();
      context.stroke();
      
      context.beginPath(); //kame
      context.strokeStyle = "black";
      context.fillStyle = "white";
      //context.arc(0, 0, 10, 0, 2 * Math.PI);
      circleAtTx([0,0],10,Tx);
      context.fill();   
      context.stroke();
      
      context.beginPath();
      context.strokeStyle = "yellow";
      moveToTx([0,106],Tx);
      lineToTx([0,46],Tx);
      context.stroke();
      
      context.beginPath();
      context.strokeStyle = "black";
      moveToTx([6,-4],Tx);
      lineToTx([-6,-4],Tx);
      moveToTx([5,0],Tx);
      lineToTx([-5,0],Tx);
      moveToTx([6,4],Tx);
      lineToTx([-6,4],Tx);
      moveToTx([0,4],Tx);
      lineToTx([0,-4],Tx);
      context.stroke();
      
      context.beginPath(); //hair
      context.fillStyle = "yellow";
      context.strokeStyle = "white"; 
      moveToTx([-2,-43],Tx);
      lineToTx([2,-53],Tx);
      lineToTx([4,-49],Tx);
      lineToTx([2,-41],Tx);
      lineToTx([6,-44],Tx);
      lineToTx([16,-43],Tx);
      lineToTx([9,-38],Tx);
      lineToTx([15,-35],Tx);
      lineToTx([20,-25],Tx);
      lineToTx([11,-27],Tx);
      lineToTx([15,-21],Tx);
      lineToTx([12,-12],Tx);
      lineToTx([10,-17],Tx);
      lineToTx([7,-21],Tx);
      lineToTx([7,-14],Tx);
      lineToTx([3,-7],Tx);
      lineToTx([2,-16],Tx);
      lineToTx([0,-18],Tx);
      lineToTx([-1,-11],Tx);
      lineToTx([-4,-15],Tx);
      lineToTx([-5,-22],Tx);
      lineToTx([-9,-12],Tx);
      lineToTx([-13,-20],Tx);
      lineToTx([-12,-26],Tx);
      lineToTx([-18,-21],Tx);
      lineToTx([-15,-34],Tx);
      lineToTx([-10,-36],Tx);
      lineToTx([-19,-38],Tx);
      lineToTx([-10,-41],Tx);
      lineToTx([-4,-39],Tx);
      lineToTx([-8,-45],Tx);
      lineToTx([-3,-51],Tx);
      context.closePath();
      context.stroke();
      context.fill();
    }   
    
    function DrawAura(Tx) {
      context.beginPath(); 
      context.fillStyle = "yellow";  
      context.globalAlpha = 0.25;
      //context.arc(0, 15, 100, 0, 2 * Math.PI);
      //circleAtTx([0,15],100,Tx);
      //context.fill();  
      moveToTx([0,-80],Tx);
      lineToTx([-40,-60],Tx);
      lineToTx([-36,-59],Tx);
      lineToTx([-55,-25],Tx);
      lineToTx([-50,-27],Tx);
      lineToTx([-60,15],Tx);
      lineToTx([-55,12],Tx);
      lineToTx([-50,55],Tx);
      lineToTx([-46,50],Tx);
      lineToTx([-35,90],Tx);
      lineToTx([-32,85],Tx);
      lineToTx([-20,115],Tx);
      lineToTx([-18,110],Tx);
      lineToTx([0,140],Tx);
      lineToTx([18,110],Tx);
      lineToTx([20,115],Tx);
      lineToTx([32,85],Tx);
      lineToTx([35,90],Tx);
      lineToTx([46,50],Tx);
      lineToTx([50,55],Tx);
      lineToTx([55,12],Tx);
      lineToTx([60,15],Tx);
      lineToTx([50,-27],Tx);
      lineToTx([55,-25],Tx);
      lineToTx([36,-59],Tx);
      lineToTx([40,-60],Tx);
      context.closePath();
      context.stroke();
      context.fill();
    }
    
    function DrawStar(Tx) {
      context.beginPath();
      const grad1=context.createRadialGradient(300,300,100,300,300,400);
      grad1.addColorStop(0,"white");
      grad1.addColorStop(0.4,"cyan");
      grad1.addColorStop(1,"blue");
      context.fillStyle = grad1; 
      moveToTx([0,-5],Tx);
      lineToTx([1,-1],Tx);
      lineToTx([5,0],Tx);
      lineToTx([1,1],Tx);
      lineToTx([0,5],Tx);
      lineToTx([-1,1],Tx);
      lineToTx([-5,0],Tx);
      lineToTx([-1,-1],Tx);
      context.closePath();
      context.fill();
    }
    
    function DrawPlanet(radius, Tx) {
      context.beginPath(); 
      const grad=context.createRadialGradient(300,300,40,300,300,160);
      grad.addColorStop(0,"white");
      grad.addColorStop(0.3,"cyan");
      grad.addColorStop(1,"blue");
      context.fillStyle = grad;  
      //context.arc(0, 0, 100, 0, 2 * Math.PI);
      circleAtTx([0,0],radius,Tx);
      context.fill();   
      context.stroke();
    }
    
    function DrawBG() {
      context.beginPath();
      context.fillStyle = "black";
      context.rect(0,0,600,600)
      context.fill();
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
    var result=vec2.create();
    vec2.scale(result,P[0],b[0]);
    vec2.scaleAndAdd(result,result,P[1],b[1]);
    vec2.scaleAndAdd(result,result,P[2],b[2]);
    vec2.scaleAndAdd(result,result,P[3],b[3]);
    return result;
}

var p0=[-200,-200];
var d0=[100*factor,-300*factor];
var p1=[200,-200];
var d1=[100*factor,300*factor];
var p2=[-200,200];
var d2=[100*factor,300*factor];
  var p3=[200,200];
var d3=[100*factor,-300*factor];

var P0 = [p0,d0,p3,d3]; // First two points and tangents
var P1 = [p3,d3,p2,d2]; // Last two points and tangents
  var P2 = [p2,d2,p1,d1]; // First two points and tangents
var P3 = [p1,d1,p0,d0]; // Last two points and tangents

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

  function drawTrajectory(t_begin,t_end,intervals,C,Tx,color) {
    context.strokeStyle=color;
    context.beginPath();
      moveToTx(C(t_begin),Tx);
      for(var i=1;i<=intervals;i++){
          var t=((intervals-i)/intervals)*t_begin+(i/intervals)*t_end;
          lineToTx(C(t),Tx);
      }
      context.stroke();
}
    
    DrawBG();
    
    var Tblue_to_canvas = mat3.create();
    mat3.fromTranslation(Tblue_to_canvas,[300,300]);
    
    var Tcenter = mat3.create();
    mat3.fromTranslation(Tcenter,[300,300]);
    
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    
    for (let i = 0; i < 20; i++) {
      var Tstar = mat3.create();
      var xOff = getRandomArbitrary(-300, 300);
      var yOff = getRandomArbitrary(-300, 300);
      var scale = getRandomArbitrary(0.5, 1.5);
      var rotation = getRandomArbitrary(0, 2*Math.PI);
      mat3.fromTranslation(Tstar,[xOff,yOff]);
      mat3.scale(Tstar,Tstar,[scale, scale]);
      mat3.rotate(Tstar,Tstar,rotation);
      mat3.multiply(Tstar, Tstar, Tcenter);
      DrawStar(Tstar);
    }
    
    tParam2 = tParam2 + 0.005;
    DrawPlanet(100 + 4*Math.sin(5*tParam2), Tcenter);
    
    var Tmove = mat3.create();
    mat3.fromTranslation(Tmove,[dx,0]);
    
    var Tscale = mat3.create();
    mat3.scale(Tscale,Tscale,[1-Math.abs(0.002*dx), 1]);
    
    var Tgreen_to_blue = mat3.create();
    mat3.fromTranslation(Tgreen_to_blue,Ccomp(tParam));
    var Tgreen_to_canvas = mat3.create();
    var tangent = Ccomp_tangent(tParam);
    tParam = tParam + (speed/200);
    var angle = Math.atan2(tangent[1],tangent[0]) + Math.PI/2;
    mat3.rotate(Tgreen_to_blue,Tgreen_to_blue,angle);
    mat3.multiply(Tgreen_to_canvas, Tblue_to_canvas, Tgreen_to_blue);
    //DrawSharingan("orange",Tgreen_to_canvas);
    
    var Tgoku = mat3.create();
    //mat3.multiply(Tgoku, Tgoku, Tcenter);
    mat3.multiply(Tgoku, Tgoku, Tgreen_to_canvas);
    mat3.multiply(Tgoku, Tgoku, Tmove);
    mat3.multiply(Tgoku, Tgoku, Tscale);
    
    if (box1.checked) {
      drawTrajectory(0.0,1.0,100,C0,Tblue_to_canvas,"red");
      drawTrajectory(0.0,1.0,100,C1,Tblue_to_canvas,"blue");
      drawTrajectory(0.0,1.0,100,C2,Tblue_to_canvas,"red");
      drawTrajectory(0.0,1.0,100,C3,Tblue_to_canvas,"blue");
    }
    
    if (box0.checked == false) {
      DrawGoku("orange",Tgoku);
    } else {
      DrawSuper("orange",Tgoku);
      tParam = tParam + 0.005;
      var Taura = mat3.create();
      var scalar = 1 + tParam2%0.1;
      mat3.multiply(Taura, Taura, Tgoku);
      mat3.scale(Taura,Taura,[scalar, scalar]);
      DrawAura(Taura);
    }
    
    window.requestAnimationFrame(draw);
  }
  window.requestAnimationFrame(draw);
}
window.onload = setup;