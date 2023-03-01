import getPagePositionY from "./getPagePositionY";
import setVarValue from "./setVarValue";
import transformNumber from "./transformNumber";

export default function setScrollEventListener() {
  document.addEventListener('scroll', () => {
    const yOffset = getPagePositionY();
    const bgOffset = transformNumber({ value: yOffset, ratio: -0.2 });
    setVarValue({ varName: '--bg-position', value: bgOffset });
  });
}
