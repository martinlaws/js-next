const getUser = username => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(username);
    }, 1000);
  });
};

const getBankBalance = user => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === "martin") {
        resolve("$50");
      } else {
        reject("unkown user");
      }
    });
  });
};

// Old school
const getAmount = username => {
  getUser(username)
    .then(getBankBalance)
    .then(amount => console.log(amount));
};

getAmount("martin");

// New school (async/await)
const getAmountAsync = async function(username) {
  const user = await getUser(username);
  const amount = await getBankBalance(user);
  console.log(amount);
};

getAmountAsync("martin");

// getAmountAsync("marty");

// New school (async/await) with error handling
const getAmountAsyncWithErrorHandling = async function(username) {
  try {
    const user = await getUser(username);
    const amount = await getBankBalance(user);
    console.log(amount);
  } catch (err) {
    console.error("we know how to handle an", err);
    return "no entry for you";
  }
};

getAmountAsyncWithErrorHandling("marty");
