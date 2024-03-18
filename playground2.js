/**
 * Computes the monthly charge for a given subscription.
 *
 * @returns {number} The total monthly bill for the customer in cents, rounded
 * to the nearest cent. For example, a bill of $20.00 should return 2000.
 * If there are no active users or the subscription is null, returns 0.
 *
 * @param {string} month - Always present
 *   Has the following structure:
 *   "2022-04"  // April 2022 in YYYY-MM format
 *
 * @param {object} subscription - May be null
 *   If present, has the following structure:
 *   {
 *     'id': 763,
 *     'customerId': 328,
 *     'monthlyPriceInCents': 359  // price per active user per month
 *   }
 *
 * @param {array} users - May be empty, but not null
 *   Has the following structure:
 *   [
 *     {
 *       'id': 1,
 *       'name': "Employee #1",
 *       'customerId': 1,
 *   
 *       // when this user started
 *       'activatedOn': new Date("2021-11-04"),
 *   
 *       // last day to bill for user
 *       // should bill up to and including this date
 *       // since user had some access on this date
 *       'deactivatedOn': new Date("2022-04-10")
 *     },
 *     {
 *       'id': 2,
 *       'name': "Employee #2",
 *       'customerId': 1,
 *   
 *       // when this user started
 *       'activatedOn': new Date("2021-12-04"),
 *   
 *       // hasn't been deactivated yet
 *       'deactivatedOn': null
 *     },
 *   ]
 */

// month: "2022-04" string
// subscription: (can be null, what do?)
//  {
//      'id': 763,
//      'customerId': 328,
//      'monthlyPriceInCents': 359  // price per active user per month
//  *   }
// users array
//  *     {
//  *       'id': 1,
//  *       'name': "Employee #1",
//  *       'customerId': 1,
//  *       'activatedOn': new Date("2021-11-04"),
//  *       'deactivatedOn': new Date("2022-04-10")
//  *     },
function monthlyCharge(month, subscription, users) {
  if (!subscription || users.length == 0) {
    return 0;
  }
 
  const date = new Date(month);
  // https://www.htmlgoodies.com/javascript/calculating-the-difference-between-two-dates-in-javascript/
  const daysInMonth = (lastDayOfMonth(date) - firstDayOfMonth(date)) / 86400000 + 1
  const dailyRate = (subscription.monthlyPriceInCents / daysInMonth).toFixed(2);
  let totalCharge = 0;
  let day = firstDayOfMonth(date);
  
  // for each day of month
  while(day <= lastDayOfMonth(date)) {
     //  For each day of the month, identify which users had an active subscription on that day
    // for each day of month (eg Oct 2018)
    // for each user
    // did activatedOn and deactivatedOn window overlap with that day
    const activeUsers = users.filter(user => {
        const userActiveBeforeFirstDay = user.activatedOn <= day;
        const userNotDeactivated = (user.deactivatedOn >= day || user.deactivatedOn === null);
        return userActiveBeforeFirstDay && userNotDeactivated;
    })
    
    
    // Multiply the number of active users for the day by the daily rate to calculate the total for the day
    totalCharge += activeUsers.length * dailyRate;
    day = nextDay(day);
  }
  
  return Math.round(totalCharge); // TODO may need to round; Math.round
}

/*******************
* Helper functions *
- firstDayOfMonth(date) -> new Date(2022, 3, 1)
 - lastDayOfMonth(date) -> ''
 - nextDay(date) ->
*******************/

/**
 * Takes a Date instance and returns a Date which is the first day
 * of that month. For example:
 *
 * firstDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 1)
 *
 * Input type: Date
 * Output type: Date
**/
function firstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

/**
 * Takes a Date object and returns a Date which is the last day of that month.
 *
 * lastDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 31)
 *
 * Input type: Date
 * Output type: Date
**/
function lastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

/**
 * Takes a Date object and returns a Date which is the next day.
 * For example:
 *
 * nextDay(new Date(2022, 3, 17))  // => new Date(2022, 3, 18)
 * nextDay(new Date(2022, 3, 31))  // => new Date(2022, 4, 1)
 *
 * Input type: Date
 * Output type: Date
**/
function nextDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}


// tests


describe('monthlyCharge', function() {
  // ... existing tests ...



  it('works when some users are deactivated during the month', function() {
    const usersWithDeactivation = [
      {
        id: 1,
        name: 'Employee #1',
        activatedOn: new Date('2019-01-01'),
        deactivatedOn: new Date('2020-12-15'),
        customerId: 1,
      },
      {
        id: 2,
        name: 'Employee #2',
        activatedOn: new Date('2019-01-01'),
        deactivatedOn: null,
        customerId: 1,
      },
    ];
    const expectedCharge = 5000 + Math.round(5000 * 15 / 31);
    assert.closeTo(monthlyCharge('2020-12', plan, usersWithDeactivation), expectedCharge, 1);
  });

  it('works when some users are activated during the month', function() {
    const usersWithActivation = [
      {
        id: 1,
        name: 'Employee #1',
        activatedOn: new Date('2020-12-15'),
        deactivatedOn: null,
        customerId: 1,
      },
      {
        id: 2,
        name: 'Employee #2',
        activatedOn: new Date('2019-01-01'),
        deactivatedOn: null,
        customerId: 1,
      },
    ];
    const expectedCharge = 5000 + Math.round(5000 * 16 / 31);
    assert.closeTo(monthlyCharge('2020-12', plan, usersWithActivation), expectedCharge, 1);
  });


  // using a map to optimize

  function monthlyCharge(month, subscription, users) {
    if (!subscription || users.length == 0) {
      return 0;
    }
  
    const date = new Date(month);
    const daysInMonth = (lastDayOfMonth(date) - firstDayOfMonth(date)) / 86400000 + 1
    const dailyRate = (subscription.monthlyPriceInCents / daysInMonth).toFixed(2);
  
    // Create a hashmap to store the count of active users for each day
    const activeUsersCount = {};
    for (let i = 0; i < daysInMonth; i++) {
      activeUsersCount[i] = 0;
    }
  
    // Iterate over the users array once to update the hashmap
    for (const user of users) {
      const activatedDay = user.activatedOn.getDate();
      const deactivatedDay = user.deactivatedOn ? user.deactivatedOn.getDate() : daysInMonth;
      for (let i = activatedDay; i <= deactivatedDay; i++) {
        activeUsersCount[i]++;
      }
    }
  
    // Calculate the total charge based on the hashmap
    let totalCharge = 0;
    for (const day in activeUsersCount) {
      totalCharge += activeUsersCount[day] * dailyRate;
    }
  
    return Math.round(totalCharge);
  }