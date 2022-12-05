type stringOrNum = string | number;
type userProps = { name: string; uid: stringOrNum };

const logDetails = (uid: stringOrNum, item: string) => {
  console.log(`${item} has an uid of ${uid}`);
};

const greetUser = (user: userProps) => {
  console.log(`${user.name} says hello!`);
};
