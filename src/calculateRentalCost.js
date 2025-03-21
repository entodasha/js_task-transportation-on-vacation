/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPay = 40;
  let totalAmount = days * dayPay;

  if (days >= 7) {
    totalAmount -= 50;
  } else if (days >= 3) {
    totalAmount -= 20;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
