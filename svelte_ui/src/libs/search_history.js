export default class CachedData {
  constructor() {
    this.db_name = "cached_data";
    this.maxSize = 100;
    this.data = [];
  }

  _append(data, value) {
    data.reverse();
    data.pop();
    data.reverse();
    data.push(value);
  }
  _save(history) {
    let json = JSON.stringify(history);
    localStorage.setItem(this.db_name, json);
  }

  _get() {
    let history = localStorage.getItem(this.db_name);
    if (!!history) {
      return JSON.parse(history);
    } else return { data: [] };
  }

  add(value) {
    let { data } = this._get();
    if (!data.includes(value)) {
      if (data.length == this.maxSize) {
        this._append(data, value);
      } else data.push(value);
      this._save({ current: data.length - 1, data });
    }
  }

  next() {
    let { current, data } = this._get();
    let index = current + 1;
    if (index < data.length) {
      this._save({ current: index, data });
      return data[index];
    }
    return data[data.length - 1];
  }
  previous() {
    let { current, data } = this._get();
    let index = current - 1;
    if (index >= 0) {
      this._save({ current: index, data });
      return data[index];
    }
    return data[0];
  }
}
