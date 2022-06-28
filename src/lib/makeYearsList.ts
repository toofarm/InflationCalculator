const makeYearsList = () => {
  const res = [];
  const present = new Date();
  const year = present.getFullYear();
  for (let i = 1800; i <= year; i += 1) {
    res.push(i);
  }
  return res;
};

export default makeYearsList;
