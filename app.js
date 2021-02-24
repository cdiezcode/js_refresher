function User(name, role, lastName) {
  this.name = name
  this.role = role
  // this["Last Name"] = lastName;
  this.sayHello = function () {
    console.log(`Hello from ${this.name}`)
  }
  this[Symbol.toPrimitive] = function (hint) {
    return hint === 'string' ? `${this.name} ${this.role}` : 300
  }
}

const user = new User("Ilya", "admin", "Danilov")

console.log(user.toString())