// flat mark up of 5% on all jobs
// per person markup of 1.2% per person
// pharm extra markup 7.5%
// food extra markup 13%
// electronics extra 2% markup
// everything else no other markup

module.exports = {
  pricer: function(cost, staff, materials) {
    let flatRate = 0.05;
    let staffRate = 0.012;
    let materialRate;

    if (materials === 'pharmaceuticals' || materials === 'drugs') {
      materialRate = 0.075;
    } else if (materials === 'food') {
      materialRate = 0.13;
    } else if (materials === 'electronics') {
      materialRate = 0.02;
    } else {
      materialRate = 0;
    }

    flatCost = cost + (cost * flatRate);
    return 'Output: $' + (flatCost + (flatCost * (staff * staffRate)) + (flatCost * materialRate)).toFixed(2);
  }
}
