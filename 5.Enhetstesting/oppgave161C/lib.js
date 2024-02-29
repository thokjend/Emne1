function checkText(text) {
  let index = text.indexOf("@");
  let textBefore = text.slice(0, index);
  let textAfter = text.slice(index + 1);

  let result =
    textBefore.includes(".") && textAfter.includes(".") && text.includes("@")
      ? true
      : false;
  return result;
}
