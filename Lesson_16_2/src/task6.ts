// Об’єкт “Фірма”
// поля:
// назва фірми;
// дата заснування (рік, місяць);
// послуги (назва послуги, вартість, термін виконання);
// адреси філіалів (країна, місто, вулиця, номер будинку);
// методи:
// визначення кількості років існування фірми;
// виведення всіх філіалів фірми у вказаному місті;
// виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;


type ServicesType = {
  nameService: string;
  price: number;
  deadline: number;
};
type City = {
  city: string;
  street: string;
  number: number;
};
type BranchAddressesType = {
  country: string;
  cities: City[];
};

class Company {
  company: string = "MANGO";
  fullYears: number = 0;
  branch: string[] = [];
  service:string[]=[];
  #foundingDate: Date = new Date(0, 0);
  #services: ServicesType[] = [];
  #branchAddresses: BranchAddressesType[] = [];
  constructor(
    foundingDate: Date,
    services: ServicesType[],
    branchAddresses: BranchAddressesType[],
  ) {
    this.FoundingDate = foundingDate;
    this.Services = services;
    this.BranchAddresses = branchAddresses;
  }
  get FoundingDate() {
    return this.#foundingDate;
  }
  set FoundingDate(newDate) {
    this.#foundingDate = newDate;
  }
  get Services() {
    return this.#services;
  }
  set Services(newServices: ServicesType[]) {
    this.#services = newServices;
  }
  get BranchAddresses() {
    return this.#branchAddresses;
  }
  set BranchAddresses(newBranches: BranchAddressesType[]) {
    this.#branchAddresses = newBranches;
  }
  getYearsCompany(newDate: Date) {
    const diff = newDate.getTime() - this.FoundingDate.getTime();
    console.log(diff);

    const msInYears = 1000 * 60 * 60 * 24 * 365.25; //( 31 557 600 000)
    const years = Math.floor(diff / msInYears);
    this.fullYears = years;
    return `Компанія існує  ${years} роки`;
  }
  getAllBranches(city:string):string{
    const findCity = this.BranchAddresses.flatMap((item) => item.cities).filter(
      (c) => c.city === city,
    );

    this.branch = findCity.map(
      (element) => `${element.city} - ${element.street}: ${element.number}`,
    );

    return `Кількість філіалів у місті: ${this.branch}`;
  }

  getServices(price: number, year: number) {
    const findService = this.Services.filter(
      (element) => element.deadline <= year && element.price <= price,
    );
    this.service = findService.map(item => `${item.nameService} -price = ${item.price} - year = ${item.deadline}`)
    return `${this.service}`
  }

  toString() {
    return `${this.company} існує: ${this.fullYears} років.<br> Кількість філіалів = ${this.branch}<br> Послуги до виконання: ${this.service}`;
  }
}
const foundingDate = new Date(2002, 11);

const services: ServicesType[] = [
  {
    nameService: "Textile branding",
    price: 456783,
    deadline: 2029,
  },
  {
    nameService: "Contract production of clothing",
    price: 500000,
    deadline: 2030,
  },
  {
    nameService: "Clothing branding",
    price: 55000,
    deadline: 2027,
  },
  {
    nameService: "Tailoring of corporate clothing",
    price: 100000,
    deadline: 2028,
  },
];
const branches: BranchAddressesType[] = [
  {
    country: "Ukraine",
    cities: [
      {
        city: "Lviv",
        street: "Shevchenko",
        number: 34,
      },
      {
        city: "Ternopil",
        street: "L.Ukrainka",
        number: 400,
      },
      {
        city: "Kyiv",
        street: "Khreshchatyk",
        number: 123,
      },
    ],
  },
  {
    country: "Canada",
    cities: [
      { city: "Toronto", street: "Shevchenko", number: 23 },
      {
        city: "Calgary",
        street: "L.Ukrainka",
        number: 100,
      },
      {
        city: "Winnipeg",
        street: "Khreshchatyk",
        number: 45,
      },
    ],
  },
];
const dateNow: Date = new Date();
const company = new Company(foundingDate, services, branches);
console.log(company.getYearsCompany(dateNow));
console.log(company.getAllBranches("Lviv"));
console.log(company.getServices(60000, 2029));
// document.write(`${company.getYearsCompany(dateNow)}`)
// document.write(`${company.getAllBranches('Lviv')}`)
document.write(`${company.toString()}`);
