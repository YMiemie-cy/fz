import BaseView from "./BaseView.js";
class TreeSelector extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    let tem = document.createElement("div");
    tem.style.cssText = `
    position:absolute;
    width: 100%;
    height: ${
      (this.frame.height.split("px")[0] - (this.content.list.length - 1) * 10) /
      this.content.list.length
    }px;
    `;
    tem.classList.add("tree-checkbox");
    tem.innerHTML = `
    <div style="box-sizing: border-box; position: absolute; inset: 0">
    <svg
      style="
        box-sizing: border-box;
        border-radius: 0px;
        position: absolute;
        left: 0;
        top: 0;
        overflow: visible;
      "
      width="28%"
      height="100%"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        class="tree-choicebox"
        d="M27.5024 6L27.1675 2L26.6692 2.04172L26.5401 0.5H25.1666V0H21.4997V0.5H17.8328V0H14.1659V0.5H10.499V0H6.83206V0.5H4.99862C4.52312 0.5 4.07097 0.594542 3.65899 0.765385L3.46746 0.303522C2.4897 0.708983 1.7076 1.49109 1.30214 2.46885L1.764 2.66038C1.59316 3.07236 1.49862 3.52451 1.49862 4V6H0.998619V10H1.49862V14H0.998619V18H1.49862V22H0.998619V26H1.49862V28C1.49862 28.4755 1.59316 28.9276 1.764 29.3396L1.30214 29.5312C1.7076 30.5089 2.48971 31.291 3.46747 31.6965L3.65899 31.2346C4.07098 31.4055 4.52313 31.5 4.99862 31.5H7.05537V32H11.1689V31.5H15.2824V32H19.3959V31.5H23.5094V32H27.6229V31.5H29.1361L29.014 30.0417L29.5122 30L29.1772 26L28.679 26.0417L28.344 22.0417L28.8423 22L28.5073 18L28.0091 18.0417L27.6741 14.0417L28.1724 14L27.8374 10L27.3391 10.0417L27.0042 6.04172L27.5024 6Z"
        stroke="#C4C6CA"
        stroke-dasharray="4 4"
      />
    </svg>

    <div
      style="
        box-sizing: border-box;
        width: 76%;
        height: 100%;
        position: absolute;
        left: 24%;
        top: 0;
        overflow: hidden;
      "
    >
      <svg
        style="
          box-sizing: border-box;
          border-radius: 0px;
          position: absolute;
          left: 0px;
          top: 0px;
          overflow: visible;
        "
        width="100%"
        height="100%"
        viewBox="0 0 83 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-0.00013132 0.00645701L78.9997 0.000311205C81.209 0.000139335 83 1.79105 83 4.00031V28C83 30.2091 81.2091 32 79 32H2.65598L-0.00013132 0.00645701Z"
          fill="#2A2D38"
          fill-opacity="0.5"
        />
      </svg>

      <svg
        style="
          box-sizing: border-box;
          border-radius: 0px;
          position: absolute;
          left: 0px;
          top: 0px;
          overflow: visible;
        "
        width="100%"
        height="100%"
        viewBox="0 0 83 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M3.11619 31.5L0.543095 0.506415L78.9997 0.500311C80.9328 0.500161 82.5 2.06721 82.5 4.00031V28C82.5 29.933 80.933 31.5 79 31.5H3.11619Z"
          fill="#9D7FF5"
          fill-opacity="0.1"
          stroke="url(#paint0_linear_206_1860)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_206_1860"
            x1="1"
            y1="2"
            x2="83.5565"
            y2="16.2785"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EAEAEB" />
            <stop offset="1" stop-color="#9C81F2" />
          </linearGradient>
        </defs>
      </svg>

      <div
        style="
          box-sizing: border-box;
          background: radial-gradient(
            closest-side,
            rgba(18, 18, 18, 0.9) 0%,
            rgba(18, 18, 18, 0) 100%
          );
          border-radius: 50%;
          width: 111%;
          height: 140%;
          position: absolute;
          left: 98%;
          top: -22%;
          transform-origin: 0 0;
          transform: rotate(0deg) scale(-1, 1);
        "
      ></div>
      <div
        style="
          box-sizing: border-box;
          background: radial-gradient(
            closest-side,
            rgba(250, 124, 112, 0.21) 0%,
            rgba(250, 124, 112, 0) 100%
          );
          border-radius: 50%;
          width: 37%;
          height: 38%;
          position: absolute;
          left: 36%;
          top: -22%;
          transform-origin: 0 0;
          transform: rotate(0deg) scale(-1, 1);
        "
      ></div>
      <div
        class="tree-checkbox-text"
        style="
          box-sizing: border-box;
          color: #7e828a;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          z-index: 1;
        "
      >
        <div>${this.content.list[0]}</div>
      </div>
    </div>
    <div
      style="
        box-sizing: border-box;
        background: radial-gradient(
          closest-side,
          rgba(255, 255, 255, 0.9) 0%,
          rgba(255, 255, 255, 0) 100%
        );
        width: 32%;
        height: 3%;
        position: absolute;
        left: 57%;
        top: 0;
        transform-origin: 0 0;
        transform: rotate(0deg) scale(-1, 1);
      "
    ></div>
  </div>
    `;
    this.element.appendChild(tem);

    tem.addEventListener("mouseover", function () {
      let tem = document.querySelector(".tree-choicebox");
      console.log(tem);
      tem.setAttribute("fill", "#FA7C70");
      tem.setAttribute("fill-opacity", "0.05");

      let tem2 = document.querySelector(".tree-checkbox-text");
      tem2.style.color = "#c4c6ca";
    });
    tem.addEventListener("mouseout", function () {
      let tem = document.querySelector(".tree-choicebox");
      console.log(tem);
      tem.setAttribute("fill", "none");
      tem.setAttribute("fill-opacity", "none");

      let tem2 = document.querySelector(".tree-checkbox-text");
      tem2.style.color = "#7e828a";
    });

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
    // this.element.style.overflow = "hidden";
    this.element.style.borderRadius = "4px";
    // this.element.style.display = "flex";
    // this.element.style.flexDirection = "column";
    // this.element.style.justifyContent = "center";
    // this.element.style.alignItems = "center";

    if (this.content) {
      for (let i = 1; i < this.content.list.length; i++) {
        let tem = document.createElement("div");
        tem.style.cssText = `
        position:absolute;
        width:80%;
        height: ${
          (this.frame.height.split("px")[0] -
            (this.content.list.length - 1) * 10) /
          this.content.list.length
        }px;
        margin-top:${
          ((this.frame.height.split("px")[0] -
            (this.content.list.length - 1) * 10) /
            this.content.list.length) *
            i +
          10 * i
        }px;
        `;
        tem.innerHTML = `<div
        style="
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          position: static;
        "
      >
        <div
          style="
            box-sizing: border-box;
            color: #c4c6ca;
            text-align: left;
            font: 400 16px sans-serif;
            position: relative;
            left: 35%;
            height: 100%;
            display: flex;
            align-items: center;
          "
        >
          <div>select2</div>
        </div>
        <svg
          style="
            box-sizing: border-box;
            position: absolute;
            left: 0;
            top: 0;
            overflow: visible;
          "
          width="22%"
          height="100%"
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.3106 19H14.9383V19.5V20H15.4857H15.9933H16.5009L16.4134 19.5L16.3258 19H15.3106ZM13.175 1L13 0H10.75V0.5V1H12H12.1598H13.175ZM5.56261 19.5V20H4C3.45763 20 2.94048 19.8921 2.46885 19.6965L2.66038 19.2346L2.8519 18.7728C3.20424 18.9189 3.59138 19 4 19H5.56261V19.5ZM0.5 5.5H0V4C0 3.45763 0.107944 2.94048 0.303522 2.46885L0.765385 2.66038L1.22725 2.8519C1.08114 3.20424 1 3.59138 1 4V5.5H0.5ZM6.25 0.5V0H4C3.45763 0 2.94048 0.107945 2.46885 0.303522L2.66038 0.765385L2.8519 1.22725C3.20424 1.08114 3.59138 1 4 1H6.25V0.5ZM0.5 8.5H0V11.5H0.5H1V8.5H0.5ZM0.5 14.5H0V16C0 16.5424 0.107944 17.0595 0.303522 17.5312L0.765385 17.3396L1.22725 17.1481C1.08114 16.7958 1 16.4086 1 16V14.5H0.5ZM8.68783 19.5V20H11.8131V19.5V19H8.68783V19.5Z"
            fill="#C4C6CA"
          />
        </svg>

        <svg
          style="
            box-sizing: border-box;
            position: absolute;
            left: 17%;
            top: 0;
            overflow: visible;
          "
          width="9%"
          height="100%"
          viewBox="0 0 7 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <g clip-path="url(#clip0_206_1779)">
            <path
              d="M4.30273 19.5L0.606638 0.5H4.91038C5.73881 0.5 6.41038 1.17157 6.41038 2V18C6.41038 18.8284 5.73881 19.5 4.91038 19.5H4.30273Z"
              fill="#9D7FF5"
              fill-opacity="0.1"
              stroke="url(#paint0_linear_206_1779)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_206_1779"
              x1="6.91016"
              y1="9"
              x2="2.41016"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#8976DF" />
              <stop offset="1" stop-color="#C4C6CA" />
            </linearGradient>
            <clipPath id="clip0_206_1779">
              <rect width="6.91038" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>`;
        this.element.appendChild(tem);
      }
    }

    if (this.style) {
      for (const style in this.style) {
        this.element.style[style] = this.style[style];
      }
    }

    // if (this.actions) {
    //   const actionsFunction = new Function(
    //     "this.element",
    //     `(${this.actions})(this.element)`
    //   );

    //   actionsFunction(this.element);
    // }
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

  handleAnimation() {
    // 处理按钮的动画逻辑
    console.log("处理按钮的动画");
  }

  onClick(ele) {
    for (let i = 0; i < this.actions.length; i++) {
      const action = this.actions[i];
      if (action.event === "click") {
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
        if (action.children) {
          this.handleActions(action.children);
        }
      }
    }
  }

  onMouseOver(event) {
    // let tem = document.querySelector(".tree-choicebox");
    // console.log(tem);
    // tem.setAttribute("fill", "#FA7C70");
    // tem.setAttribute("fill-opacity", "0.05");
    // let tem2 = document.querySelector(".tree-checkbox-text");
    // tem2.style.color = "#c4c6ca";
  }
  onMouseOut(event) {
    // let tem = document.querySelector(".tree-choicebox");
    // console.log(tem);
    // tem.setAttribute("fill", "none");
    // tem.setAttribute("fill-opacity", "none");
    // let tem2 = document.querySelector(".tree-checkbox-text");
    // tem2.style.color = "#7e828a";
  }
}
export default TreeSelector;
