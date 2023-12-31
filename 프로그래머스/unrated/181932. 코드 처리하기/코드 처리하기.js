const solution = (code) => {
  let mode = "0";
  let ret = "";
  for (let i = 0; i < code.length; i++) {
    console.log(mode);
    if (code[i] === "1") {
      mode = mode === "0" ? "1" : "0";
    } else if (mode === "0" && i % 2 === 0) {
      ret += code[i];
    } else if (mode === "1" && i % 2 === 1) {
      ret += code[i];
    }
  }

  ret = ret.length === 0 ? "EMPTY" : ret;
  return ret;
};
