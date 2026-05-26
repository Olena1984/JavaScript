/* 
Задача 3. Об’єкт “Фірма” (використати члени-класи)
поля
назва фірми;
дата заснування (рік, місяць);
послуги (назва послуги, вартість, термін виконання);
адреси філіалів (країна, місто, вулиця, номер будинку);
методи
визначення кількості років існування фірми;
виведення всіх філіалів фірми у вказаному місті;
виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

*/
type DateType = [year: number, month: number];

type CityType = {
  city: string;
  street: string;
  houseNumber: number;
};
type ServicesType = {
  service: string;
  cost: number;
  deadline: number;
};
type BranchAddressesType = {
  country: string;
  branch: CityType[];
};

class Company {
  #company: string = "";
  #dateOfEstablishment: DateType = [0, 0];
  #services: ServicesType[] = [];
  #branchAddresses: BranchAddressesType[] = [];
  #fullYears: number = 0;
  #city:string =''
  #currentServices =''
  constructor(
    company: string,
    dateOfEstablishment: DateType,
    services: ServicesType[],
    branchAddresses: BranchAddressesType[],
  ) {
    this.Company = company;
    this.DateOfEstablishment = dateOfEstablishment;
    this.BranchAddresses = branchAddresses;
    this.Services = services;
  }
  get Company() {
    return this.#company;
  }
  set Company(newCompany: string) {
    this.#company = newCompany;
  }
  get DateOfEstablishment() {
    return this.#dateOfEstablishment;
  }
  set DateOfEstablishment(newDate: DateType) {
    this.#dateOfEstablishment = newDate;
  }
  get BranchAddresses() {
    return this.#branchAddresses;
  }
  set BranchAddresses(newBranchList: BranchAddressesType[]) {
    this.#branchAddresses = newBranchList;
  }
  get Services() {
    return this.#services;
  }
  set Services(newServicesList: ServicesType[]) {
    this.#services = newServicesList;
  }
  // визначення кількості років існування фірми;
  determiningYearsCompany(newDate: [year: number, month: number]) {
    if (newDate[0] < this.DateOfEstablishment[0]) {
      throw new Error("Incorrect years");
    } else if (newDate[1] < this.DateOfEstablishment[1]) {
      this.#fullYears = newDate[0] - this.DateOfEstablishment[0] - 1;
    } else {
      this.#fullYears = newDate[0] - this.DateOfEstablishment[0];
    }
    return this.#fullYears;
  }
  // виведення всіх філіалів фірми у вказаному місті;
  displayBranches(city:string) {
    if (this.BranchAddresses) {
      // const findBranches = this.BranchAddresses.map(element =>(element.branch)).flat().filter(element=> element.city ===city)
      // або
      const findBranches = this.BranchAddresses.flatMap(
        (element) => element.branch,
      ).filter((element) => element.city === city);

      this.#city= findBranches.map(element=> `${element.city}, ${element.street}, ${element.houseNumber}`).join('\n');
    }
    return this.#city
  }
  // виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;
  displayServices(cost:number, year:number) {
    if (this.Services) {
      const currentService = this.Services.filter(element => element.cost <= cost && element.deadline <= year)
      this.#currentServices = currentService.map(element =>`послуга: ${element.service}, вартість: ${element.cost}, кінцевий термін = ${element.deadline}`).join('\n')
    }
    return this.#currentServices
  }

  toString() {
    return `Компанія існує ${this.#fullYears} років<br> Філіали фірми у вказаному місті - ${this.#city}<br>Послуги, що можуть бути виконані:<br> ${this.#currentServices}`
  }
}
const services: ServicesType[] = [
  {
    service: "development of documentation",
    cost: 5000,
    deadline: 2027,
  },
  {
    service: "The first phase of work",
    cost: 200000,
    deadline: 2028,
  },
  {
    service: "The second phase of work",
    cost: 90000,
    deadline: 2028,
  },
  {
    service: "The third phase of work",
    cost: 90000,
    deadline: 2029,
  },
  {
    service: "The final phase of work",
    cost: 90000,
    deadline: 2029,
  },
];
const dateEstablishment: DateType = [2005, 7];

const branchAddr: BranchAddressesType[] = [
  {
    country: "Canada",
    branch: [
      {
        city: "Ottawa",
        street: "Shevchenko",
        houseNumber: 34,
      },
      {
        city: "Toronto",
        street: "Yonge Street",
        houseNumber: 34,
      },
      {
        city: "Vancouver",
        street: "Robson Street",
        houseNumber: 345,
      },
    ],
  },
  {
    country: "Ukraine",
    branch: [
      {
        city: "Lviv",
        street: "Shevchenko",
        houseNumber: 34,
      },
      {
        city: "Kyiv",
        street: "Khreshchatyk street",
        houseNumber: 156,
      },
      {
        city: "Ternopil",
        street: "Franko street",
        houseNumber: 98,
      },
    ],
  },
  {
    country: "Spain",
    branch: [
      {
        city: "Madrid",
        street: "Gran Vía",
        houseNumber: 104,
      },
      {
        city: "Malaga",
        street: "Calle Larios",
        houseNumber: 10,
      },
      {
        city: "Alicante",
        street: "Passeig de Gràcia",
        houseNumber: 65,
      },
    ],
  },
];
const currentDate: DateType = [
  new Date().getFullYear(),
  new Date().getMonth() + 1,
];
const company = new Company("MANGO", dateEstablishment, services, branchAddr);

console.log(company.determiningYearsCompany(currentDate));
console.log(company.displayBranches("Lviv"));
console.log(company.displayServices(90000, 2028));

document.write(`<p> ${company.toString()}</p>`);

