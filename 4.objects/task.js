function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = []
  }

let alex = new Student('Алексей', 'мужской', 31);
let shannon = new Student('Шэннон', 'женский', 22);
let vasilisa = new Student('Василиса', 'женский', 19);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks && this.marks.length > 0){
	this.marks.push(...marks)
  }
}

Student.prototype.getAverage = function () {
  if(!this.marks || this.marks.length === 0){
	return 0
  }
  return (this.marks.reduce((a,b) => a+b, 0))/this.marks.length
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks
  delete this.subject
}
