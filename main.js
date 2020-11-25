const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//Get 21 and older
  const canDrink = ages.filter(age => age >=21);

//Get all companies where category is retail
const retailCompanies = companies.filter(company => company.category === 'Retail')

//Get companies that lasted more than 10 years
const lasted10years = companies.filter(company => (company.end - company.start <= 10));

//square all ages
const squaredAges = ages.map(age=> Math.sqrt(age))

//Calculate the total of all ages in the array
const ageSum = ages.reduce((total, age) => total + age, 0);

//Get total years for all companies
const totalYears = companies.reduce((total, years) => total + (years.end - years.start), 0);

//Combine map, filter and reduce
const combinedAges = ages.map(age => age * 2)
    .filter(age => age >= 42)
    .sort((a, b) => b - a)
    .reduce((total, age) => total + age, 0);






console.log(combinedAges);
  



  