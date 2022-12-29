import isEqual from "lodash.isequal";
import { z } from "zod";

export const isOrChildOfElement = (
  target: HTMLElement,
  element: HTMLElement
) => {
  let equal = isEqual(target, element);
  element.childNodes.forEach((node) => {
    if (isEqual(target, node)) equal = true;
  });
  return equal;
};
