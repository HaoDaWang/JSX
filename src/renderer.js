function r(ele, domEle) {
  if (Object.prototype.toString.call(ele) === "[object String]") {
    domEle.appendChild(document.createTextNode(ele));
    return domEle;
  }

  let { tag, attrs = {}, children } = ele;
  let dom = document.createElement(tag);

  // Attributes
  for (let attrName of Object.keys(attrs)) {
    dom.setAttribute(attrName, attrs[attrName]);
  }

  // Children
  for (let child of children) {
    dom = r(child, dom);
  }

  if (domEle) {
    domEle.appendChild(dom);
    return domEle;
  }

  return dom;
}

export function render(ele, bindEle) {
  bindEle.appendChild(r(ele));
}
