import { sum } from "lodash";

export function calculateTotal(items, tax) {

  //declaring variables
  let total_sum = 0

  //ensuring no negative values of tax passed in
  tax = Math.abs(tax)

  for (let item of items) {
    const { taxable, price } = item

    // every actual object returns truthy so no need to specify if taxable === true 

    if (taxable) {
      total_sum += price * (1 + tax)
    } else {
      total_sum += price
    }
  }
  return total_sum
}
