import BaseView from "./BaseView.js";
class ImageUploader extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    // 开始按钮的绘制逻辑
    // 解析JSON数据并创建DOM元素

    if (this.attributes) {
      for (const attr in this.attributes) {
        if (attr === "isCanvas" && this.attributes[attr] === "true") {
          this.element = document.createElement("canvas");
          this.element.classList.add("tool-canvas");
          this.element.setAttribute("width", this.frame.width);
          this.element.setAttribute("height", this.frame.height);
          this.element.style.borderRadius = "8px";
          this.element.style.backgroundColor = "#fff";
          setTimeout(() => {
            let script = document.createElement("script");
            script.innerHTML = `
          
            const canvas = document.querySelector('.tool-canvas');
            
               const context = canvas.getContext('2d');

               const drawHistory = [];
               
             
               let isDrawing = false;
               let isErasing = false;
               let isPenSelected = false;

               canvas.addEventListener('mousedown', startDrawing);
               canvas.addEventListener('mousemove', draw);
               canvas.addEventListener('mouseup', stopDrawing);
               canvas.addEventListener('mouseout', stopDrawing);

               const saveButton = document.getElementById('saveButton'); // 获取保存按钮

               // 保存为图片
               saveButton.addEventListener('click', saveAsImage);
               document.querySelector('#clearCanvasBtn').addEventListener('click', clearCanvas)
               document.querySelector('#backCanvasBtn').addEventListener('click', undoLastStep)

               // 切换为绘图模式
               document.getElementById('penButton').addEventListener('click', () => {
                 isErasing = false;
                 isPenSelected = true;
                 context.strokeStyle = '#000'; // 设置绘制颜色为黑色
                 context.lineWidth = 2; // 设置绘制线条宽度
                 //canvas.style.cursor = "none"

                 canvas.style.cursor = 'url(./framework/assets/pens.png)16 16, auto'; // 使用自定义小黑点光标
               });

               // 切换为橡皮擦模式
               document.getElementById('eraserButton').addEventListener('click', () => {
                 isErasing = true;
                
                 context.strokeStyle = '#fff'; // 设置绘制颜色为白色，模拟擦除
                 context.lineWidth = 32; // 设置擦除线条宽度，增大橡皮擦大小
                 canvas.style.cursor = 'url(./framework/assets/eraser.png)16 16, auto'; // 使用自定义圆圈光标
               });

               function startDrawing(event) {
                if (!isPenSelected) return;
                 isDrawing = true;
                 context.beginPath();
                 context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
                 drawHistory.push(context.getImageData(0, 0, canvas.width, canvas.height));
                }

               function draw(event) {
                if (!isDrawing || !isPenSelected) return;

                 const x = event.clientX - canvas.offsetLeft;
                 const y = event.clientY - canvas.offsetTop;

                 if (isErasing) {
                   context.globalCompositeOperation = 'destination-out'; // 使用destination-out合成模式擦除
                 } else {
                   context.globalCompositeOperation = 'source-over'; // 恢复绘制模式
                 }

                 context.lineTo(x, y);
                 context.stroke();
               }

               function saveAsImage() {
                 const imageDataURL = canvas.toDataURL('image/png'); // 获取Base64格式的DataURL
                 console.log(imageDataURL);
                }

                function clearCanvas() {
                  context.clearRect(0, 0, canvas.width, canvas.height); // 清除画布内容
                }

                function undoLastStep() {
                  if (drawHistory.length > 0) {
                    // 移除最后一步的绘制历史
                    drawHistory.pop();
                
                    // 清空画布
                    context.clearRect(0, 0, canvas.width, canvas.height);
                
                    // 重新绘制之前的步骤
                    for (const imageData of drawHistory) {
                      context.putImageData(imageData, 0, 0);
                    }
                  }
                }



               function stopDrawing() {
                 isDrawing = false;
                 context.closePath();
                 //canvas.style.cursor = 'crosshair'; // 恢复默认鼠标样式
               }
          
               `;
            document.body.appendChild(script);
          }, 0);
        }

        this.element.setAttribute(attr, this.attributes[attr]);
      }
    }

    /** */
    this.element.innerHTML = `
    
    <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 375 237" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_206_1438)">
    <rect class="border" x="0.4" y="0.4" width="374.2" height="236.2" rx="7.6" fill="#2A2D38" fill-opacity="0.2" stroke="url(#paint0_linear_206_1438)" stroke-width="0.8"/>
    <ellipse cx="209.5" cy="129.5" rx="270.5" ry="160.5" fill="url(#paint1_radial_206_1438)"/>
    <ellipse cx="304" cy="187" rx="85" ry="83" fill="url(#paint2_radial_206_1438)"/>
    <ellipse cx="87.5" cy="-13" rx="131.5" ry="50" fill="url(#paint3_radial_206_1438)"/>
   
    </g>
    <defs>
    <filter id="filter0_d_206_1438" x="176.555" y="91.9918" width="24.8398" height="34.6332" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="1" dy="1"/>
    <feGaussianBlur stdDeviation="1"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.57 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_206_1438"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_206_1438" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_206_1438" x1="187.5" y1="0" x2="187.5" y2="237" gradientUnits="userSpaceOnUse">
    <stop stop-color="white" stop-opacity="0.24"/>
    <stop offset="1" stop-color="#9D7FF5" stop-opacity="0.2"/>
    </linearGradient>
    <radialGradient id="paint1_radial_206_1438" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(209.5 129.5) rotate(90) scale(160.5 270.5)">
    <stop stop-color="#121212" stop-opacity="0.55"/>
    <stop offset="1" stop-color="#121212" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="paint2_radial_206_1438" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(304 187) rotate(90) scale(83 85)">
    <stop stop-color="#FA7C70" stop-opacity="0.06"/>
    <stop offset="1" stop-color="#121212" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="paint3_radial_206_1438" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(87.5 -13) rotate(90) scale(50 131.5)">
    <stop stop-color="#FA7C70" stop-opacity="0.16"/>
    <stop offset="1" stop-color="#121212" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="paint4_linear_206_1438" x1="187.975" y1="92.9918" x2="187.975" y2="123.625" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="0.416667" stop-color="#B19BF5"/>
    <stop offset="1" stop-color="#9D7FF5"/>
    </linearGradient>
    <linearGradient id="paint5_linear_206_1462" x1="187.975" y1="92.9918" x2="187.975" y2="123.625" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.416667" stop-color="#B19BF5"/>
<stop offset="1" stop-color="#9D7FF5"/>
</linearGradient>
    <radialGradient id="paint5_radial_206_1438" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(88.4516 0.499975) rotate(-0.0836051) scale(68.6452 3124.81)">
    <stop stop-color="white" stop-opacity="0.6"/>
    <stop offset="1" stop-color="white" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="clip0_206_1438">
    <rect width="100%" height="100%" rx="8" fill="white"/>
    </clipPath>
    </defs>
           <div   style=" flex-direction: column;
           box-sizing: border-box;
           color: #c4c6ca;
           text-align: center;
           font-size: 16px;
           font-weight: 400;
           position: absolute;
           top: 0;
           left: 0;
           height: 96%;
           width: 100%;
           /* padding-top: 50px; */
           display: flex;
           justify-content: center;
           align-items: center;">
        <img src="./framework/assets/uploadCloud.svg" style="
        height:56px;
        width:56px;
   
">
        Upload Image</div>
    </svg>

    <div
    class="imageUploader-input-contain"
    style="
      overflow:hidden;
      position: absolute;
      box-sizing: border-box;
      width: 98%;
      height: 98%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border-radius: 4px;
    "
  >
    <div class="image-container">
      <div class="primary-image"></div>
      <div class="image-list"></div>
    </div>
    <label for="imageInput" class="custom-upload-button">
     
    </label>
    <input type="file" id="imageInput" accept="image/*" multiple />
    <input type="file" id="singularImageInput" accept="image/*" />
  </div>
    `;
    /** */

    this.element.id = this.name;
    this.element.style.position = "absolute";
    this.element.classList.add("tool-imageUploader");
    this.element.style.width = this.frame.width;
    this.element.style.height = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;
    this.element.style.zIndex = this.frame.zIndex;

    if (this.attributes) {
      for (const attr in this.attributes) {
        if (attr === "isPens" && this.attributes[attr] === "true") {
          let tem = document.createElement("div");
          tem.innerHTML = `
          <canvas id="canvas" width="${this.frame.width}" height="${this.frame.height}"></canvas>
  
          `;
          tem.style.cssText = `
          position: absolute;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
          `;

          this.element.appendChild(tem);
          let tem2 = document.createElement("div");
          tem2.innerHTML = `
         
    <div style="display: flex;
    width:100%;
    gap: 10px;
    ">
      <button id="pen">Pen</button>
      <button id="rectangle">Rectangle</button>
      <button id="circle">Circle</button>
      <button id="star">Star</button>
    </div>
          `;
          tem2.style.cssText = `     
          `;

          this.element.appendChild(tem2);

          const canvas = tem.querySelector("#canvas");
          const context = canvas.getContext("2d");

          const penButton = tem2.querySelector("#pen");
          const rectangleButton = tem2.querySelector("#rectangle");
          const circleButton = tem2.querySelector("#circle");
          const starButton = tem2.querySelector("#star");

          let isDrawing = false;
          let shape = "";
          let startX, startY;
          let shapes = [];
          let currentPath = [];

          canvas.addEventListener("mousedown", startDrawing);
          canvas.addEventListener("mousemove", draw);
          canvas.addEventListener("mouseup", endDrawing);
          canvas.addEventListener("mouseleave", endDrawing);

          penButton.addEventListener("click", () => changeShape("pen"));
          rectangleButton.addEventListener("click", () =>
            changeShape("rectangle")
          );
          circleButton.addEventListener("click", () => changeShape("circle"));
          starButton.addEventListener("click", () => changeShape("star"));

          function startDrawing(event) {
            if (!shape) return;
            isDrawing = true;
            startX = event.offsetX;
            startY = event.offsetY;

            if (shape === "pen") {
              context.beginPath();
              context.moveTo(startX, startY);
              currentPath.push({ x: startX, y: startY });
            }
          }

          function draw(event) {
            if (!isDrawing) return;
            const { offsetX, offsetY } = event;
            context.fillStyle = "rgba(156, 129, 242, 0.40)";
            context.strokeStyle = "rgba(156, 129, 242, 0.40)";

            if (shape === "pen") {
              context.lineWidth = 20;
              context.lineTo(offsetX, offsetY);
              context.stroke();
              currentPath.push({ x: offsetX, y: offsetY });
              startX = offsetX;
              startY = offsetY;
            } else {
              redrawShapes();

              if (shape === "rectangle") {
                context.fillRect(
                  startX,
                  startY,
                  offsetX - startX,
                  offsetY - startY
                );
              } else if (shape === "circle") {
                const radius = Math.sqrt(
                  (offsetX - startX) ** 2 + (offsetY - startY) ** 2
                );
                context.beginPath();
                context.arc(startX, startY, radius, 0, Math.PI * 2);
                context.fill();
              } else if (shape === "star") {
                drawStar(
                  startX,
                  startY,
                  5,
                  Math.sqrt((offsetX - startX) ** 2 + (offsetY - startY) ** 2) /
                    2
                );
                context.fill();
              }
            }
          }

          function endDrawing(event) {
            if (!isDrawing) return;
            isDrawing = false;
            const { offsetX, offsetY } = event;

            if (shape === "pen") {
              shapes.push({
                type: "pen",
                path: [...currentPath],
              });
              currentPath = [];
            }

            if (shape === "rectangle") {
              shapes.push({
                type: "rectangle",
                x: startX,
                y: startY,
                width: offsetX - startX,
                height: offsetY - startY,
              });
            } else if (shape === "circle") {
              const radius = Math.sqrt(
                (offsetX - startX) ** 2 + (offsetY - startY) ** 2
              );
              shapes.push({ type: "circle", x: startX, y: startY, radius });
            } else if (shape === "star") {
              shapes.push({
                type: "star",
                x: startX,
                y: startY,
                size:
                  Math.sqrt((offsetX - startX) ** 2 + (offsetY - startY) ** 2) /
                  2,
              });
            }

            redrawShapes();
          }

          function changeShape(newShape) {
            shape = newShape;

            // 根据形状设置画布样式
            if (shape === "pen") {
              canvas.classList.add("draw-pen");
            } else {
              canvas.classList.remove("draw-pen");
            }
          }

          function drawStar(x, y, arms, size) {
            context.beginPath();
            context.moveTo(x, y - size);

            for (let i = 0; i < arms * 2; i++) {
              const angle = Math.PI / arms + i * (Math.PI / arms);
              const r = i % 2 === 0 ? size : size / 2;
              const currX = x + Math.cos(angle) * r;
              const currY = y + Math.sin(angle) * r;
              context.lineTo(currX, currY);
            }

            context.closePath();

            context.fill();
          }

          function redrawShapes() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (const shape of shapes) {
              if (shape.type === "pen") {
                context.beginPath();
                context.moveTo(shape.path[0].x, shape.path[0].y);
                for (const point of shape.path) {
                  context.lineTo(point.x, point.y);
                  context.stroke();
                }
              } else if (shape.type === "rectangle") {
                context.fillRect(shape.x, shape.y, shape.width, shape.height);
              } else if (shape.type === "circle") {
                context.beginPath();
                context.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
                context.fill();
              } else if (shape.type === "star") {
                drawStar(shape.x, shape.y, 5, shape.size);
              }
            }
          }
        }
        if (attr === "isImgCompare" && this.attributes[attr] === "true") {
          let tem = document.createElement("div");
          tem.style.cssText = `
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          `;
          tem.innerHTML = `
          <div  style="
          position: relative;
          width: 100%;
          height: 100%;">
          <div class="img background-img" ></div>
          <div class="img foreground-img" ></div>
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            class="slider"
            name="slider"
            id="slider"
          />
          <div class="slider-button"></div>
        </div>
          `;
          this.element.appendChild(tem);
          const slider = this.element.querySelector(".slider");
          let ele = this.element;

          let sliderPos;
          slider.addEventListener("input", function (e) {
            sliderPos = e.target.value;
            ele.querySelector(".foreground-img").style.width = `${sliderPos}% `;

            const styleElement = document.createElement("style");
            styleElement.innerHTML = `.slider::-webkit-slider-thumb { left: ${sliderPos}% !important}`;

            document.head.appendChild(styleElement);

            ele.querySelector(
              ".slider-button"
            ).style.left = `calc(${sliderPos}% - 16px)`;
          });
        }
      }
    }

    if (this.content) {
      for (const content in this.content) {
        if (content === "icon") {
          const iconElement = document.createElement("img");
          iconElement.src = content.icon;
          this.element.appendChild(iconElement);
        } else {
          const contentElement = document.createElement("div");
          contentElement.innerText = this.content[content];
          this.element.appendChild(contentElement);
        }
      }
    }

    if (this.style) {
      for (const style in this.style) {
        this.element.style[style] = this.style[style];
      }
    }

    for (const action of this.actions) {
      console.log(action);

      if (action.script) {
        if (!action.event) {
          let functionCallString;
          let layerElement = this.element;
          if (action.data) {
            action.data.forEach((item, index) => {
              if (item.includes("-Element")) {
                layerElement = document.querySelector(`#${item.split("-")[0]}`);
                console.log("domID", `#${item.split("-")[0]}`);
                action.data.splice(index, 1);
                action.data.unshift("layerElement");
              }
            });
            if (action.data.length > 0) {
              functionCallString = `${action.script.split(".")[0]}(${Array.from(
                action.data
              ).join(", ")})`;
            } else {
              functionCallString = `${action.script.split(".")[0]}()`;
            }
            console.log(functionCallString);
          } else {
            functionCallString = `${action.script.split(".")[0]}()`;
          }
          eval(functionCallString);
        }
      } else if (action.script && action.data) {
        // Define the function
        window[action.script] = new Function(...action.data, action.content);
      } else if (action.script) {
        // Define the function
        window[action.script] = new Function(action.content);
      }
    }

    const domElement = this.element;

    // 获取父级容器
    let parentContainer;

    if (parent === "layers") {
      parentContainer = document.querySelector("#container");
    } else {
      parentContainer = document.querySelector(`#${parent}`);
    }

    // 创建DOM并添加到父级容器

    parentContainer.appendChild(domElement);

    let styleTag = document.createElement("style");
    styleTag.textContent = `
    .tool-imageUploader > .border {
      transition: stroke 10s ease-in-out;
    }
    .tool-imageUploader:hover .border {
      stroke: url(#paint5_linear_206_1462);
    }
    .image-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      display: flex;
      align-items: center;
      z-index: 2;
    }

    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .primary-image {
      width: 83%;
      height: 100%;
      margin-right: 6px;
    }

    .image-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      max-height: 100%;
      width: 17%;
      overflow-y: auto;
    }

    .custom-upload-button {
      display: inline-block;
      
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
      height: 100%;
      position: absolute;
    }
    .custom-upload-button:hover {
      
    }

    #imageInput {
      display: none;
      position: absolute;
      z-index: 999;
    }
    #singularImageInput{
      display: none;
      position: absolute;
    }
    .image-list::-webkit-scrollbar {
      width: 0.5em; /* 调整滚动条宽度 */
    }

    .image-list::-webkit-scrollbar-track {
      background-color: transparent; /* 隐藏滚动条背景 */
    }

    .image-list::-webkit-scrollbar-thumb {
      background-color: transparent; /* 隐藏滚动条滑块 */
    }
    
    .image-container img:hover{
      cursor:pointer;
      background:#555;
     
    }

    #${this.name} .img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: ${this.frame.width} 100%;
    }
    #${this.name} .background-img {
      background-image: url("https://i.loli.net/2020/12/28/1dGpFx3zJ9Pjcme.jpg");
    }
    #${this.name} .foreground-img {
      background-image: url("https://i.loli.net/2020/12/28/xIZmjtBR5VWoqiz.jpg");
      width: 50%;
    }
    #${this.name} .slider {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 100%;
      opacity: 0;
      outline: none;
      margin: 0;
      transition: all 0.2s;
    }

    #${this.name}  .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 2px;
      height: ${this.frame.height};
      background-image: linear-gradient(
        -360deg,
        rgba(157, 127, 245, 1) 0%,
        rgba(255, 255, 255, 0.9) 100%
      );
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: 0 0;
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 50%;
    }

    #${this.name}  .slider-button {
      pointer-events: none;
      position: absolute;
      width: 15px;
      height: 30px;
      border-radius: 10%;
      background-color: rgba(250, 124, 112, 0.1);
      border: solid 1px rgba(157, 127, 245, 1);
      left: calc(50% - 15px);
      top: calc(50% - 7.5px);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    #${this.name}  .slider-button::before {
      content: "";
      padding: 3px;
      display: inline-block;
      border: solid rgba(157, 127, 245, 1);
      border-width: 0 1px 1px 0;
      transform: rotate(135deg);
    }
    `;

    document.head.appendChild(styleTag);

    /** */
    const imageInput = document.querySelector("#imageInput");
    const singularImageInput = document.querySelector("#singularImageInput");
    const primaryImage = document.querySelector(".primary-image");
    const imageList = document.querySelector(".image-list");
    const imageContainer = document.querySelector(".image-container");
    const imageUploaderInputContain = document.querySelector(
      ".imageUploader-input-contain"
    );

    let currentImg;

    imageInput.addEventListener("change", (event) => {
      const selectedFiles = event.target.files;

      if (selectedFiles.length > 0) {
        primaryImage.innerHTML = `<img style="border-radius: 2px;" src="${URL.createObjectURL(
          selectedFiles[0]
        )}" alt="Selected Image">`;
        imageContainer.style.height = "100%";
        imageUploaderInputContain.style.backgroundColor = "#252831";

        if (selectedFiles.length === 1) {
          primaryImage.style.width = "100%";
          imageList.style.width = "0%";
        } else {
          primaryImage.style.width = "83%";
          imageList.style.width = "17%";
        }

        imageList.innerHTML = "";
        for (let i = 1; i < selectedFiles.length; i++) {
          const div = document.createElement("div");
          div.style.cssText = `
          height:${Number(this.frame.height.split("px")[0]) * 0.22}px;
            `;

          const img = document.createElement("img");
          img.style.borderRadius = "2px";
          img.src = URL.createObjectURL(selectedFiles[i]);
          img.alt = `Image ${i + 1}`;
          div.appendChild(img);
          imageList.appendChild(div);
        }
        this.element.querySelectorAll("img").forEach((item) => {
          item.addEventListener("click", () => {
            console.log(item);
            currentImg = item;
            singularImageInput.click();
          });
        });
      }
    });
    singularImageInput.addEventListener("change", () => {
      let selectedFile = event.target.files[0];
      currentImg.src = URL.createObjectURL(selectedFile);
    });

    /** */
  }

  handleAnimation() {
    // 处理按钮的动画逻辑
    console.log("处理按钮的动画");
  }
  handleActions(arr) {
    for (let i = 0; i < arr.length; i++) {
      const action = arr[i];
      console.log(action);

      if (action.script) {
        if (!action.event) {
          let functionCallString;
          let layerElement = this.element;
          if (action.data) {
            action.data.forEach((item, index) => {
              if (item.includes("-Element")) {
                layerElement = document.querySelector(`#${item.split("-")[0]}`);
                console.log("domID", `#${item.split("-")[0]}`);
                action.data.splice(index, 1);
                action.data.unshift("layerElement");
              }
            });
            if (action.data.length > 0) {
              functionCallString = `${action.script.split(".")[0]}(${Array.from(
                action.data
              ).join(", ")})`;
            } else {
              functionCallString = `${action.script.split(".")[0]}()`;
            }
            console.log(functionCallString);
          } else {
            functionCallString = `${action.script.split(".")[0]}()`;
          }
          eval(functionCallString);
        }
      }
    }
  }
}
export default ImageUploader;
