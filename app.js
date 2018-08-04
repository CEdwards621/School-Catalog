class School {
  constructor (name,level,numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(num) {
    if (typeof num === "Number") {
      this.numberOfStudents = num;
  } else {
    console.log('Invalid input: numberOfStudents must be set to a Number.');
 	 }
  }
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    let randomNum = Math.floor(Math.random()*(substituteTeachers.length-1));
    return substituteTeachers[randomNum];
  }
}

class PrimarySchool extends School {
  constructor(name,numberOfStudents,pickupPolicy) {
    super(name,'primary',numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  
  get pickupPolicy() {
    this._pickupPolicy = pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name,numberOfStudents) {
    super(name,'middle',numberOfStudents);
  }
}

class HighSchool extends School {
  constructor(name,numberOfStudents,sportsTeams) {
    super(name,'high',numberOfStudents);
    this._sportsTeams = sportsTeams;
  }  
  get sportsTeams() {
    return this._sportsTeams;
  }
}

class SchoolCatalog {
  constructor() {
    this._catalog = [];
  }
  
  get catalog() {
    return this._catalog;
  }
  addToCatalog(school) {
    this.catalog.push(school);
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log("Sub Teacher: " + School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.quickFacts();
console.log(alSmith.sportsTeams);

const primarySchoolCatalog = new SchoolCatalog();
primarySchoolCatalog.addToCatalog(lorraineHansbury);
console.log(primarySchoolCatalog);
