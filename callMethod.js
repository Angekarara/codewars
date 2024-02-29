var employee1 = { firstName: "Anna", secondName: "john" };
var employee2 = { firstName: "Anet", secondName: "josnn" };

function invite(greetings1, greetings2) {
  console.log(
    `${greetings1} ${this.firstName} ${this.secondName} ${greetings2}`
  );
}
invite.call(employee1, "Helloo", "How are you");
invite.call(employee2, "Helloo", "How are you");
