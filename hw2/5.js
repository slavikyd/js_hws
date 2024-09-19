class Pet {
    eat() {
        console.log('Pet eats');
    }

    makeSound() {}
}

class Dog extends Pet {
    makeSound() {
        console.log('*Dog makes barking sound*');
    }

    sleep() {
        console.log('Dog sleeps');
    }
}

class Cat extends Pet {
    makeSound() {
        console.log('*Cat makes meowing sound)*');
    }

    sleep() {
        console.log('Cat sleeps');
    }
}
