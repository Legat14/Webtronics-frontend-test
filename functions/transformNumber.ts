export default function transformNumber(props: { value: number, ratio: number }): number {
  return props.value * props.ratio;
}
