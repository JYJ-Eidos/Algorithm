const solution = (num_list) => {
  let odd = [];
  let even = [];
  num_list.forEach((num) => {
    num % 2 === 1 ? odd.push(num) : even.push(num);
  });
  return Number(odd.join("")) + Number(even.join(""));
};
