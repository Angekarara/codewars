function filter_list(l) {
  return (fil = l.filter((list) => typeof list === "number"));
}
console.log(filter_list([1, "ena", 2, "uie"]));