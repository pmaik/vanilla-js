const solve = (value, key = "") => {
    if (
      value === null ||
      value === undefined ||
      ["string", "number"].includes(typeof value)
    ) {
      if (key) {
        return {
          [key]: value,
        };
      }
      return value;
    }
  
    let res = {};
    const keys = Object.keys(value);
  
    for (let i = 0; i < keys.length; i++) {
      const newKey = key ? `${key}.${keys[i]}` : `${keys[i]}`;
  
      const currObj = solve(value[keys[i]], newKey);
  
      res = { ...res, ...currObj };
    }
  
    return res;
  };
  
  const obj2 = {
    A: "12",
    B: 23,
    C: {
      P: 23,
      O: {
        L: 56,
      },
      Q: [1, 2],
    },
  };
  
  const obj1 = {
    A: "12",
    B: 23,
  };
  
  const res = solve(obj2);
  
  console.log("result is: ", res);
  