const areKeysEqual=(a, b)=> {
  let aKeys = Object.keys(a).sort();
  let bKeys = Object.keys(b).sort();
  return aKeys.join('') === bKeys.join('');
}

export default areKeysEqual