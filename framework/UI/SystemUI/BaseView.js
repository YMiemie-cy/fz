class BaseView {
  constructor(element, options = {}) {
    this.element = element;
    this.name = options.name || "";
    this.frame = options.frame || {};
    this.attributes = options.attributes || {};
    this.content = options.content || {};
    this.style = options.style || {};
    this.actions = options.actions || [];
    this.children = options.children || [];

    this.registerBasicEvents();
  }

  registerBasicEvents() {
    this.element.addEventListener("click", this.onClick.bind(this));
    this.element.addEventListener("mouseover", this.onMouseOver.bind(this));
    this.element.addEventListener("mouseout", this.onMouseOut.bind(this));
  }

  onClick(event) {
    console.log("Click event on:", this.element);
  }

  onMouseOver(event) {
    // console.log("Mouse over event on:", this.element);
  }

  onMouseOut(event) {
    // console.log("Mouse out event on:", this.element);
  }
}

export default BaseView;
