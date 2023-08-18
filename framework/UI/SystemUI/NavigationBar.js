import BaseView from "./BaseView.js";
class NavigationBar extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    // console.log("parent", this.element, parent);
    // 开始按钮的绘制逻辑
    // 解析JSON数据并创建DOM元素

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

    if (this.content) {
      let itemHeight = this.frame.height.split("px")[0];
      for (let i = 0; i < this.content.list.length; i++) {
        if (i === 0) {
          let tem = document.createElement("div");
          tem.innerHTML = `
          <div
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
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              overflow: hidden;
            "
          >
            <div
              style="
                box-sizing: border-box;
                background: rgba(42, 45, 56, 0.2);
                border-radius: 6px;
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0px;
                top: 0px;
              "
            ></div>
            <div
              style="
                box-sizing: border-box;
                background: linear-gradient(
                  180deg,
                  rgba(245, 133, 122, 0.1) 0%,
                  rgba(255, 108, 94, 0.12) 100%
                );
                border-radius: 6px;
                border-width: 1px;
                border-style: solid;
                border-image: linear-gradient(
                  96.92deg,
                  rgba(250, 124, 112, 0) 1.5625%,
                  rgba(250, 124, 112, 1) 14.0625%,
                  rgba(157, 127, 245, 1) 24.447156488895416%,
                  rgba(157, 127, 245, 0) 74.28854703903198%,
                  rgba(157, 127, 245, 0) 100%
                );
                border-image-slice: 1;
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0px;
                top: 0px;
              "
            ></div>
            <div
              style="
                box-sizing: border-box;
                background: radial-gradient(
                  closest-side,
                  rgba(41, 44, 55, 0.9) 0%,
                  rgba(41, 44, 55, 0.9) 52.988046407699585%,
                  rgba(41, 44, 55, 0) 100%
                );
                border-radius: 50%;
                width: 124%;
                height: 137%;
                position: absolute;
                left: -15%;
                top: -14%;
              "
            ></div>
            <div
              style="
                box-sizing: border-box;
                color: #c4c6ca;
                text-align: center;
                font: 400 14px sans-serif;
                position: absolute;
                left: 34%;
                top: 0;
                bottom: 0;
                margin: auto 0;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              ${this.content.list[i].text}
            </div>
            <div
              style="
                box-sizing: border-box;
                background: radial-gradient(
                  closest-side,
                  rgba(255, 255, 255, 0.8) 0%,
                  rgba(255, 255, 255, 0) 100%
                );
                width: 58%;
                height: 3%;
                position: absolute;
                left: 19%;
                top: 0px;
              "
            ></div>
            <div
              style="
                box-sizing: border-box;
                background: radial-gradient(
                  closest-side,
                  rgba(157, 127, 245, 0.11) 0%,
                  rgba(157, 127, 245, 0) 100%
                );
                border-radius: 50%;
                width: 66%;
                height: 29%;
                position: absolute;
                left: 7%;
                top: -3%;
              "
            ></div>
  
            <img
              src="${this.content.list[i].icon}"
              style="
                position: absolute;
                top: 0;
                left: 13%;
                right: 0;
                bottom: 0;
                margin: auto 0;
              "
            />
          </div>
        </div>
`;
          this.element.appendChild(tem);
        } else {
          let tem = document.createElement("div");
          tem.innerHTML = `
            <div
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
            width: 100%;
            height: 100%;
            position: static;
          "
        >
          <div
            class="frame-115"
            style="
              box-sizing: border-box;
              border-radius: 6px;
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              overflow: hidden;
            "
          >
            <div
              style="
                box-sizing: border-box;
                background: rgba(157, 127, 245, 0.1);
                border-radius: 6px;
                border-width: 0.6px;
                border-style: solid;
                border-image: linear-gradient(
                  180deg,
                  rgba(157, 127, 245, 0.1) 0%,
                  rgba(0, 0, 0, 0) 100%
                );
                border-image-slice: 1;
                width: 26%;
                height: 100%;
                position: absolute;
                left: 0px;
                top: 0px;
              "
            >
              <img
                src="${this.content.list[i].icon}"
                style="
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  margin: auto;
                  z-index: 1;
                "
              />
            </div>
            <div
              style="
                box-sizing: border-box;
                background: radial-gradient(
                  closest-side,
                  rgba(18, 18, 18, 0.85) 0%,
                  rgba(18, 18, 18, 0) 100%
                );
                border-radius: 50%;
                width: 32%;
                height: 107%;
                position: absolute;
                left: -3%;
                top: 0px;
              "
            ></div>

            <div
              style="
                box-sizing: border-box;
                background: radial-gradient(
                  closest-side,
                  rgba(250, 124, 112, 0.16) 0%,
                  rgba(18, 18, 18, 0) 100%
                );
                border-radius: 50%;
                width: 21%;
                height: 65%;
                position: absolute;
                left: 7%;
                top: 38%;
              "
            ></div>
          </div>
          <div
            style="
              box-sizing: border-box;
              color: #c4c6ca;
              text-align: center;
              font: 400 14px sans-serif;
              position: absolute;
              left: 30%;
              top: 0;
              bottom: 0;
              margin: auto 0;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
          ${this.content.list[i].text}
          </div>
        </div>
      </div>
            `;
          tem.style.position = "absolute";
          tem.style.top = `${itemHeight * i + 10 * i}px`;
          tem.style.width = this.frame.width;
          tem.style.height = this.frame.height;

          this.element.appendChild(tem);
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
}
export default NavigationBar;
