import BaseView from "./BaseView.js";
class NavigationBar extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    this.element.innerHTML = `
    <nav
        style="display: flex; flex-direction: column; width: 100%; height: 100%"
      >
    </nav>
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
    // this.element.style.display = "flex";
    // this.element.style.flexDirection = "column";

    if (this.content) {
      for (let i = 0; i < this.content.list.length; i++) {
        if (i === 0) {
          let tem = document.createElement("a");
          tem.classList.add("nav-item");
          tem.href = "#";
          tem.classList.add("active");
          tem.innerHTML = `        
          <div
            style="
              display: inline-block;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 4px;
            
              padding: 1px;
              background-size: contain;
              height: 60%;
            "
          >
            <img
              src="${this.content.list[i].icon}"
              alt=""
              style="margin: 0 10px; position: relative; z-index: 1"
            />
          </div>
          ${this.content.list[i].text}
       
`;

          tem.style.cssText = `
          box-sizing: border-box;
          cursor: pointer;
          color: #c4c6ca;
          flex: 1;
          text-decoration: none;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          transition: background-color 0.3s, color 0.3s;
          border-radius: 4px;
          `;
          this.element.querySelector("nav").appendChild(tem);
        } else {
          let tem = document.createElement("a");
          tem.classList.add("nav-item");
          tem.href = "#";
          tem.innerHTML = `        
            <div
              style="
                display: inline-block;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
                background: url(./framework/Assets/nav-noactiveback.svg) no-repeat
                  center center; /* 设置背景色 */
                padding: 1px;
                background-size: contain;
                height: 60%;
              "
            >
              <img
                src="${this.content.list[i].icon}"
                alt=""
                style="margin: 0 10px; position: relative; z-index: 1"
              />
            </div>
            ${this.content.list[i].text}
         
  `;
          tem.style.cssText = `
            box-sizing: border-box;
            cursor: pointer;
            color: #c4c6ca;
            flex: 1;
            text-decoration: none;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            transition: background-color 0.3s, color 0.3s;
            border-radius: 4px;
            `;
          this.element.querySelector("nav").appendChild(tem);
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
    .nav-item:hover {
        background-color: #555;
      }

      .nav-item.active {
        background: url(./framework/Assets/nav-active.svg) no-repeat center
          center;
        background-size: contain;
      }
    `;
    document.head.appendChild(styleTag);

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((otherItem, index) => {
          otherItem.classList.remove("active");
          let img = otherItem.querySelector("img");
          if (img.src.includes("icon.svg")) {
            img.src = img.src.split("icon.svg")[0] + ".svg";
          }
          otherItem.querySelector("div").style.background =
            "url(./framework/Assets/nav-noactiveback.svg) no-repeat center center";
        });
        item.classList.add("active");
        let img = item.querySelector("img");
        img.src = img.src.split(".svg")[0] + "icon.svg";

        item.querySelector("div").style.background = "none";
      });
    });
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
