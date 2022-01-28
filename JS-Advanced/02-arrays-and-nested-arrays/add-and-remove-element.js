function addAndRemoveElement(commands) {
  let result = [];

  for (let i = 0; i < commands.length; i++) {
    let element = commands[i];
    if (commands[i] === "add") {
      result.push(i + 1);
    } else {
      result.pop();
    }
  }

  return result.length > 0 ? result.join("\n") : "Empty";
}

console.log(addAndRemoveElement(['remove', 
'remove', 
'remove']
));
