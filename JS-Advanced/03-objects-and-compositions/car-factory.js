function carFactory(obj) {
  let result = {
    model: obj.model,
  };

  if (obj.power <= 90) {
    result.engine = {
      power: 90,
      volume: 1800,
    };
  } else if (obj.power <= 120) {
    result.engine = { power: 120, volume: 2400 };
  } else {
    result.engine = { power: 200, volume: 3500 };
  }

  result.carriage = {
    type: obj.carriage,
    color: obj.color,
  };

  let wheels = [];
  wheels.length = 4;
  let wheelsize =obj.wheelsize % 2 == 1 ? obj.wheelsize  : (obj.wheelsize - 1);
  wheels.fill(wheelsize, 0);

  result.wheels = wheels;

  return result;
}

console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
