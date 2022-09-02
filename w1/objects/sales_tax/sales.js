const calculateSalesTax = function (salesData, taxRates) {
  let result = {};

  for (let company of salesData) {
    result[company["name"]] = { totalSales: 0, totalTax: 0 };
  }

  for (let i = 0; i < salesData.length; i++) {
    let storeSale = 0;
    let tax = 0;
    let compName = salesData[i]["name"];
    let prov = salesData[i]["province"];
    let provTax = taxRates[prov];

    for (let j = 0; j < salesData[i]["sales"].length; j++) {
      storeSale += salesData[i]["sales"][j];
    }

    tax = storeSale * provTax;
    result[compName]["totalSales"] += storeSale;
    result[compName]["totalTax"] += tax;
  }
  return result;
};

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1,
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400],
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500],
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100],
  },
];
console.log(calculateSalesTax(companySalesData, salesTaxRates));
