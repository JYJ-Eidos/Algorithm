const solution = (array) => {
  const removeSeven = /7/g;
  return array.join("").length - array.join("").replace(removeSeven, "").length;
};
