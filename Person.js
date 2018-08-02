class Person {
    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    bodyMassIndex(){
        var heightDividedByHundred = this.height / 100.0;
        return this.weight / ( heightDividedByHundred * heightDividedByHundred );
    }

    becomeOlder() {
        this.age = this.age + 1;
    }

    printPerson() {
        alert(this.name + ", age " + this.age + " years");
    }

}

function main() {
    var myInfo = new Person("Caleb", 23, 185, 75);
    var otherInfo = new Person("Jordan", 55, 250, 78);

    alert(myInfo.bodyMassIndex());
    alert(otherInfo.bodyMassIndex());

    var personArray = [myInfo, otherInfo];
    personArray[0].printPerson();
    personArray[1].printPerson();

}

main();