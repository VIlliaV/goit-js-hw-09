const save = (key, value) => {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(key, serializedData);
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
  }
};
const load = key => {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData === null ? undefined : JSON.parse(serializedData);
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
  }
};
const remove = key => {
  try {
    const serializedData = localStorage.removeItem(key);
    return serializedData === null ? undefined : undefined;
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
  }
};

export { save, load, remove };
