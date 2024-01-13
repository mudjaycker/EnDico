const getDicoData = async (file) => {
  let result = await fetch("/dico_data/" + file);
  return await result.json();
};

const Merged = {
  a: async () => await getDicoData("a.json"),
  b: async () => await getDicoData("b.json"),
  c: async () => await getDicoData("c.json"),
  d: async () => await getDicoData("d.json"),
  e: async () => await getDicoData("e.json"),
  f: async () => await getDicoData("f.json"),
  g: async () => await getDicoData("g.json"),
  h: async () => await getDicoData("h.json"),
  i: async () => await getDicoData("i.json"),
  j: async () => await getDicoData("j.json"),
  k: async () => await getDicoData("k.json"),
  l: async () => await getDicoData("l.json"),
  m: async () => await getDicoData("m.json"),
  n: async () => await getDicoData("n.json"),
  o: async () => await getDicoData("o.json"),
  p: async () => await getDicoData("p.json"),
  q: async () => await getDicoData("q.json"),
  r: async () => await getDicoData("r.json"),
  s: async () => await getDicoData("s.json"),
  t: async () => await getDicoData("t.json"),
  u: async () => await getDicoData("u.json"),
  v: async () => await getDicoData("v.json"),
  w: async () => await getDicoData("w.json"),
  x: async () => await getDicoData("x.json"),
  y: async () => await getDicoData("y.json"),
  z: async () => await getDicoData("z.json"),
};

const getFromMerged = async (value) => {
  let first_letter = value.toLowerCase().charAt(0);
  if (Object.keys(Merged).includes(first_letter)) {
    let data = await Merged[first_letter]();
    return data[value];
  } else {
    return false;
  }
};
export default getFromMerged;
