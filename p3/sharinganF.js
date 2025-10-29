function setup() { "use strict";
    var canvas = document.getElementById('myCanvas');
    var slider1 = document.getElementById('slider1');
    slider1.value = -200;
    var slider2 = document.getElementById('slider2');
    slider2.value = 0;
    var y = 0;
    var theta = 0;
    var four = 0;
    var ring = "red";
    var thick = 3;
    var hmod = 0;
    var speed = 1;
    var glow = 100;
    var closed = 1;
    var drawn = 0;
    function draw() {
      var context = canvas.getContext('2d');
      canvas.width = canvas.width;
      // use the sliders to get various parameters
      var dx = slider2.value;
      var level = slider1.value;
      
      function moveToTx(x,y,Tx)
      {var res=vec2.create(); vec2.transformMat3(res,[x,y],Tx); context.moveTo(res[0],res[1]);}

      function lineToTx(x,y,Tx)
      {var res=vec2.create(); vec2.transformMat3(res,[x,y],Tx); context.lineTo(res[0],res[1]);}
      
      function circleAtTx(x, y, r, Tx) {
        var res = vec2.create();
        vec2.transformMat3(res,[x,y],Tx);
        context.ellipse(res[0], res[1], r*(1-Math.abs(0.002*dx)), r, 0, 0, 2 * Math.PI);
      }
      
      function ellipseAtTx(x, y, r1, r2, Tx) {
        var res = vec2.create();
        vec2.transformMat3(res,[x,y],Tx);
        context.ellipse(res[0], res[1], r1, r2, 0, 0, 2 * Math.PI);
      }
      
      function glowAtTx(x, y, r, Tx) {
        var res = vec2.create();
        vec2.transformMat3(res,[x,y],Tx);
        context.ellipse(res[0], res[1], r, r, 0, 0, 2 * Math.PI);
      }
      
      function DrawSharingan(color,Tx) {
        
        context.beginPath(); //iris
        context.fillStyle = color;
        circleAtTx(0, 0, 50, Tx);
        context.fill();      
        context.stroke();
        
        context.beginPath(); //pupil
        context.fillStyle = "black";
        circleAtTx(0, 0, 12, Tx);
        context.fill();      
        context.stroke();
        
        context.beginPath(); //ring
        circleAtTx(0, 0, 33, Tx);
        context.stroke();
        
        context.beginPath(); //tomoe 1
        circleAtTx(0, -32, 8, Tx);
        moveToTx(6.5,-38,Tx);
        lineToTx(15,-30,Tx);
        lineToTx(0,-34,Tx)
        context.fill();    
        
        context.beginPath(); //tomoe 2
        mat3.rotate(Tx,Tx,2*Math.PI/3);
        circleAtTx(0, -32, 8, Tx);
        moveToTx(6.5,-38,Tx);
        lineToTx(15,-30,Tx);
        lineToTx(0, -34,Tx)
        context.fill();  
        
        context.beginPath(); //tomoe 3
        mat3.rotate(Tx,Tx,2*Math.PI/3);
        circleAtTx(0, -32, 8, Tx);
        moveToTx(6.5,-38,Tx);
        lineToTx(15,-30,Tx);
        lineToTx(0, -34,Tx)
        context.fill(); 
      }      
      
      function DrawSharingan1(color,Tx) {
        
        context.beginPath(); //iris
        context.fillStyle = color;
        circleAtTx(0, 0, 50, Tx);
        context.fill();      
        context.stroke();
        
        context.beginPath(); //pupil
        context.fillStyle = "black";
        circleAtTx(0, 0, 12, Tx);
        context.fill();      
        context.stroke();
        
        context.beginPath(); //ring
        circleAtTx(0, 0, 33, Tx);
        context.stroke();
        
        context.beginPath(); //tomoe 1
        circleAtTx(0, -32, 8, Tx);
        moveToTx(6.5,-38,Tx);
        lineToTx(15,-30,Tx);
        lineToTx(0,-34,Tx)
        context.fill();   
      }    
      
      function DrawSharingan2(color,Tx) {
        
        context.beginPath(); //iris
        context.fillStyle = color;
        circleAtTx(0, 0, 50, Tx);
        context.fill();      
        context.stroke();
        
        context.beginPath(); //pupil
        context.fillStyle = "black";
        circleAtTx(0, 0, 12, Tx);
        context.fill();      
        context.stroke();
        
        context.beginPath(); //ring
        circleAtTx(0, 0, 33, Tx);
        context.stroke();
        
        context.beginPath(); //tomoe 1
        circleAtTx(0, -32, 8, Tx);
        moveToTx(6.5,-38,Tx);
        lineToTx(15,-30,Tx);
        lineToTx(0,-34,Tx)
        context.fill();    
        
        context.beginPath(); //tomoe 2
        mat3.rotate(Tx,Tx,Math.PI);
        circleAtTx(0, -32, 8, Tx);
        moveToTx(6.5,-38,Tx);
        lineToTx(15,-30,Tx);
        lineToTx(0, -34,Tx)
        context.fill(); 
      }    
      
      function DrawSharingan3(color, width,Tx) {
        context.beginPath(); //iris
        context.fillStyle = "#e60000";
        circleAtTx(0, 0, 50, Tx);
        context.fill();      
        context.strokeStyle = color;
        context.lineWidth = width;
        context.stroke();
        
        context.beginPath(); //ring 
        circleAtTx(0, 0, 33, Tx);
        context.strokeStyle = "black";
        context.lineWidth = 1;
        context.stroke();
        
        context.beginPath(); //ring
        context.fillStyle = "black";
        circleAtTx(0, 0, 20, Tx);
        context.fill();
        
        context.beginPath(); //pupil
        context.fillStyle = "#e60000";
        circleAtTx(0, 0, 8, Tx);
        context.fill();      
        context.stroke();
        
        context.beginPath(); //tomoe 1
        context.fillStyle = "black";
        moveToTx(-20,-4,Tx);
        lineToTx(-16,-18,Tx);
        lineToTx(-12,-25,Tx);
        lineToTx(-2,-40,Tx);
        lineToTx(10,-48,Tx)
        lineToTx(3,-35,Tx)
        lineToTx(2,-26,Tx);
        lineToTx(10,-15,Tx);
        context.fill(); 
        
        context.beginPath();
        mat3.rotate(Tx,Tx,2*Math.PI/3);
        moveToTx(-20,-4,Tx);
        lineToTx(-16,-18,Tx);
        lineToTx(-12,-25,Tx);
        lineToTx(-2,-40,Tx);
        lineToTx(10,-48,Tx)
        lineToTx(3,-35,Tx)
        lineToTx(2,-26,Tx);
        lineToTx(10,-15,Tx);
        context.fill();
        
        context.beginPath();
        mat3.rotate(Tx,Tx,2*Math.PI/3);
        moveToTx(-20,-4,Tx);
        lineToTx(-16,-18,Tx);
        lineToTx(-12,-25,Tx);
        lineToTx(-2,-40,Tx);
        lineToTx(10,-48,Tx)
        lineToTx(3,-35,Tx)
        lineToTx(2,-26,Tx);
        lineToTx(10,-15,Tx);
        context.fill();
      }
      
      function DrawShine(Tx) {
        context.beginPath() ;
        context.fillStyle = "white";
        mat3.rotate(Tx,Tx,40*Math.PI/100);
        ellipseAtTx(0, -44, 2.5, 2.5, Tx);
        ellipseAtTx(0, 34, 6, 6, Tx);
        context.fill();
      }
      
      function DrawEye(Tx) {
        context.beginPath() ;
        context.fillStyle = "white";
        moveToTx(-120, 45,Tx);
        lineToTx(-80, -42,Tx);
        lineToTx(0, -65,Tx); 
        lineToTx(120, -67,Tx); 
        lineToTx(92, 42,Tx); 
        lineToTx(12, 72,Tx); 
        lineToTx(-80, 48,Tx);
        context.closePath();
        context.fill(); 
        
        context.beginPath() ;
        moveToTx(-132, 10,Tx); 
        lineToTx(-100, -57,Tx);
        lineToTx(-2, -85,Tx);
        lineToTx(90, -87,Tx);
        context.stroke();
        
        context.beginPath();
        context.fillStyle = "burlywood";
        moveToTx(-132, 10,Tx); 
        lineToTx(-125, -55,Tx)
        lineToTx(-85, -73,Tx)
        lineToTx(-2, -86,Tx)
        lineToTx(-100, -57,Tx);
        context.fill();
        
        
        context.beginPath();
        moveToTx(70, 70,Tx); 
        lineToTx(100, 50,Tx); 
        lineToTx(120, 25,Tx); 
        context.stroke()
        
        context.beginPath();
        moveToTx(70, 70,Tx); 
        lineToTx(110, 57,Tx); 
        lineToTx(120, 25,Tx); 
        lineToTx(100, 50,Tx); 
        context.fill()
        
        context.beginPath();
        context.fillStyle = "gainsboro";
        moveToTx(12, 72,Tx); 
        lineToTx(85, 35,Tx);
        lineToTx(100, 10,Tx)
        lineToTx(92, 42,Tx);
        context.fill();
        
        context.beginPath();
        moveToTx(-120, 45,Tx); 
        lineToTx(-65, -30,Tx);
        lineToTx(5, -47,Tx);
        lineToTx(105, -42,Tx);
        lineToTx(100, 10,Tx);
        lineToTx(120, -67,Tx);
        lineToTx(0, -65,Tx); 
        lineToTx(-80, -42,Tx);
        context.fill();
        
        context.beginPath();
        moveToTx(-120, 45,Tx);
        lineToTx(-80, -42,Tx);
        lineToTx(0, -65,Tx); 
        lineToTx(120, -67,Tx); 
        lineToTx(92, 42,Tx); 
        lineToTx(12, 72,Tx); 
        lineToTx(-80, 48,Tx);
        context.closePath();
        context.stroke() ;
        
        
        context.beginPath();
        context.fillStyle = "black";
        moveToTx(-150, -42,Tx);
        lineToTx(90, -150,Tx);
        lineToTx(50, -135,Tx); 
        lineToTx(-160, -50,Tx); 
        context.closePath();
        context.fill();
      }
      
      function DrawDrops(Tx) {
        context.beginPath();
        context.fillStyle = "firebrick";
        context.arc(Tx[6]-78, Tx[7]+50 + hmod, 5, 0, 2 * Math.PI);
        context.arc(Tx[6]+62, Tx[7]+57 + hmod, 7.5, 0, 2 * Math.PI);
        context.fill();
      }
      
      function DrawBlood(Tx) {
        context.beginPath();
        context.fillStyle = "firebrick";
        context.rect(Tx[6]-85,Tx[7]+48,15,y);
        context.rect(Tx[6]+50,Tx[7]+48,20,0.7*y);
        context.fill();
        y = (y + 5);
      }
      
      function DrawShadow(Tx) {
        context.beginPath();
        context.fillStyle = "burlywood";
        moveToTx(-115, 48,Tx);
        lineToTx(-18, 72,Tx);
        lineToTx(-60, 72,Tx);
        context.fill()
      }
      
      function DrawGlow(r,Tx) {
        context.beginPath();
        context.globalAlpha = 0.15;
        context.fillStyle = "red";
        if (r < 0) {
          r = 0;
        }
        glowAtTx(0,0,r,Tx);
        context.fill();
        context.globalAlpha = 1;
      }
      
      function DrawClosed(Tx) {
        context.beginPath() ;
        context.fillStyle = "blanchedalmond";
        moveToTx(-130, 45,Tx);
        lineToTx(-80, -52,Tx);
        lineToTx(0, -75,Tx); 
        lineToTx(130, -77,Tx); 
        lineToTx(92, 42,Tx); 
        lineToTx(12, 72,Tx); 
        lineToTx(-80, 48,Tx);
        context.closePath();
        context.fill(); 
        
        context.beginPath() ;
//         moveToTx(-120, 45,Tx);
        moveToTx(103,0,Tx);
        lineToTx(92, 27,Tx); 
        lineToTx(12, 62,Tx); 
        lineToTx(-80, 43,Tx);
        lineToTx(-120, 45,Tx);
        
//         lineToTx(120, -67,Tx); 
        context.stroke()
        drawn = 1;
      }
      
      function DrawBG() {
        context.beginPath();
        context.fillStyle = "blanchedalmond";
        context.rect(0,0,400,400)
        context.fill();
      }
      
      function SetSpeed(number) {
        speed = number;
        ring = "black";
        thick = 1;
        hmod = 1.5;
      }
      
      function OpenEye() {
        closed = 0;
        drawn = 0;
      }
      
      function CloseEye() {
        closed = 1;
        drawn = 0;
      }
      
      DrawBG();
      var Tcenter = mat3.create();
      mat3.fromTranslation(Tcenter,[200,200]);
      DrawShadow(Tcenter);
      
      if (four == 1) {
        DrawBlood(Tcenter);
      }
      
      DrawEye(Tcenter);
      
      if (level == 0) {
        setTimeout(CloseEye, 100);
        var Ttilt = mat3.create();
        mat3.rotate(Ttilt,Ttilt,-0.05*Math.PI);
        
        var Tmove = mat3.create();
        mat3.fromTranslation(Tmove,[dx,0]);
        
        var Tscale = mat3.create();
        mat3.scale(Tscale,Tscale,[1-Math.abs(0.002*dx), 1]);
        
        var Trotat = mat3.create();
        mat3.rotate(Trotat,Trotat,-theta);
        
        var Tshar = mat3.create();
        mat3.multiply(Tshar, Tcenter, Ttilt);
        mat3.multiply(Tshar, Tshar, Tmove);
        mat3.multiply(Tshar, Tshar, Tscale);
        mat3.multiply(Tshar, Tshar, Trotat);
        theta = theta + 0.01*Math.PI;
        DrawSharingan("black",Tshar);
        if (closed == 0) {
          DrawClosed(Tcenter);
        }
      } else if (level == 1) {
        setTimeout(OpenEye, 100);
        var Ttilt1 = mat3.create();
        mat3.rotate(Ttilt1,Ttilt1,-0.05*Math.PI);
        
        var Tmove1 = mat3.create();
        mat3.fromTranslation(Tmove1,[dx,0]);
        
        var Tscale1 = mat3.create();
        mat3.scale(Tscale1,Tscale1,[1-Math.abs(0.002*dx), 1]);
        
        var Trotat1 = mat3.create();
        mat3.rotate(Trotat1,Trotat1,-theta);
        
        var Tshar_1 = mat3.create();
        mat3.multiply(Tshar_1, Tcenter, Ttilt1);
        mat3.multiply(Tshar_1, Tshar_1, Tmove1);
        mat3.multiply(Tshar_1, Tshar_1, Tscale1);
        mat3.multiply(Tshar_1, Tshar_1, Trotat1);
        theta = theta + 0.01*Math.PI;
        DrawSharingan1("#e60000",Tshar_1);
        if (closed == 1) {
          DrawClosed(Tcenter);
        }
      } else if (level == 2) {
        var Ttilt2 = mat3.create();
        mat3.rotate(Ttilt2,Ttilt2,-0.05*Math.PI);
        
        var Tmove2 = mat3.create();
        mat3.fromTranslation(Tmove2,[dx,0]);
        
        var Tscale2 = mat3.create();
        mat3.scale(Tscale2,Tscale2,[1-Math.abs(0.002*dx), 1]);
        
        var Trotat2 = mat3.create();
        mat3.rotate(Trotat2,Trotat2,-theta);
        
        var Tshar_2 = mat3.create();
        mat3.multiply(Tshar_2, Tcenter, Ttilt2);
        mat3.multiply(Tshar_2, Tshar_2, Tmove2);
        mat3.multiply(Tshar_2, Tshar_2, Tscale2);
        mat3.multiply(Tshar_2, Tshar_2, Trotat2);
        theta = theta + 0.01*Math.PI;
        DrawSharingan2("#e60000",Tshar_2);
      } else if (level == 3) {
        var Ttilt3 = mat3.create();
        mat3.rotate(Ttilt3,Ttilt3,-0.05*Math.PI);
        
        var Tmove3 = mat3.create();
        mat3.fromTranslation(Tmove3,[dx,0]);
        
        var Tscale3 = mat3.create();
        mat3.scale(Tscale3,Tscale3,[1-Math.abs(0.002*dx), 1]);
        
        var Trotat3 = mat3.create();
        mat3.rotate(Trotat3,Trotat3,-theta);
        
        var Tshar_3 = mat3.create();
        mat3.multiply(Tshar_3, Tcenter, Ttilt3);
        mat3.multiply(Tshar_3, Tshar_3, Tmove3);
        mat3.multiply(Tshar_3, Tshar_3, Tscale3);
        mat3.multiply(Tshar_3, Tshar_3, Trotat3);
        theta = theta + 0.01*Math.PI;
        DrawSharingan("#e60000",Tshar_3);
        SetSpeed(10);
        ring = "red";
        thick = 3;
        hmod = 0;
        glow = 160;
      } else {
        setTimeout(SetSpeed, 750, 2);
        four = 1;
        glow = glow - 4;
        DrawDrops(Tcenter);
        var Ttilt4 = mat3.create();
        mat3.rotate(Ttilt4,Ttilt4,-0.05*Math.PI);
        
        var Tmove4 = mat3.create();
        mat3.fromTranslation(Tmove4,[dx,0]);
        
        var Tscale4 = mat3.create();
        mat3.scale(Tscale4,Tscale4,[1-Math.abs(0.002*dx), 1]);
        
        var Trotat4 = mat3.create();
        mat3.rotate(Trotat4,Trotat4,-theta);
        
        var Tshar_4 = mat3.create();
        mat3.multiply(Tshar_4, Tcenter, Ttilt4);
        mat3.multiply(Tshar_4, Tshar_4, Tmove4);
        mat3.multiply(Tshar_4, Tshar_4, Tscale4);
        mat3.multiply(Tshar_4, Tshar_4, Trotat4);
        theta = theta + (0.01*Math.PI*speed);
        DrawSharingan3(ring, thick,Tshar_4);
        DrawGlow(glow,Tshar_4);
      }
      
      //DrawClosed(Tcenter);
      
      var TtiltS = mat3.create();
        mat3.rotate(TtiltS,TtiltS,-0.05*Math.PI);
        
      var TmoveS = mat3.create();
      mat3.fromTranslation(TmoveS,[dx,0]);
      
      var Tshine = mat3.create();
      mat3.multiply(Tshine, Tcenter, TtiltS);
      mat3.multiply(Tshine, Tshine, TmoveS);
      if (drawn == 0) {
        DrawShine(Tshine);
      }
      
      window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
  }
  window.onload = setup;