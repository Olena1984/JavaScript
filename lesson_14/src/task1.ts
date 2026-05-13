/* 
Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
----- Властивості ------
-	назва компанії на час розробки (назву періодично змінюють)
-	власник компанії
-	спонсори (масив спонсорів)
        * прізвище спонсора
        * ім’я  спонсора
        * сума вкладень спонсора
-	рік випуску
-	вартість сайту

Знайти:
1) загальну вартість усіх сайтів
2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
5) знайти рік, коли прибуток був найбільшим
6) упорядкувати список за спаданням прибутку
7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
*/
type SponsorsType = {
  surname: string;
  name: string;
  sponsorsInvestments: number;
};

type SitesType = {
  title: string;
  companyOwner: string;
  sponsors: SponsorsType[];
  productionYear: number;
  costOfSite: number;
};

const listSitesDevelopedCompany: SitesType[] = [
  {
    title: "Rozetka",
    companyOwner: "Vladyslav",
    sponsors: [
      {
        surname: "Ivanov",
        name: "Petro",
        sponsorsInvestments: 50000,
      },
      {
        surname: "German",
        name: "John",
        sponsorsInvestments: 50000,
      },
      {
        surname: "Smit",
        name: "Adam",
        sponsorsInvestments: 15000,
      },
      {
        surname: "Savchuk",
        name: "Vitaliy",
        sponsorsInvestments: 10000,
      },
    ],
    productionYear: 2000,
    costOfSite: 1300000,
  },
  {
    title: "OLX",
    companyOwner: "EVO",
    sponsors: [
      {
        surname: "'Kovalenko",
        name: "Olena",
        sponsorsInvestments: 30000,
      },
      {
        surname: "Smart",
        name: "Julia",
        sponsorsInvestments: 20000,
      },
    ],
    productionYear: 2005,
    costOfSite: 9000,
  },
  {
    title: "Prom",
    companyOwner: "Prosus",
    sponsors: [
      {
        surname: "Tusa",
        name: "Anna",
        sponsorsInvestments: 10000,
      },
      {
        surname: "Bokalo",
        name: "Matthew",
        sponsorsInvestments: 30000,
      },
      {
        surname: "Onysko",
        name: "Bozhena",
        sponsorsInvestments: 25000,
      },
    ],
    productionYear: 2018,
    costOfSite: 1500000,
  },
  {
    title: "Amazon",
    companyOwner: "Jeffrey",
    sponsors: [
      {
        surname: "Jackson",
        name: "Alan",
        sponsorsInvestments: 40000,
      },
      {
        surname: "Klark",
        name: "Matthew",
        sponsorsInvestments: 30000,
      },
      {
        surname: "Dymko",
        name: "Alex",
        sponsorsInvestments: 25000,
      },
    ],
    productionYear: 2004,
    costOfSite: 2000000,
  },
];
// 1) загальну вартість усіх сайтів
let totalCostsSites = listSitesDevelopedCompany.reduce(
  (prevCost, currentCost) => prevCost + currentCost.costOfSite,
  0,
);
console.log(totalCostsSites);

document.write(`<p>Загальна вартість усіх сайтів: ${totalCostsSites}</p><br>`);

// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
let sitesCount = listSitesDevelopedCompany.filter(
  (element) => element.productionYear >= 2000 && element.productionYear <= 2009,
).length;

// let sitesCount = listSitesDevelopedCompany.reduce(
//   (prevCount, year) =>
//     year.productionYear >= 2000 && year.productionYear <= 2009
//       ? prevCount + 1
//       : prevCount,
//   0,
// );
console.log(sitesCount);

document.write(
  `<p>Кількість сайтів, що було зроблено між 2000 та 2009 рр = ${sitesCount}</p><br>`,
);

// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000

let sponsorsSumMore10000 = listSitesDevelopedCompany.filter((element) => {
  let sponsorsSum = element.sponsors.reduce(
    (prevSum, sponsor) => prevSum + sponsor.sponsorsInvestments,
    0,
  );
  return sponsorsSum > 100000;
}).length;
console.log(sponsorsSumMore10000);
document.write(
  `<p> Кількість сайтів, де сума спонсорських вкладень була більшою за 100000 = ${sponsorsSumMore10000}</p><br>`,
);

// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)

const sponsorsList = listSitesDevelopedCompany
  .map((element) => element.sponsors)
  .flat();
console.log(sponsorsList);

// JSON.stringify(sponsorsList);
// document.write(`<p>${JSON.stringify(sponsorsList)}</p><br>`);

// 5) знайти рік, коли прибуток був найбільшим

let yearMaxProduct = listSitesDevelopedCompany.reduce(
  (maxProduct, currentProduct) =>
    maxProduct.costOfSite > currentProduct.costOfSite
      ? maxProduct
      : currentProduct,
);
console.log(yearMaxProduct.productionYear);
document.write(
  `<p>Рік, коли прибуток був найбільшим = ${yearMaxProduct.productionYear}</p><br>`,
);

// 6) упорядкувати список за спаданням прибутку

let sortProductList = [...listSitesDevelopedCompany].sort(
  (a, b) => b.costOfSite - a.costOfSite,
);
console.log(sortProductList);

// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
const listSitesLess10000 = listSitesDevelopedCompany.filter((element) => element.costOfSite < 10000).map(element=> ({...element}))

// const listSitesLess10000 = structuredClone(listSitesDevelopedCompany.filter((element) => element.costOfSite < 10000))
console.log(listSitesLess10000);

const listSiteMore10000 = listSitesDevelopedCompany.filter((element) => element.costOfSite > 10000).map(element=> ({...element}))

// const listSiteMore10000 = structuredClone(listSitesDevelopedCompany.filter((element) => element.costOfSite > 10000))
console.log(listSiteMore10000);