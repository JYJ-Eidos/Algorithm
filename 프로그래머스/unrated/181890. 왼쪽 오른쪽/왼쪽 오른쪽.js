const solution = (str_list) => {
  const indexOfl = str_list.indexOf("l");
  const indexOfr = str_list.indexOf("r");

  if (indexOfl === -1 && indexOfr === -1) {
    return [];
  } else if (indexOfl === -1) {
    return str_list.slice(indexOfr + 1);
  } else if (indexOfr === -1) {
    return str_list.slice(0, indexOfl);
  } else {
    return indexOfl < indexOfr
      ? str_list.slice(0, indexOfl)
      : str_list.slice(indexOfr + 1);
  }
};