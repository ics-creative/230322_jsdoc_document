/**
 * YYYY年MM月DD日の形式に変換します。
 *
 * @method
 * @param date {Date} Dateオブジェクト
 * @return {string} YYYY年MM月DD日の形式
 */
export const toLocaleDate = (date) =>
  `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
