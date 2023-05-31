module.exports = {
  /**
   * 返回两个日期之间的差异 (以天为值)
   * @param dateInitial 例子：new Date("2017-12-13")
   * @param dateFinal 例子：new Date("2017-12-22")
   * @returns {number} 例子：9
   */
  dateGetDayBetweenDates: (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24),


};

