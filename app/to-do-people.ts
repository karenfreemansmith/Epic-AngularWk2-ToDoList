/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  var diane: ToDoList.IPerson = {
    name: "Diane D",
    email: "diane@epicodus.com"
  }

  var thor: ToDoList.IPerson = {
    name: "Thor Son of Odin",
    email: "tor@asgard.com"
  }

  var loki: ToDoList.IPerson = {
    name: "God of Mischief",
    email: "loki@geocities.com",
    phone: "555-66-7776"
  }

  export var people = {
    "diane": diane,
    "thor": thor,
    "loki": loki
  }
}
