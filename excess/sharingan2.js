function setup() { "use strict";
    var canvas = document.getElementById('myCanvas');
    var slider1 = document.getElementById('slider1');
    slider1.value = -200;
    var slider2 = document.getElementById('slider2');
    slider2.value = 0;
    var y = 0;
    var theta = 0;
    var four = 0;
    function draw() {
      var context = canvas.getContext('2d');
      canvas.width = canvas.width;
      // use the sliders to get various parameters
      var dx = slider2.value;
      var level = slider1.value;
      
      function DrawSharingan(color) {
        
        context.beginPath(); //iris
        context.fillStyle = color;
        context.arc(0, 0, 50, 0, 2 * Math.PI);
        context.fill();      
        context.stroke();
        
        context.beginPath(); //pupil
        context.fillStyle = "black";
        context.arc(0, 0, 12, 0, 2 * Math.PI);
        context.fill();      
        context.stroke();
        
        context.beginPath(); //ring
        context.arc(0, 0, 33, 0, 2 * Math.PI);   
        context.stroke();
        
        context.beginPath(); //tomoe 1
        context.arc(0, -32, 8, 0, 2 * Math.PI);
        context.moveTo(6.5,-38);
        context.lineTo(15,-30);
        context.lineTo(0, -34)
        context.fill();    
        
        context.beginPath(); //tomoe 2
        context.save();
        context.rotate(2*Math.PI/3);
        context.arc(0, -32, 8, 0, 2 * Math.PI);
        context.moveTo(6.5,-38);
        context.lineTo(15,-30);
        context.lineTo(0, -34)
        context.restore();
        context.fill();  
        
        context.beginPath(); //tomoe 3
        context.save();
        context.rotate(4*Math.PI/3);
        context.arc(0, -32, 8, 0, 2 * Math.PI);
        context.moveTo(6.5,-38);
        context.lineTo(15,-30);
        context.lineTo(0, -34)
        context.restore();
        context.fill(); 
      }      
      
      function DrawSharingan1(color) {
        
        context.beginPath(); //iris
        context.fillStyle = color;
        context.arc(0, 0, 50, 0, 2 * Math.PI);
        context.fill();      
        context.stroke();
        
        context.beginPath(); //pupil
        context.fillStyle = "black";
        context.arc(0, 0, 12, 0, 2 * Math.PI);
        context.fill();      
        context.stroke();
        
        context.beginPath(); //ring
        context.arc(0, 0, 33, 0, 2 * Math.PI);   
        context.stroke();
        
        context.beginPath(); //tomoe 1
        context.arc(0, -32, 8, 0, 2 * Math.PI);
        context.moveTo(6.5,-38);
        context.lineTo(15,-30);
        context.lineTo(0, -34)
        context.fill();    
      }    
      
      function DrawSharingan2(color) {
        
        context.beginPath(); //iris
        context.fillStyle = color;
        context.arc(0, 0, 50, 0, 2 * Math.PI);
        context.fill();      
        context.stroke();
        
        context.beginPath(); //pupil
        context.fillStyle = "black";
        context.arc(0, 0, 12, 0, 2 * Math.PI);
        context.fill();      
        context.stroke();
        
        context.beginPath(); //ring
        context.arc(0, 0, 33, 0, 2 * Math.PI);   
        context.stroke();
        
        context.beginPath(); //tomoe 1
        context.arc(0, -32, 8, 0, 2 * Math.PI);
        context.moveTo(6.5,-38);
        context.lineTo(15,-30);
        context.lineTo(0, -34)
        context.fill();    
        
        context.beginPath(); //tomoe 2
        context.save();
        context.rotate(Math.PI);
        context.arc(0, -32, 8, 0, 2 * Math.PI);
        context.moveTo(6.5,-38);
        context.lineTo(15,-30);
        context.lineTo(0, -34)
        context.restore();
        context.fill();  
      }    
      
      function DrawSharingan3(color) {
        context.beginPath(); //iris
        context.fillStyle = color;
        context.arc(0, 0, 50, 0, 2 * Math.PI);
        context.fill();      
        context.stroke();
        
        context.beginPath(); //ring
        context.arc(0, 0, 33, 0, 2 * Math.PI);   
        context.stroke();
        
        context.beginPath(); //ring
        context.fillStyle = "black";
        context.arc(0, 0, 20, 0, 2 * Math.PI);   
        context.fill();
        
        context.beginPath(); //pupil
        context.fillStyle = "red";
        context.arc(0, 0, 8, 0, 2 * Math.PI);
        context.fill();      
        context.stroke();
        
        context.beginPath(); //tomoe 1
        context.fillStyle = "black";
        context.moveTo(-20,-4);
        context.lineTo(-16,-18);
        context.lineTo(-12,-25);
        context.lineTo(-2,-40);
        context.lineTo(10,-48)
        context.lineTo(3,-35)
        context.lineTo(2,-26);
        context.lineTo(10,-15);
        context.fill(); 
        
        context.beginPath();
        context.save();
        context.rotate(2*Math.PI/3);
        context.moveTo(-20,-4);
        context.lineTo(-16,-18);
        context.lineTo(-12,-25);
        context.lineTo(-2,-40);
        context.lineTo(10,-48)
        context.lineTo(3,-35)
        context.lineTo(2,-26);
        context.lineTo(10,-15);
        context.restore();
        context.fill();
        
        context.beginPath();
        context.save();
        context.rotate(4*Math.PI/3);
        context.moveTo(-20,-4);
        context.lineTo(-16,-18);
        context.lineTo(-12,-25);
        context.lineTo(-2,-40);
        context.lineTo(10,-48)
        context.lineTo(3,-35)
        context.lineTo(2,-26);
        context.lineTo(10,-15);
        context.restore();
        context.fill();
        
      }
      
      function DrawShine() {
        context.beginPath() ;
        context.fillStyle = "white";
        context.save();
        context.rotate(40*Math.PI/100);
        //context.rotate(Math.PI/3);
        //context.ellipse(0, -40, 11, 5, 0, 0, 2 * Math.PI);
        context.ellipse(0, -44, 2.5, 4, 0, 0, 2 * Math.PI);
        context.ellipse(0, 34, 6, 12, 0, 0, 2 * Math.PI);
        context.restore();
        context.fill();
      }
      
      function DrawEye() {
        context.beginPath() ;
        context.fillStyle = "white";
        context.moveTo(-120, 45);
        context.lineTo(-80, -42);
        context.lineTo(0, -65); 
        context.lineTo(120, -67); 
        context.lineTo(92, 42); 
        context.lineTo(12, 72); 
        context.lineTo(-80, 48);
        context.closePath();
        context.fill(); 
        context.stroke() ;
        
        context.beginPath() ;
        context.moveTo(-132, 10); 
        context.lineTo(-100, -57);
        context.lineTo(-2, -85);
        context.lineTo(90, -87);
        context.stroke();
        
        context.beginPath();
        context.fillStyle = "burlywood";
        context.moveTo(-132, 10); 
        context.lineTo(-125, -55)
        context.lineTo(-85, -73)
        context.lineTo(-2, -86)
        context.lineTo(-100, -57);
        context.fill();
        
        
        context.beginPath();
        context.moveTo(70, 70); 
        context.lineTo(100, 50); 
        context.lineTo(120, 25); 
        context.stroke()
        
        context.beginPath();
        context.moveTo(70, 70); 
        context.lineTo(110, 57); 
        context.lineTo(120, 25); 
        context.lineTo(100, 50); 
        context.fill()
        
        
        context.beginPath();
        context.fillStyle = "black";
        context.moveTo(-150, -42);
        context.lineTo(90, -150);
        context.lineTo(50, -135); 
        context.lineTo(-160, -50); 
        context.closePath();
        context.fill();
        
//         context.beginPath();
//         context.strokeStyle = "firebrick";
//         context.moveTo(-95, 0);
//         context.lineTo(-80, 5);
//         context.lineTo(-70, 5);
//         context.lineTo(-65, 0);
//         context.moveTo(-70, 5);
//         context.lineTo(-60, 10);
//         context.stroke();
//         context.strokeStyle = "black";
      }
      
      function DrawDrops() {
        context.beginPath();
        context.fillStyle = "firebrick";
        context.arc(-78, 50, 5, 0, 2 * Math.PI);
        context.arc(62, 57, 7.5, 0, 2 * Math.PI);
        context.fill();
      }
      
      function DrawBlood() {
        context.beginPath();
        context.fillStyle = "firebrick";
        context.rect(-85,48,15,y);
        context.rect(50,48,20,0.7*y);
        context.fill();
        y = (y + 5);
      }
      
      function DrawShadow() {
        context.beginPath();
        context.fillStyle = "burlywood";
        context.moveTo(-115, 48);
        context.lineTo(-18, 72);
        context.lineTo(-60, 72);
        context.fill()
      }
      
      function DrawBG() {
        context.beginPath();
        context.fillStyle = "blanchedalmond";
        context.rect(0,0,400,400)
        context.fill();
      }
      
//       function DrawTest() {
//         context.beginPath();
//         context.fillStyle = "blue";
//         context.rect(dx,y,50,50);
//         context.fill();
//         y = (y + 2) % 100;
//       }
      DrawBG();
      context.save();
      context.translate(200,200)
      DrawShadow();
      context.restore();
      //DrawTest();
      
      if (four == 1) {
        context.save();
        context.translate(200,200)
        //y = 0;
        DrawBlood();
        context.restore();
      }
      
      context.save();
      context.translate(200,200)
      DrawEye();
      //DrawDrops();
      context.restore();
      
      if (four == 1) {
        context.save();
        context.translate(200,200)
        //y = 0;
        DrawDrops();
        context.restore();
      }
      
//       context.save();
//       context.translate(200,200)
//       context.rotate(-0.05*Math.PI);
//       context.translate(dx,0);
//       context.scale(1-Math.abs(0.002*dx), 1);
//       context.rotate(-theta);
//       theta = theta + 0.01*Math.PI;
//       DrawSharingan("red");
//       context.restore();
      
      if (level == 0) {
        context.save();
        context.translate(200,200)
        context.rotate(-0.05*Math.PI);
        //context.scale(1-Math.abs(0.002*dx), 1);
        context.translate(dx,0);
        context.scale(1-Math.abs(0.002*dx), 1);
        context.rotate(-theta);
        theta = theta + 0.01*Math.PI;
        DrawSharingan("black");
        context.restore();
      } else if (level == 1) {
        context.save();
        context.translate(200,200)
        context.rotate(-0.05*Math.PI);
        //context.scale(1-Math.abs(0.002*dx), 1);
        context.translate(dx,0);
        context.scale(1-Math.abs(0.002*dx), 1);
        context.rotate(-theta);
        theta = theta + 0.01*Math.PI;
        DrawSharingan1("red");
        context.restore();
      } else if (level == 2) {
        context.save();
        context.translate(200,200)
        context.rotate(-0.05*Math.PI);
        //context.scale(1-Math.abs(0.002*dx), 1);
        context.translate(dx,0);
        context.scale(1-Math.abs(0.002*dx), 1);
        context.rotate(-theta);
        theta = theta + 0.01*Math.PI;
        DrawSharingan2("red");
        context.restore();
      } else if (level == 3) {
        context.save();
        context.translate(200,200)
        context.rotate(-0.05*Math.PI);
        //context.scale(1-Math.abs(0.002*dx), 1);
        context.translate(dx,0);
        context.scale(1-Math.abs(0.002*dx), 1);
        context.rotate(-theta);
        theta = theta + 0.01*Math.PI;
        DrawSharingan("red");
        context.restore();
      } else {
        four = 1;
        context.save();
        context.translate(200,200)
        context.rotate(-0.05*Math.PI);
        //context.scale(1-Math.abs(0.002*dx), 1);
        context.translate(dx,0);
        context.scale(1-Math.abs(0.002*dx), 1);
        context.rotate(-theta);
        theta = theta + 0.01*Math.PI;
        DrawSharingan3("red");
        context.restore();
      }
      
      context.save();
      context.translate(200,200)
      context.rotate(-0.05*Math.PI);
      //context.scale(1-Math.abs(0.002*dx), 1);
      context.translate(dx,0);
      //context.scale(1-Math.abs(0.002*dx), 1);
      DrawShine();
      context.restore();
      
//       context.save();
//       context.translate(200,200)
//       DrawClosed();
//       context.restore();
      
      window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
  }
  window.onload = setup;