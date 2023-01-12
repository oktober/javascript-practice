/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

Cash Register

* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
* cid is a 2D array listing available currency.
* The checkCashRegister() function should always return an object with a status key and a change key.

* Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
* Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
* Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
 
*/

function checkCashRegister(price, cash, cid) {

    // each currency's value in cents
    const currencyInCents = {
      "ONE HUNDRED": 10000,
      "TWENTY": 2000,
      "TEN": 1000,
      "FIVE": 500,
      "ONE": 100,
      "QUARTER": 25,
      "DIME": 10,
      "NICKEL": 5,
      "PENNY": 1
    };

  // convert `price` and `cash` to ints for math to work properly
  const priceInCents = parseInt((price * 100).toFixed());
  const cashInCents = parseInt((cash * 100).toFixed());

  // calculate the total amount of change to return
  const returnChangeInCents = cashInCents - priceInCents;

  // variable to hold the returnChangeInCents that we can modify
  let updatedReturnChange = returnChangeInCents;

  // array to store change to return
  const changeArray = [];

  // variable to hold the sum of all amounts in changeArray
  let changeTotalInCents = 0;

  // go through each currency in cid in reverse (from highest currency to lowest)
  for (let i = cid.length-1; i >=0; i--) {

    let cidCurrencyName = cid[i][0];
    let cidCurrencyAmount = cid[i][1];

    // convert this currency's amount to cents (for proper maths)
    let cidCurrencyAmountInCents = parseInt((cidCurrencyAmount * 100).toFixed());

    // get the value of 1 of this currency
    let SingleCurrencyValueInCents = currencyInCents[cidCurrencyName];

    // subtract one of this currency from updatedReturnChange
    let difference = updatedReturnChange - SingleCurrencyValueInCents;

    // if there's change available in this currency 
    // AND there's enough in updatedReturnChange for 1 of this currency
    if (cidCurrencyAmount > 0 && difference >= 0) {
        
        let numOfCurrency = 0;
        let currencyAmountInCents = 0;

        // calculate how many of this currency we can return
        do {
          // give another unit of this currency for change
          numOfCurrency++;

          // calculate total amount used of this currency
          currencyAmountInCents = SingleCurrencyValueInCents * numOfCurrency;

          // remove 1 of this currency from the returnChange total
          updatedReturnChange -= SingleCurrencyValueInCents;

          // amount left when we remove 1 of this currency from the returnChange total
          difference = updatedReturnChange - SingleCurrencyValueInCents;

          // to loop again, see if we have enough in updatedReturnChange to give another unit of this currency
          // AND the amount we've given back is still less than what's available in cid
        } while (difference >= 0 && currencyAmountInCents < cidCurrencyAmountInCents)

        // store the name & amount of that currency to return in ChangeArray 
        changeArray.push([cidCurrencyName, currencyAmountInCents / 100]);

        // add the amount of this currency to the total of the change we can return
        changeTotalInCents += currencyAmountInCents;
    }
  }

  // if we can return the exact change
  if (changeTotalInCents === returnChangeInCents) {
    // check if every currency in changeArray equal the currency in cid
    const changeIsEqual = changeArray.every( function(element) {

      // find this currency in cid
      let amountInCID = cid.find(currency => currency[0] === element[0]);

      // if this currency's amount equals the amount in cid
      if (element[1] === amountInCID[1]) {
        return true;
      }       
    });

    if (changeIsEqual) {
      // currency in changeArray is === the currency in cid
      return { status: "CLOSED", change: cid }; 
    } else {
      // currency in changeArray is > the currency in cid
      return { status: "OPEN", change: changeArray };
    }
  }

  // there's not enough change in the drawer to return
  return { status: "INSUFFICIENT_FUNDS", change: [] };

}

// OPEN
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), 'should return {status: "OPEN", change: [["QUARTER", 0.5]]}');

// OPEN
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), 'should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}');

// INSUFFICIENT_FUNDS
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), 'should return {status: "INSUFFICIENT_FUNDS", change: []}');

// INSUFFICIENT_FUNDS
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), 'should return {status: "INSUFFICIENT_FUNDS", change: []}');

// CLOSED
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), 'should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}');
