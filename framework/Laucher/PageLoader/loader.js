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
import SingleButton from "../../UI/SystemUI/SingleButton.js";
import BookmarkPage from "../../UI/SystemUI/BookmarkPage.js";
import Slider from "../../UI/SystemUI/Slider.js";
import ParameterBlock from "../../UI/SystemUI/ParameterBlock.js";
import DropDownMenu from "../../UI/SystemUI/DropDownMenu.js";
import ModifyBlock from "../../UI/SystemUI/ModifyBlock.js";
import SideBar from "../../UI/SystemUI/SideBar.js";

export function loaderPage(url) {
  $.getJSON(url, (data) => {
    for (const item in data) {
      if (item === "config") {
        for (const configItem in data[item]) {
          if (configItem === "style") {
            for (const style in data[item].style) {
              document.querySelector("#container").style[style] =
                data[item].style[style];
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
      if (item.type === "Button") {
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
      if (item.type === "ImageUploader") {
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
      if (item.type === "Input") {
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
      if (item.type === "Text") {
        const textElement = document.createElement("div");
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
      if (item.type === "ImageDisplay") {
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
      if (item.type === "NavigationBar") {
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
      if (item.type === "SingleButton") {
        const SingleButtonElement = document.createElement("div");
        const tem = new SingleButton(SingleButtonElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }
      if (item.type === "BookmarkPage") {
        const BookmarkPageElement = document.createElement("div");
        const tem = new BookmarkPage(BookmarkPageElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }
      if (item.type === "Slider") {
        const SliderElement = document.createElement("div");
        const tem = new Slider(SliderElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }
      if (item.type === "ParameterBlock") {
        const ParameterBlockElement = document.createElement("div");
        const tem = new ParameterBlock(ParameterBlockElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }
      if (item.type === "DropDownMenu") {
        const DropDownMenuElement = document.createElement("div");
        const tem = new DropDownMenu(DropDownMenuElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }
      if (item.type === "ModifyBlock") {
        const ModifyBlockElement = document.createElement("div");
        const tem = new ModifyBlock(ModifyBlockElement, {
          name: item.name,
          frame: item.frame,
          attributes: item.attributes,
          content: item.content,
          style: item.style,
          actions: item.actions,
        });
        tem.startDrawing(parent);
      }
      if (item.type === "SideBar") {
        const SideBarElement = document.createElement("div");
        const tem = new SideBar(SideBarElement, {
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
