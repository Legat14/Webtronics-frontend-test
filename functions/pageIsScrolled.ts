import getPagePosition from "./getPagePositionY";

export default function pageIsScrolled(headerHeight: number): boolean {
  const yOffset = getPagePosition();
  return yOffset > headerHeight;
}