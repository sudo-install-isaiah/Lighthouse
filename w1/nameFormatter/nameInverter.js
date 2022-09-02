const nameInverter = function (name) {
  const titles = ["Mr.", "Mrs.", "Ms.", "Dr."];

  if (name === "") {
    return "";
  }
  if (name === undefined) {
    throw new Error("Error");
  }
  if (name.split(" ").length > 1) {
    const noSpace = name.split(" ").filter((x) => x);
    if (noSpace.length === 1) {
      let singleName = noSpace.join(" ");
      return titles.includes(singleName) ? "" : singleName;
    } else if (noSpace.length === 2) {
      return titles.includes(noSpace[0])
        ? `${noSpace[0]} ${noSpace[1]}`
        : `${noSpace[1]}, ${noSpace[0]}`;
    }
    if (noSpace.length === 3) {
      return `${noSpace[0]} ${noSpace[2]}, ${noSpace[1]}`;
    }
  }
  return name;
};
module.exports = nameInverter;
