abstract class Department {
  static fiscalYear = 2024;
  //   private id: string;
  //   private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass valid value");
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }

    this.instance = new AccountingDepartment("Code2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(employeeName: string): void {
    if (employeeName === "Max") {
      return;
    }

    this.employees.push(employeeName);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}
const employee1 = Department.createEmployee("Lyle");
console.log(employee1);
console.log(Department.fiscalYear);

const it = new ITDepartment("Code1", ["max"]);

// console.log(it);

it.addEmployee("Max");
it.addEmployee("Manu");

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = AccountingDepartment.getInstance();

// const accounting = new AccountingDepartment("Code2", []);

accounting.addReport("Some acc reports");
accounting.printReports();
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "waya!";
accounting.printReports();
// const accountingCopy = { name: "Finance", describe: accounting.describe };
// accountingCopy.describe();
accounting.describe();
