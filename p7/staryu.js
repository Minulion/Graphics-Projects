function start() {

    // Get canvas, WebGL context, twgl.m4
    var canvas = document.getElementById("mycanvas");
    var gl = canvas.getContext("webgl");

    // Sliders at center
    var slider1 = document.getElementById('slider1');
    slider1.value = 100;

    var slider2 = document.getElementById('slider2');
    slider2.value = 100;

    var time = 0;

    // Read shader source
    var vertexSource = document.getElementById("vertexShader").text;
    var fragmentSource = document.getElementById("fragmentShader").text;

    // Compile vertex shader
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader,vertexSource);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      alert(gl.getShaderInfoLog(vertexShader)); return null; }
    
    // Compile fragment shader
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader,fragmentSource);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      alert(gl.getShaderInfoLog(fragmentShader)); return null; }
    
    // Attach the shaders and link
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      alert("Could not initialize shaders"); }
    gl.useProgram(shaderProgram);	    
    
    // with the vertex shader, we need to pass it positions
    // as an attribute - so set up that communication
    shaderProgram.PositionAttribute = gl.getAttribLocation(shaderProgram, "vPosition");
    gl.enableVertexAttribArray(shaderProgram.PositionAttribute);
    
    shaderProgram.NormalAttribute = gl.getAttribLocation(shaderProgram, "vNormal");
    gl.enableVertexAttribArray(shaderProgram.NormalAttribute);
    
    shaderProgram.ColorAttribute = gl.getAttribLocation(shaderProgram, "vColor");
    gl.enableVertexAttribArray(shaderProgram.ColorAttribute);
   
    // this gives us access to the matrix uniform
    shaderProgram.MVmatrix = gl.getUniformLocation(shaderProgram,"uMV");
    shaderProgram.MVNormalmatrix = gl.getUniformLocation(shaderProgram,"uMVn");
    shaderProgram.MVPmatrix = gl.getUniformLocation(shaderProgram,"uMVP");

    // Data ...
    
    // vertex positions
    var vertexPos = new Float32Array(
        [  0, 0, 20,  0, 0.01*slider1.value*100, 0,  30*Math.cos(Math.PI/2-Math.PI/5), 30*Math.sin(Math.PI/2-Math.PI/5), 0,
           0, 0, 20,  0, 0.01*slider1.value*100, 0,  -30*Math.cos(Math.PI/2-Math.PI/5), 30*Math.sin(Math.PI/2-Math.PI/5), 0,
           0, 0, 20,  0.01*slider1.value*100*Math.cos(Math.PI/2-2*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-2*Math.PI/5), 0,   30*Math.cos(Math.PI/2-6*Math.PI/10), 30*Math.sin(Math.PI/2-6*Math.PI/10), 0, 
           0, 0, 20,  0.01*slider1.value*100*Math.cos(Math.PI/2-2*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-2*Math.PI/5), 0,   30*Math.cos(Math.PI/2-2*Math.PI/10), 30*Math.sin(Math.PI/2-2*Math.PI/10), 0, 
           0, 0, 20,  0.01*slider1.value*100*Math.cos(Math.PI/2-4*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-4*Math.PI/5), 0,   0, -30, 0, 
           0, 0, 20,  0.01*slider1.value*100*Math.cos(Math.PI/2-4*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-4*Math.PI/5), 0,   30*Math.cos(Math.PI/2-6*Math.PI/10), 30*Math.sin(Math.PI/2-6*Math.PI/10), 0,
           0, 0, 20,  -0.01*slider1.value*100*Math.cos(Math.PI/2-4*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-4*Math.PI/5), 0,   0, -30, 0, 
           0, 0, 20,  -0.01*slider1.value*100*Math.cos(Math.PI/2-4*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-4*Math.PI/5), 0,   -30*Math.cos(Math.PI/2-6*Math.PI/10), 30*Math.sin(Math.PI/2-6*Math.PI/10), 0,
           0, 0, 20,  -0.01*slider1.value*100*Math.cos(Math.PI/2-2*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-2*Math.PI/5), 0,   -30*Math.cos(Math.PI/2-6*Math.PI/10), 30*Math.sin(Math.PI/2-6*Math.PI/10), 0,
           0, 0, 20,  -0.01*slider1.value*100*Math.cos(Math.PI/2-2*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-2*Math.PI/5), 0,   -30*Math.cos(Math.PI/2-2*Math.PI/10), 30*Math.sin(Math.PI/2-2*Math.PI/10), 0,  
           0, 0, -20,  0, 0.01*slider1.value*100, 0,  30*Math.cos(Math.PI/2-2*Math.PI/10), 30*Math.sin(Math.PI/2-2*Math.PI/10), 0,
           0, 0, -20,  0, 0.01*slider1.value*100, 0,  -30*Math.cos(Math.PI/2-2*Math.PI/10), 30*Math.sin(Math.PI/2-2*Math.PI/10), 0,
           0, 0, -20,  0.01*slider1.value*100*Math.cos(Math.PI/2-2*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-2*Math.PI/5), 0,   30*Math.cos(Math.PI/2-6*Math.PI/10), 30*Math.sin(Math.PI/2-6*Math.PI/10), 0, 
           0, 0, -20,  0.01*slider1.value*100*Math.cos(Math.PI/2-2*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-2*Math.PI/5), 0,   30*Math.cos(Math.PI/2-2*Math.PI/10), 30*Math.sin(Math.PI/2-2*Math.PI/10), 0, 
           0, 0, -20,  0.01*slider1.value*100*Math.cos(Math.PI/2-4*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-4*Math.PI/5), 0,   0, -30, 0, 
           0, 0, -20,  0.01*slider1.value*100*Math.cos(Math.PI/2-4*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-4*Math.PI/5), 0,   30*Math.cos(Math.PI/2-6*Math.PI/10), 30*Math.sin(Math.PI/2-6*Math.PI/10), 0,
           0, 0, -20,  -0.01*slider1.value*100*Math.cos(Math.PI/2-4*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-4*Math.PI/5), 0,   0, -30, 0, 
           0, 0, -20,  -0.01*slider1.value*100*Math.cos(Math.PI/2-4*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-4*Math.PI/5), 0,   -30*Math.cos(Math.PI/2-6*Math.PI/10), 30*Math.sin(Math.PI/2-6*Math.PI/10), 0,
           0, 0, -20,  -0.01*slider1.value*100*Math.cos(Math.PI/2-2*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-2*Math.PI/5), 0,   -30*Math.cos(Math.PI/2-6*Math.PI/10), 30*Math.sin(Math.PI/2-6*Math.PI/10), 0,
           0, 0, -20,  -0.01*slider1.value*100*Math.cos(Math.PI/2-2*Math.PI/5), 0.01*slider1.value*100*Math.sin(Math.PI/2-2*Math.PI/5), 0,   -30*Math.cos(Math.PI/2-2*Math.PI/10), 30*Math.sin(Math.PI/2-2*Math.PI/10), 0 ]);

    // vertex normals
    var vertexNormals = new Float32Array(
      [ -0.64, -0.15, -0.75,  -0.64, -0.15, -0.75,  -0.64, -0.15, -0.75,
        -0.64,  0.15,  0.75,  -0.64,  0.15,  0.75,  -0.64,  0.15,  0.75,
        -0.34,  0.57, -0.75,  -0.34,  0.57, -0.75,  -0.34,  0.57, -0.75, 
        -0.06,  0.66,  0.75,  -0.06,  0.66,  0.75,  -0.06,  0.66,  0.75, 
        0.19,  0.54, -0.82,  0.19,  0.54, -0.82,  0.19,  0.54, -0.82, 
        0.58,  0.61,  0.54,  0.58,  0.61,  0.54,  0.58,  0.61,  0.54, 
        0.19, -0.54,  0.82,  0.19, -0.54,  0.82,  0.19, -0.54,  0.82, 
        0.58, -0.61, -0.54,  0.58, -0.61, -0.54,  0.58, -0.61, -0.54,
        -0.34, -0.57,  0.75,  -0.34, -0.57,  0.75,  -0.34, -0.57,  0.75, 
        -0.06, -0.66, -0.75,  -0.06, -0.66, -0.75,  -0.06, -0.66, -0.75, 

        0.64, 0.15, -0.75,  0.64, 0.15, -0.75,  0.64, 0.15, -0.75,
        0.64,  -0.15,  0.75,  0.64,  -0.15,  0.75,  0.64,  -0.15,  0.75,
        0.34,  -0.57, -0.75,  0.34,  -0.57, -0.75,  0.34,  -0.57, -0.75, 
        0.06,  -0.66,  0.75,  0.06,  -0.66,  0.75,  0.06,  -0.66,  0.75, 
        -0.19,  -0.54, -0.82,  -0.19,  -0.54, -0.82,  -0.19,  -0.54, -0.82, 
        -0.58,  -0.61,  0.54,  -0.58,  -0.61,  0.54,  -0.58,  -0.61,  0.54, 
        -0.19, 0.54,  0.82,  -0.19, 0.54,  0.82,  -0.19, 0.54,  0.82, 
        -0.58, 0.61, -0.54,  -0.58, 0.61, -0.54,  -0.58, 0.61, -0.54,
        0.34, 0.57,  0.75,  0.34, 0.57,  0.75,  0.34, 0.57,  0.75, 
        0.06, 0.66, -0.75,  0.06, 0.66, -0.75,  0.06, 0.66, -0.75 ]);

    // vertex colors
    var vertexColors = new Float32Array(
        [  1, 0, 0,   0, 1, 1,   1, 1, 0,   
           1, 0, 0,   0, 1, 1,   1, 1, 0,   
           1, 0, 0,   0, 1, 1,   1, 1, 0,   
           1, 0, 0,   0, 1, 1,   1, 1, 0,   
           1, 0, 0,   0, 1, 1,   1, 1, 0,
           1, 0, 0,   0, 1, 1,   1, 1, 0,   
           1, 0, 0,   0, 1, 1,   1, 1, 0,   
           1, 0, 0,   0, 1, 1,   1, 1, 0,   
           1, 0, 0,   0, 1, 1,   1, 1, 0,   
           1, 0, 0,   0, 1, 1,   1, 1, 0,
           1, 0, 0,   0, 1, 1,   1, 1, 0,  
           1, 0, 0,   0, 1, 1,   1, 1, 0,   
           1, 0, 0,   0, 1, 1,   1, 1, 0,   
           1, 0, 0,   0, 1, 1,   1, 1, 0,   
           1, 0, 0,   0, 1, 1,  1, 1, 0,
           1, 0, 0,   0, 1, 1,   1, 1, 0,   
           1, 0, 0,   0, 1, 1,   1, 1, 0,  
           1, 0, 0,   0, 1, 1,   1, 1, 0,   
           1, 0, 0,   0, 1, 1,   1, 1, 0,   
           1, 0, 0,   0, 1, 1,   1, 1, 0, ]);

    // element index array
    var triangleIndices = new Uint8Array(
        [  0, 1, 2,   3, 4, 5,    // front
           6, 7, 8,   9, 10, 11,    // right
           12,13,14,   15,16,17,    // top
          18,19,20,  21,22,23,    // left
          24,25,26,  27,28,29,    // bottom
	        30,31,32,  33,34,35,
          36,37,38,  39,40,41,
          42,43,44,  45,46,47,
          48,49,50,  51,52,53,
          54,55,56,  57,58,59 ]); // back

    // we need to put the vertices into a buffer so we can
    // block transfer them to the graphics hardware
    var trianglePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexPos, gl.STATIC_DRAW);
    trianglePosBuffer.itemSize = 3;
    trianglePosBuffer.numItems = 60;
    
    // a buffer for normals
    var triangleNormalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleNormalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexNormals, gl.STATIC_DRAW);
    triangleNormalBuffer.itemSize = 3;
    triangleNormalBuffer.numItems = 60;
    
    // a buffer for colors
    var colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexColors, gl.STATIC_DRAW);
    colorBuffer.itemSize = 3;
    colorBuffer.numItems = 60;

    // a buffer for indices
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, triangleIndices, gl.STATIC_DRAW);    

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

    // Scene (re-)draw routine
    function draw() {
    

        // Translate slider values to angles in the [-pi,pi] interval
        var angle1 = slider1.value*0.01*Math.PI;
        var angle2 = slider2.value*0.01
    
        // Circle around the y-axis
        var eye = [400*Math.sin(angle1),150.0,400.0*Math.cos(angle1)];
        var target = [0,0,0];
        var up = [0,1,0];
    
        var tModel = mat4.create();
        time += 0.05;
        //mat4.fromScaling(tModel,[angle2,angle2,angle2]);
        mat4.fromTranslation(tModel,Ccomp(time*0.1));
        var tScale = mat4.create();
        mat4.fromScaling(tScale,[angle2,angle2,angle2]);
        mat4.multiply(tModel, tModel, tScale);
        mat4.rotate(tModel,tModel,time,[0,0,1]);
      
        var tCamera = mat4.create();
        mat4.lookAt(tCamera, eye, target, up);      

        var tProjection = mat4.create();
        mat4.perspective(tProjection,Math.PI/4,1,10,1000);
      
        var tMV = mat4.create();
        var tMVn = mat3.create();
        var tMVP = mat4.create();
        mat4.multiply(tMV,tCamera,tModel); // "modelView" matrix
        mat3.normalFromMat4(tMVn,tMV);
        mat4.multiply(tMVP,tProjection,tMV);
      
        // Clear screen, prepare for rendering
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    
        // Set up uniforms & attributes
        gl.uniformMatrix4fv(shaderProgram.MVmatrix,false,tMV);
        gl.uniformMatrix3fv(shaderProgram.MVNormalmatrix,false,tMVn);
        gl.uniformMatrix4fv(shaderProgram.MVPmatrix,false,tMVP);
                 
        gl.bindBuffer(gl.ARRAY_BUFFER, trianglePosBuffer);
        gl.vertexAttribPointer(shaderProgram.PositionAttribute, trianglePosBuffer.itemSize,
          gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, triangleNormalBuffer);
        gl.vertexAttribPointer(shaderProgram.NormalAttribute, triangleNormalBuffer.itemSize,
          gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.vertexAttribPointer(shaderProgram.ColorAttribute, colorBuffer.itemSize,
          gl.FLOAT,false, 0, 0);

        // Do the drawing
        gl.drawElements(gl.TRIANGLES, triangleIndices.length, gl.UNSIGNED_BYTE, 0);
        window.requestAnimationFrame(draw);
    }

    window.requestAnimationFrame(draw);
}

window.onload=start;
