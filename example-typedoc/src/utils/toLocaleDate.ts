/**
 * YYYY年MM月DD日の形式に変換します。
 *
 * @param date Dateオブジェクト
 * @return  YYYY年MM月DD日の形式
 */
export const toLocaleDate = (date: Date) =>
  `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
