/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length === 0){
    return [];
  }
  const categoryTotals = {};
  transactions.forEach(transaction => {
    const { category, price } = transaction;
    
    if(category && typeof price==='number'){
      if(categoryTotals[category]){
      categoryTotals[category] += price;
    }
    else{
      categoryTotals[category] = price;      
    }
  }
  })

  const result = Object.keys(categoryTotals).map(category=>({
    category: category,
    totalSpent: categoryTotals[category]
  }))

  return result;
}

module.exports = calculateTotalSpentByCategory;
