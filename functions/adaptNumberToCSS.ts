export default function (props: { value: number, unit: string }): string {
  return props.value.toString() + props.unit;
}