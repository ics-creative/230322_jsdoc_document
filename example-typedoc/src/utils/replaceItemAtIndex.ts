/**
 * 指定番号の要素を置き換えます。
 *
 * @param arr 元の配列。
 * @param index 変更したいインデックス
 * @param newValue 置き換えたい要素
 * @return 新しい配列
 */
export function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
