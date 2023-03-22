/**
 * Point オブジェクトは 2 次元の座標系の位置を表します。
 * x は水平方向の軸を表し、y は垂直方向の軸を表します。
 */
export class Point {
  /**
   * @param x {Number} X座標
   * @param y {Number} Y座標
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * (0,0) からこのポイントまでの線のセグメントの長さです。
   * @return {Number}
   */
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * このポイントの座標に他のポイントの座標を加算して、新しいポイントを作成します。
   *
   * @param v {Point} 追加するポイントです。
   * @return 	{Point} 新しいポイントです。
   */
  add(v) {
    return new Point(this.x + v.x, this.y + v.y);
  }

  /**
   * ポイント1とポイント2との距離を返します。
   * @param p1 {Point} 最初のポイントです。
   * @param p2 {Point}  2 番目のポイントです。
   * @return {number} 最初のポイントと 2 番目のポイント間の距離です。
   */
  static distance(p1, p2) {
    const x = p1.x - p2.x;
    const y = p1.y - p2.y;
    return Math.sqrt(x * x + y * y);
  }

  /**
   * 極座標ペアを直交点座標に変換します。
   *
   * @param len {Number} 極座標ペアの長さ座標です。
   * @param angle {Number} 極座標ペアの角度（ラジアン単位）です。
   * @return {Point} 直交ポイントです。
   */
  static polar(len, angle) {
    return new Point(len * Math.cos(angle), len * Math.sin(angle));
  }
}
