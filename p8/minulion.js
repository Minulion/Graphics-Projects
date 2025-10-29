function start() {

    // Get canvas, WebGL context, twgl.m4
    var canvas = document.getElementById("mycanvas");
    var gl = canvas.getContext("webgl");

    // Sliders at center
    var slider1 = document.getElementById('slider1');
    slider1.value = 0;
    var slider2 = document.getElementById('slider2');
    slider2.value = 50;

    var box1 = document.getElementById('box1');
    box1.value = 0;

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
    
    shaderProgram.texcoordAttribute = gl.getAttribLocation(shaderProgram, "vTexCoord");
    gl.enableVertexAttribArray(shaderProgram.texcoordAttribute);
   
    // this gives us access to the matrix uniform
    shaderProgram.MVmatrix = gl.getUniformLocation(shaderProgram,"uMV");
    shaderProgram.MVNormalmatrix = gl.getUniformLocation(shaderProgram,"uMVn");
    shaderProgram.MVPmatrix = gl.getUniformLocation(shaderProgram,"uMVP");

    // Attach samplers to texture units
    shaderProgram.texSampler1 = gl.getUniformLocation(shaderProgram, "texSampler1");
    gl.uniform1i(shaderProgram.texSampler1, 0);
    shaderProgram.texSampler2 = gl.getUniformLocation(shaderProgram, "texSampler2");
    gl.uniform1i(shaderProgram.texSampler2, 1);
    shaderProgram.texSampler3 = gl.getUniformLocation(shaderProgram, "texSampler3");
    gl.uniform1i(shaderProgram.texSampler3, 2);

    // Data ...
    
    // vertex positions
    var vertexPos = new Float32Array(
        [  0, 0, 0,  15,-50, 30,  -15, -50, 30,
            0, -100, 85,  30, -100, 80,  -30, -100, 80, 
            0,-130, 80,   30,-150, 70,   -30,-150, 70, 
            80, 10, -10,  75, -45, 25,  85,-55, 20, 
            45,-70, 30,   60,-105, 50,   
           -80, 10, -10,  -75, -45, 25,  -85,-55, 20, 
           -45,-70, 30,   -60,-105, 50,
        
           0, 120, -50,  0, 0, 15,  90, 10, -20,  -90, 10, -20,
           0, 50, -40,  40, 30, -20,  100, 15, -40,  120, 110, -80, 
           -40, 30, -20,  -100, 15, -40,  -120, 110, -80, 
           0,-260, 20,  0, -150, 30,  65, -120, -10,  -65, -120, -10, 
           85,-60, 0,  65,-210,-10,  115,-55, -30,
           -85,-60, 0,  -65,-210,-10,  -115,-55, -30,
           95,-50,0,  80, 0,0,  145,-75,-50,  100, 10,-30,
           -95,-50,0,  -80, 0,0,  -145,-75,-50,  -100, 10,-30,
           70, 10, 5,  100,-20,-10,  150, 0,-60,  85,40,-35,
           -70, 10, 5,  -100,-20,-10,  -150, 0,-60,  -85,40,-35,

           0,-60,-120]);

    // vertex normals
    var vertexNormals = new Float32Array(
        [  0, 0, 0,  15,-50, 30,  -15, -50, 30,
            0, -100, 85,  30, -100, 80,  -30, -100, 80, 
            0,-130, 80,   30,-150, 70,   -30,-150, 70, 
            80, 10, -10,  75, -45, 25,  85,-55, 20, 
            45,-70, 30,   60,-105, 50,   
           -80, 10, -10,  -75, -45, 25,  -85,-55, 20, 
           -45,-70, 30,   -60,-105, 50,
        
           0, 120, -50,  0, 0, 15,  90, 10, -20,  -90, 10, -20,
           0, 50, -40,  40, 30, -20,  100, 15, -40,  120, 110, -80, 
           -40, 30, -20,  -100, 15, -40,  -120, 110, -80, 
           0,-260, 20,  0, -150, 30,  65, -120, -10,  -65, -120, -10, 
           85,-60, 0,  65,-210,-10,  115,-55, -30,
           -85,-60, 0,  -65,-210,-10,  -115,-55, -30,
           95,-50,0,  80, 0,0,  145,-75,-50,  100, 10,-30,
           -95,-50,0,  -80, 0,0,  -145,-75,-50,  -100, 10,-30,
           70, 10, 5,  100,-20,-10,  150, 0,-60,  85,40,-35,
           -70, 10, 5,  -100,-20,-10,  -150, 0,-60,  -85,40,-35,

           0,-60,-120]);

    // vertex colors
    var vertexColors = new Float32Array(
        [  0, 0, 1,   0, 0, 1,   0, 0, 1,   0, 0, 1,
           1, 0, 0,   1, 0, 0,   1, 0, 0,   1, 0, 0,
           0, 1, 0,   0, 1, 0,   0, 1, 0,   0, 1, 0,
           1, 1, 0,   1, 1, 0,   1, 1, 0,   1, 1, 0,
           1, 0, 1,   1, 0, 1,   1, 0, 1,   1, 0, 1,
           0, 1, 1,   0, 1, 1,   0, 1, 1,   0, 1, 1,
           0, 0, 1,   0, 0, 1,   0, 0, 1,   0, 0, 1,
           1, 0, 0,   1, 0, 0,   1, 0, 0,   1, 0, 0,
           0, 1, 0,   0, 1, 0,   0, 1, 0,   0, 1, 0,
           1, 1, 0,   1, 1, 0,   1, 1, 0,   1, 1, 0,
           1, 0, 1,   1, 0, 1,   1, 0, 1,   1, 0, 1,
           0, 1, 1,   0, 1, 1,   0, 1, 1,   0, 1, 1,
           0, 0, 1,   0, 0, 1,   0, 0, 1,   0, 0, 1,
           1, 0, 0,   1, 0, 0,   1, 0, 0,   1, 0, 0,
           0, 1, 0,   0, 1, 0,   0, 1, 0,   0, 1, 0,
           1, 1, 0,   1, 1, 0,   1, 1, 0,   1, 1, 0,
           1, 0, 1,   1, 0, 1,   1, 0, 1,   1, 0, 1,
           0, 1, 1,   0, 1, 1,   0, 1, 1,   0, 1, 1
        ]);
    
    // vertex texture coordinates
    var vertexTextureCoords = new Float32Array(
        [0.5, 0.6842105263157895,
 0.55, 0.5526315789473685,
 0.45, 0.5526315789473685,
 0.5, 0.42105263157894735,
 0.6, 0.42105263157894735,
 0.4, 0.42105263157894735,
 0.5, 0.34210526315789475,
 0.6, 0.2894736842105263,
 0.4, 0.2894736842105263,
 0.7666666666666667, 0.7105263157894737,
 0.75, 0.5657894736842105,
 0.7833333333333333, 0.5394736842105263,
 0.65, 0.5,
 0.7, 0.40789473684210525,
 0.23333333333333334, 0.7105263157894737,
 0.25, 0.5657894736842105,
 0.21666666666666667, 0.5394736842105263,
 0.35, 0.5,
 0.3, 0.40789473684210525,
 0.5, 1.0,
 0.5, 0.6842105263157895,
 0.8, 0.7105263157894737,
 0.2, 0.7105263157894737,
 0.5, 0.8157894736842105,
 0.6333333333333333, 0.7631578947368421,
 0.8333333333333334, 0.7236842105263158,
 0.9, 0.9736842105263158,
 0.36666666666666664, 0.7631578947368421,
 0.16666666666666666, 0.7236842105263158,
 0.1, 0.9736842105263158,
 0.5, 0.0,
 0.5, 0.2894736842105263,
 0.7166666666666667, 0.3684210526315789,
 0.2833333333333333, 0.3684210526315789,
 0.7833333333333333, 0.5263157894736842,
 0.7166666666666667, 0.13157894736842105,
 0.8833333333333333, 0.5394736842105263,
 0.21666666666666667, 0.5263157894736842,
 0.2833333333333333, 0.13157894736842105,
 0.11666666666666667, 0.5394736842105263,
 0.8166666666666667, 0.5526315789473685,
 0.7666666666666667, 0.6842105263157895,
 0.9833333333333333, 0.4868421052631579,
 0.8333333333333334, 0.7105263157894737,
 0.18333333333333332, 0.5526315789473685,
 0.23333333333333334, 0.6842105263157895,
 0.016666666666666666, 0.4868421052631579,
 0.16666666666666666, 0.7105263157894737,
 0.7333333333333333, 0.7105263157894737,
 0.8333333333333334, 0.631578947368421,
 1.0, 0.6842105263157895,
 0.7833333333333333, 0.7894736842105263,
 0.26666666666666666, 0.7105263157894737,
 0.16666666666666666, 0.631578947368421,
 0.0, 0.6842105263157895,
 0.21666666666666667, 0.7894736842105263,
 0.5, 0.5263157894736842]);
  


    // element index array
    var triangleIndices = new Uint8Array(
        [  0, 1, 2,   1, 2, 3,    
            4, 5, 6,   6, 7, 8,    
            0, 1, 9,   1, 9,10,    
            9,10,11,   1,10,12,
            1, 3, 4,   1, 4,12,
            4, 12, 13,   10, 12,13,
            10, 11, 13,   4, 6,13,
            6, 7, 13,   7, 11,13,
            
            0, 2, 14,   2, 14,15,    
            14,15,16,   2,15,17,
            2, 3, 5,   2, 5,17,
            5, 17, 18,   15, 17,18,
            15, 16, 18,   5, 6,18,
            6, 8, 18,   8, 16,18,

            19,20,21,   19,20,22,
            23,24,26,   24,25,26,
            23,27,29,   27,28,29,
            30,31,32,   30,31,33,
            32,34,35,   34,35,36,
            33,37,38,   37,38,39,
            40,41,42,   41,42,43,
            44,45,46,   45,46,47,
            48,49,50,   48,50,51,
            52,53,54,   52,54,55,

            7,11,32,   8,16,33,
            11,32,36,   16,33,39,
            11,36,9,   16,39,14,

            7,8,31,   7,31,32,   8,31,33,

            30,32,56,   30,33,56,
            35,36,56,   38,39,56,
            42,43,56,   46,47,56,
            49,50,56,   53,54,56,
            50,51,56,   54,55,56,  
            25,26,56,   28,29,56,
            23,26,56,   23,29,56,
            19,21,56,   19,22,56]);

    // we need to put the vertices into a buffer so we can
    // block transfer them to the graphics hardware
    var trianglePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexPos, gl.STATIC_DRAW);
    trianglePosBuffer.itemSize = 3;
    trianglePosBuffer.numItems = 57;
    
    // a buffer for normals
    var triangleNormalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleNormalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexNormals, gl.STATIC_DRAW);
    triangleNormalBuffer.itemSize = 3;
    triangleNormalBuffer.numItems = 57;
    
    // a buffer for colors
    var colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexColors, gl.STATIC_DRAW);
    colorBuffer.itemSize = 3;
    colorBuffer.numItems = 57;

    // a buffer for textures
    var textureBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexTextureCoords, gl.STATIC_DRAW);
    textureBuffer.itemSize = 2;
    textureBuffer.numItems = 24;

    // a buffer for indices
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, triangleIndices, gl.STATIC_DRAW);    

    // Set up texture
    var texture1 = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture1);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    var image1 = new Image();

    var texture2 = gl.createTexture();
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    var image2 = new Image();

    var texture3 = gl.createTexture();
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, texture3);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    var image3 = new Image();

    function initTextureThenDraw()
    {
      image1.onload = function() { loadTexture(image1,texture1); };
      image1.crossOrigin = "anonymous";
      image1.src = "https://live.staticflickr.com/65535/54202387271_06f8642ac2_o.png";

      image2.onload = function() { loadTexture(image2,texture2); };
      image2.crossOrigin = "anonymous";
      image2.src = "https://live.staticflickr.com/65535/54202662339_4d9f76db35_o.jpg";

      image3.onload = function() { loadTexture(image3,texture3); };
      image3.crossOrigin = "anonymous";
      image3.src = "https://live.staticflickr.com/65535/50641908943_f6ebfef28d_o.jpg";

      window.setTimeout(draw,200);
    }

    function loadTexture(image,texture)
    {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

      // Option 1 : Use mipmap, select interpolation mode
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);

      // Option 2: At least use linear filters
      // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

      // Optional ... if your shader & texture coordinates go outside the [0,1] range
      // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
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
      
      var p0=[-100,-100, 100];
      var d0=[100,300, 0];
          
      var p1=[100,100, 0];
      var d1=[0,300, 100];
          
      var p2=[100,-100, 100];
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

    var time = 0;
    var time2 = 100;
    // Scene (re-)draw routine
    function draw() {
    
        // Translate slider values to angles in the [-pi,pi] interval
        var angle1 = slider1.value*0.01*Math.PI;
        var angle2 = time*0.01*Math.PI;
        var zoom  = slider2.value*0.02; 
    
        // Circle around the y-axis
         var eye = [400*Math.sin(angle1),0.0,400.0*Math.cos(angle1)];
        var target = [0,-50,0];
        var up = [0,1,0];
	
        var tModel = mat4.create();
        //mat4.fromScaling(tModel,[0.7,0.7,0.7]);
        if (box1.checked) {
            mat4.fromTranslation(tModel,Ccomp(time2*0.005));
            time2 += 1;
        } else {
            mat4.fromTranslation(tModel, [0,10*Math.sin(angle2),0]);
            time2 = 100;
        }
        var tScale = mat4.create();
        mat4.fromScaling(tScale,[0.7*zoom,0.7*zoom,0.7*zoom]);
        mat4.multiply(tModel, tModel, tScale);
        mat4.rotate(tModel,tModel,0.5*Math.sin(0.7*angle2),[0,1,0]);
        time += 1;
      
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
        gl.clearColor(10.0, 0.4, 0.0, 0.5);
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
        gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer);
        gl.vertexAttribPointer(shaderProgram.texcoordAttribute, textureBuffer.itemSize,
          gl.FLOAT, false, 0, 0);

	    // Bind texture
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture1);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, texture2);
        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, texture3);

        // Do the drawing
        gl.drawElements(gl.TRIANGLES, triangleIndices.length, gl.UNSIGNED_BYTE, 0);
        window.requestAnimationFrame(draw);
    }

    window.requestAnimationFrame(draw);
    initTextureThenDraw();
}

window.onload=start;



