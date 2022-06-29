const formatDollarAmount = (num: number): string => {
  const res = [];
  let trailing = "00";
  let str: string | string[] = num.toString();
  str = str.replace(" ", "");
  if (str.includes(".")) {
    const temp = str.split(".");
    trailing = temp[1].toString();
    str = temp[0];
  }
  const arr = [...str];
  let count = arr.length - 1;
  let commaCount = 0;
  while (count >= 0) {
    if (res.length && (res.length - commaCount) % 3 === 0) {
      res.push(",");
      commaCount += 1;
    }
    res.push(arr[count]);
    count -= 1;
  }
  return `$${res.reverse().join("")}.${trailing}`;
};

export default formatDollarAmount;
