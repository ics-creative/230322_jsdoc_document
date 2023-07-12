/**
 * Point オブジェクトは 2 次元の座標系の位置を表します。
 * x は水平方向の軸を表し、y は垂直方向の軸を表します。
 */
export class Point {
  /**
   * @param x X座標
   * @param y Y座標
   */
  constructor(
    public x: number,
    public y: number,
  ) {}

  /**
   * (0,0) からこのポイントまでの線のセグメントの長さです。

   */
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * このポイントの座標に他のポイントの座標を加算して、新しいポイントを作成します。
   *
   * @param v 追加するポイントです。
   * @return 	新しいポイントです。
   */
  add(v: Point) {
    return new Point(this.x + v.x, this.y + v.y);
  }

  /**
   * ポイント1とポイント2との距離を返します。
   * @param p1  最初のポイントです。
   * @param p2  2 番目のポイントです。
   * @return  最初のポイントと 2 番目のポイント間の距離です。
   */
  static distance(p1: Point, p2: Point) {
    const x = p1.x - p2.x;
    const y = p1.y - p2.y;
    return Math.sqrt(x * x + y * y);
  }

  /**
   * 極座標ペアを直交点座標に変換します。
   *
   * @param len 極座標ペアの長さ座標です。
   * @param angle  極座標ペアの角度（ラジアン単位）です。
   * @return 直交ポイントです。
   */
  static polar(len: number, angle: number) {
    return new Point(len * Math.cos(angle), len * Math.sin(angle));
  }
}
