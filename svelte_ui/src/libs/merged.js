import a from "../data/a.json";
import b from "../data/b.json";
import c from "../data/c.json";
import d from "../data/d.json";
import e from "../data/e.json";
import f from "../data/f.json";
import g from "../data/g.json";
import h from "../data/h.json";
import i from "../data/i.json";
import j from "../data/j.json";
import k from "../data/k.json";
import l from "../data/l.json";
import m from "../data/m.json";
import n from "../data/n.json";
import o from "../data/o.json";
import p from "../data/p.json";
import q from "../data/q.json";
import r from "../data/r.json";
import s from "../data/s.json";
import t from "../data/t.json";
import u from "../data/u.json";
import v from "../data/v.json";
import w from "../data/w.json";
import x from "../data/x.json";
import y from "../data/y.json";
import z from "../data/z.json";

const Merged = {
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  y,
  z,
};

const getFromMerged = (value) => {
  let first_letter = value.toLowerCase().charAt(0);
  if (!Object.keys(Merged).includes(first_letter)) {
    return false;
  } else {
    return Merged[first_letter][value];
  }
};
export default getFromMerged;
