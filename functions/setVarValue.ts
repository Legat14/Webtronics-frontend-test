import adaptNumberToCSS from "./adaptNumberToCSS"

export default function setVarValue(props: { varName: string, value: number }): void {
  const strValue = adaptNumberToCSS({ value: props.value, unit: 'px' });
  document.documentElement.style.setProperty(props.varName, strValue);
}
