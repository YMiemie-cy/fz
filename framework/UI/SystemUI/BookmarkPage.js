import BaseView from "./BaseView.js";
class BookmarkPage extends BaseView {
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
      let tabs = document.createElement("div");
      tabs.classList.add("tabs");
      tabs.style.cssText = `
      display: flex;
      border-width:1px;
       border-radius:4px;
       overflow:hidden;
       width:100%;
       height:100%;
       color:#73777f;
      `;
      for (let i = 0; i < this.content.list.length; i++) {
        let tem = document.createElement("div");
        tem.classList.add("tab");
        tem.setAttribute("data-tab", `tab${i + 1}`);
        if (i !== 0) {
          tem.style.cssText = `
         flex:1;
         text-align: center;
          padding:2%;
            border-image-slice: 1;
            position: relative;
           box-sizing:border-box;
           cursor: pointer;
            border-top:1px dashed #C4C6CA;
            border-right:1px dashed #C4C6CA;
           border-bottom:1px dashed #C4C6CA;  
           display: flex;
    justify-content: center;
    align-items: center;   
    );`;
        } else {
          tem.style.cssText = `
          flex:1;
          text-align: center;
          padding:2%;
            border-image-slice: 1;
            position: relative;
           box-sizing:border-box;
           cursor: pointer;
           border:1px dashed #C4C6CA;
           display: flex;
    justify-content: center;
    align-items: center;     
    );`;
        }

        tem.innerHTML = `    
            ${this.content.list[i]}
        `;
        tabs.appendChild(tem);
      }
      this.element.appendChild(tabs);
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

    let styleTag = document.createElement("style");
    styleTag.textContent = `
    .tab::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(250, 124, 112, 0.1); /* 第二个颜色 */
      }

      .tab.active {
        color: #c4c6ca;
        border-width: 1px;
        border-style: solid;
        border-image: linear-gradient(
            68.08deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(156, 129, 242, 1) 100%
          )
          1 !important;
        background-color: rgba(42, 45, 56, 0.5);
      }
      .tab.active::after {
        background-color: rgba(157, 127, 245, 0.1);
      }
    `;

    document.head.appendChild(styleTag);

    let script = document.createElement("script");
    script.innerHTML = `
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const tabId = tab.getAttribute('data-tab');
        
        const allTabs = document.querySelectorAll('.tab');
        
        // Remove 'active' class from all tabs and tab contents
        allTabs.forEach(t => {
          t.classList.remove('active');
          
          let preId = tab.getAttribute('data-tab').split('tab')[1] -1
          t.style.borderRightWidth = "1px";
          if(t.getAttribute('data-tab').split('tab')[1] == preId ){
            t.style.borderRightWidth = "0";
       
          }
        });
        
        // Add 'active' class to the clicked tab and corresponding tab content
        tab.classList.add('active');
       
        e.target.style.borderRightWidth = "1px";
      });
    });
    
    `;
    document.body.appendChild(script);
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
export default BookmarkPage;
