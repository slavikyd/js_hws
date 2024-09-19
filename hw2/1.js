class User {
    constructor(name, email, role = 'user'){
        this.name = name;
        this.email = email;
        this.role = role;
    }

    login() {
        console.log(`User ${this.name} was logged in`);
    }

    logout() {
        console.log(`User ${this.name} logged out`);
    }
}

class Admin extends User {
    constructor(name, email, role) {
        super(name, email, role);
    }

    deleteUser(user) {
        console.log(`User ${user.name} was deleted by ${this.name}`);
    }
}

