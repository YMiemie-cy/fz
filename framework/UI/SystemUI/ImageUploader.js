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
