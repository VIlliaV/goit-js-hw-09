const save = (key, value) => {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(key, serializedData);
  } catch (err) {
    console.log(error.name);
    console.log(error.message);
  }
};
const load = key => {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData === null ? undefined : JSON.parse(serializedData);
  } catch (err) {
    console.log(error.name);
    console.log(error.message);
  }
};
export { save, load };
