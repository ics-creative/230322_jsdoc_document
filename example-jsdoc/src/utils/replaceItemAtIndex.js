/**
 * 指定番号の要素を置き換えます。
 *
 * @param arr {Array} 元の配列。
 * @param index {Number} 変更したいインデックス
 * @param newValue 置き換えたい要素
 * @return {Array} 新しい配列
 */
export function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
