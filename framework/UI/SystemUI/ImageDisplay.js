import BaseView from "./BaseView.js";
class ImageDisplay extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    // 开始按钮的绘制逻辑
    // 解析JSON数据并创建DOM元素

    this.element.innerHTML = `
    <div  style="box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;">
        <div  style="box-sizing: border-box;
        background: rgba(42, 45, 56, 0.2);
        border-radius: 8px;
        border-width: 1px;
        border-style: dashed;
        border-color: #ccc;
        border-image-slice: 1;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;"></div>
        <div  style="box-sizing: border-box;
        background: radial-gradient(
          closest-side,
          rgba(18, 18, 18, 0.55) 0%,
          rgba(18, 18, 18, 0) 100%
        );
        border-radius: 50%;
        width: 144%;
        height: 135%;
        position: absolute;
        left: -16%;
        top: -14%;"></div>
        <div  style=" box-sizing: border-box;
        background: radial-gradient(
          closest-side,
          rgba(250, 124, 112, 0.06) 0%,
          rgba(18, 18, 18, 0) 100%
        );
        border-radius: 50%;
        width: 45%;
        height: 70%;
        position: absolute;
        left: 58%;
        top: 44%;"></div>
        <div  style=" box-sizing: border-box;
        background: radial-gradient(
          closest-side,
          rgba(250, 124, 112, 0.16) 0%,
          rgba(18, 18, 18, 0) 100%
        );
        border-radius: 50%;
        width: 70%;
        height: 42%;
        position: absolute;
        left: -12%;
        top: -27%;"></div>
        <div  style=" box-sizing: border-box;
        background: radial-gradient(
          closest-side,
          rgba(255, 255, 255, 0.6) 0%,
          rgba(255, 255, 255, 0) 100%
        );
        width: 41%;
        height: 0.3%;
        position: absolute;
        left: 3%;
        top: 0px;"></div>
        <svg
 
          style=" box-sizing: border-box;
          position: absolute;
          left: 44%;
          top: 45%;
          overflow: visible;"
          width="7%"
          height="10%"
          
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <g filter="url(#filter0_d_206_1674)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.0364 0.0756992C24.8164 0.0261535 24.5877 0 24.3529 0H3.10868C1.39463 0 0 1.39463 0 3.10868V19.287C0 20.0625 0.287483 20.8055 0.809413 21.3789C1.31427 21.9336 1.9976 22.2854 2.73846 22.3736L3.86911 21.243L2.88418 21.2411C1.88898 21.1284 1.14195 20.2932 1.14195 19.2872V3.10868C1.14195 2.02444 2.02429 1.1421 3.10868 1.1421H23.97L25.0364 0.0756992ZM9.95953 15.1526L10.8025 14.3096C10.2915 14.0622 9.74029 13.6282 9.14221 13.1572L9.14086 13.1561L8.98446 13.033C7.87973 12.165 6.93004 11.9565 5.90546 12.3574C4.99796 12.7124 4.04933 13.5411 2.61628 14.9461C2.39118 15.1669 2.38756 15.5283 2.60829 15.7537C2.82903 15.9788 3.19049 15.9824 3.41575 15.7616C6.16703 13.0642 6.84882 12.8073 8.27886 13.9312L8.43405 14.0532L8.43407 14.0533C8.9485 14.4585 9.45088 14.8542 9.95953 15.1526ZM18.0601 7.05206L14.896 10.2161C15.8317 8.48051 16.8917 7.42043 18.0601 7.05206ZM7.88224 9.23533C6.58223 9.23533 5.52466 8.17776 5.52466 6.87775C5.52466 5.57775 6.58239 4.52018 7.88224 4.52018C9.18209 4.52018 10.2398 5.5776 10.2398 6.8776C10.2398 8.17776 9.18209 9.23533 7.88224 9.23533ZM7.88224 5.66198C7.2119 5.66198 6.66646 6.20726 6.66646 6.8776C6.66646 7.5478 7.2119 8.09323 7.88224 8.09323C8.55258 8.09323 9.09787 7.5478 9.09787 6.8776C9.09787 6.20726 8.55243 5.66198 7.88224 5.66198Z"
              fill="url(#paint0_linear_206_1674)"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.73828 22.3741C2.75759 22.3764 2.77693 22.3785 2.79631 22.3805C2.81484 22.3824 2.83337 22.3832 2.85206 22.3836L9.28487 22.396H24.3527C26.0669 22.396 27.4614 21.0014 27.4614 19.2843L27.4495 16.3955V16.3917C27.4485 16.2968 27.4161 15.4363 26.6089 14.4036L25.9457 13.5331L22.348 8.77279C22.2846 8.68766 20.7682 6.69365 18.6658 6.92463C18.4607 6.94718 18.2587 6.98983 18.0599 7.05253L14.8958 10.2166C14.7273 10.5292 14.5628 10.8637 14.4025 11.22C13.5123 13.198 12.6622 14.2987 11.8752 14.4916C11.5379 14.5743 11.1812 14.4935 10.8023 14.3101L9.95935 15.1531C10.6607 15.5644 11.374 15.7906 12.1471 15.6011C12.7482 15.4538 13.3032 15.0686 13.8441 14.4241C14.3796 13.7861 14.9027 12.8913 15.4438 11.6892C16.4524 9.44795 17.6079 8.19315 18.7852 8.06071C20.2374 7.89723 21.4225 9.44237 21.4353 9.4591L25.0357 14.2238L25.7029 15.0991L25.7073 15.1048C26.2591 15.8095 26.3046 16.3566 26.3077 16.4099L26.3196 19.2876C26.3196 20.372 25.4371 21.2541 24.3527 21.2541H9.28593L3.86893 21.2435L2.73828 22.3741ZM23.9698 1.14257H24.3527C25.4371 1.14257 26.3193 2.02491 26.3193 3.10915V10.0246C26.3125 10.2119 26.2678 11.9463 26.922 13.2111C27.0668 13.4911 27.4115 13.6003 27.6915 13.4555C27.9714 13.3107 28.081 12.9663 27.9363 12.6862C27.4004 11.65 27.4601 10.0766 27.4608 10.0613C27.4611 10.0527 27.4614 10.0443 27.4614 10.036V3.10915C27.4614 1.62982 26.4227 0.388428 25.0362 0.0761719L23.9698 1.14257Z"
            fill="#9D7FF5"
          />
          <defs>
            <filter
              id="filter0_d_206_1674"
              x="-1"
              y="-1"
              width="29.0371"
              height="26.3735"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.57 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_206_1674"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_206_1674"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_206_1674"
              x1="0.753363"
              y1="1.00449"
              x2="12.5561"
              y2="12.0538"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0001" stop-color="#9D7FF5" />
              <stop offset="0.447917" stop-color="#9D7FF5" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    `;

    if (this.attributes) {
      for (const attr in this.attributes) {
        this.element.setAttribute(attr, this.attributes[attr]);
      }
    }

    this.element.id = this.name;
    this.element.style.position = "absolute";
    this.element.style.width = this.frame.width;
    this.element.style.height = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;
    this.element.style.zIndex = this.frame.zIndex;
    this.element.style.borderRadius = "8px";

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
export default ImageDisplay;
