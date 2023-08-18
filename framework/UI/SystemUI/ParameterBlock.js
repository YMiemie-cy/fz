import BaseView from "./BaseView.js";
class ParameterBlock extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    if (this.attributes) {
      for (const attr in this.attributes) {
        console.log(attr, this.attributes[attr]);

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

    if (this.content) {
      for (const content in this.content) {
        if (content === "icon") {
          const iconElement = document.createElement("img");
          iconElement.src = this.content.icon;
          iconElement.style.cssText = `
          position:absolute; top:0;left:0;right:0;bottom:0;margin:auto;height:80%;width:80%;
          `;
          this.element.appendChild(iconElement);
        } else {
          const contentElement = document.createElement("div");
          contentElement.innerText = this.content[content];
          contentElement.style.cssText = `
          position:absolute; top:0;height:100%;width:100%;display:flex;align-item:center;justify-content:center;align-items: center;color: #c4c6ca;
          `;
          this.element.appendChild(contentElement);
        }
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
        // Execute the script
        // let layerElement = this.element;
        // const scriptFunction = new Function(...action.data, action.script);
        // const functionCallString = `scriptFunction(${Array.from(
        //   action.data
        // ).join(", ")});`;
        // eval(functionCallString);
        // const functionCallString = `this.onClick(this.element, ${Array.from(
        //   action.data
        // ).join(", ")});`;
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
export default ParameterBlock;
