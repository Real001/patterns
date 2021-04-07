export default class SingletonClass {
  private static _instance: SingletonClass;
  private _value: number = 0;

  private constructor() {}

  public static get instance(): SingletonClass {
    if (!this._instance) {
      this._instance = new SingletonClass();
    }
    return this._instance;
  }

  get value() {
    return this._value;
  }

  set value(value: number) {
    this._value = value
  }
}


const singletonFunc = (function () {
  let instance;

  function init () {
    let value = 0;

    const getValue = () => {
      return value;
    };

    const setValue = (v) => {
      value = v;
    };

    return {
      getValue,
      setValue,
    }
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  }
})();