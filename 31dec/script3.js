function Student(name,grade){
    this.name = name
    this.grade = grade

    this.study = ()=>{
        console.log(`${this.name} is studying`)
    }

    this.getGrade = () => {
        console.log(`${this.name} has a grade of ${this.grade}`)
    }
}

var s1 = new Student('John', 'A+')
s1.study()
s1.getGrade()
var s2 = new Student('Alex', 'B')
s2.study()
s2.getGrade()
var s3 = new Student('Claire', 'S')
s3.study()
s3.getGrade()
