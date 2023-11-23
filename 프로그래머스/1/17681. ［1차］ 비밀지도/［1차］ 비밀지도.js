const solution = (n, arr1, arr2) => {
  const addArr = arr1.map((el, idx) => {
    let returnValue = "";

    const addMap = String(
      Number(el.toString(2).padStart(n, "0")) +
        Number(arr2[idx].toString(2).padStart(n, "0"))
    ).padStart(n, "0");

    for (let i = 0; i < n; i++) {
      if (addMap[i] === "0") {
        returnValue += " ";
      } else {
        returnValue += "#";
      }
    }

    return returnValue;
  });

  return addArr;
};