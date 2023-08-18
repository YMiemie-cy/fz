import Button from "../../UI/SystemUI/Button.js";
import ImageUploader from "../../UI/SystemUI/ImageUploader.js"; // Assuming you have this class defined
import Input from "../../UI/SystemUI/Input.js"; // Assuming you have this class defined
import Text from "../../UI/SystemUI/Text.js";
import ImageDisplay from "../../UI/SystemUI/ImageDisplay.js";
import NavigationBar from "../../UI/SystemUI/NavigationBar.js";
import CheckBox from "../../UI/SystemUI/CheckBox.js";
import TreeSelector from "../../UI/SystemUI/TreeSelector.js";
import ModalWindow from "../../UI/SystemUI/ModalWindow.js";
import PromptInformation from "../../UI/SystemUI/PromptInformation.js";

export function loaderPage(url) {
  $.getJSON(url, (data) => {
    for (const item in data) {
      if (item === "config") {
        for (const configItem in data[item]) {
          if (configItem === "style") {
            for (const style in data[item].style) {
              document.body.style[style] = data[item].style[style];
            }
          }
        }
      }
      if (item === "layers" && data[item].length > 0) {
        handleDom(data[item], item);
      }
    }
  });
  function handleDom(data, parent) {
    data.forEach((item) => {
      if (item.type === "button") {
        const buttonElement = document.createElement("div");
        const tem = new Button(buttonElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }
      if (item.type === "imageUploader") {
        const imageUploaderElement = document.createElement("div");
        const tem = new ImageUploader(imageUploaderElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }
      if (item.type === "input") {
        console.log("handleDom", parent);
        const inputElement = document.createElement("div");
        const tem = new Input(inputElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }
      if (item.type === "text") {
        const textElement = document.createElement("span");
        const tem = new Text(textElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }
      if (item.type === "imageDisplay") {
        const imageDisplayElement = document.createElement("div");
        const tem = new ImageDisplay(imageDisplayElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }
      if (item.type === "navigationBar") {
        const navigationBarElement = document.createElement("div");
        const tem = new NavigationBar(navigationBarElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }
      if (item.type === "CheckBox") {
        const CheckBoxElement = document.createElement("div");
        const tem = new CheckBox(CheckBoxElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }
      if (item.type === "TreeSelector") {
        const TreeSelectorElement = document.createElement("div");
        const tem = new TreeSelector(TreeSelectorElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }
      if (item.type === "ModalWindow") {
        const ModalWindowElement = document.createElement("div");
        const tem = new ModalWindow(ModalWindowElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }
      if (item.type === "PromptInformation") {
        const PromptInformationElement = document.createElement("div");
        const tem = new PromptInformation(PromptInformationElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }

      if (item.children) {
        handleDom(item.children, item.name);
      }
    });
  }
}
