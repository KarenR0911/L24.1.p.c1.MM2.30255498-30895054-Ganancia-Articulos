export default class Articulo {
  constructor(cod, cos, p) {
    this.codigo = cod;
    this.costo = cos;
    this.precio = p;
  }
  set codigo(cod) {
    this._codigo = cod;
  }
  set costo(cos) {
    this._costo = cos;
  }
  set precio(p) {
    this._precio = p;
  }
  get codigo() {
    return this._codigo;
  }
  get costo() {
    return this._costo;
  }
  get precio() {
    return this._precio;
  }
}
