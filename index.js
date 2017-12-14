const app = "I don't do much."

function destructivelyAppendKitten(name) {
    kittens = ["Milo", "Otis", "Garfield" ];
    kittens.push(name);
    return kittens;
}

function destructivelyPrependKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  [...kittens, name];
  return newArray;
}

function kittens(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  prependKitten(name);
  return kittens;
}

function removeFirstKitten(name) {
  window.kittens = ["Milo", "Otis", "Garfield"];
  kittens.slice(0);
  return kittens;
}

function removeLastKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.slice(2);
  window.kittens = kittens.slice;
  return window.kittens;
}
