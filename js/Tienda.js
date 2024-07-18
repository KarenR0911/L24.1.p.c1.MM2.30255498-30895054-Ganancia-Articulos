export default class Tienda {
  constructor() {
    this.contArticulo = 0;
    this.acumPrecio = 0;
    this.contArticuloSuperior = 0;
  }
  procersaArticulo(art) {
    this.contArticulo++;
    this.acumPrecio += art.precio;
    if (art.precio >= 65) {
      this.contArticuloSuperior++;
    }
  }
  calcPromedio() {
    return this.acumPrecio / this.contArticulo;
  }
  devolverContArticulo() {
    return this.contArticuloSuperior;
  }
}
