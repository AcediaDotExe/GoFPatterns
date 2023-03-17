interface Parent {}

class Child implements Parent {
  field1: string;

  constructor(field1: string) {
    this.field1 = field1;
  }
}

function forChildAndParent(person: Parent) {
  console.log(person);
}

(function main() {
  const child = new Child("happy");

  forChildAndParent(child);
})();
