function circleArea(input) {
  let type = typeof input;
  if (type === "number") {
    return (input ** 2 * Math.PI).toFixed(2);
  } else {
    return `We can not calculate the circle area, because we receive a ${type}.`;
  }
}

circleArea(5);
