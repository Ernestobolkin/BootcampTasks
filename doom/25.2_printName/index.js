const room2 = {
  name1: "Ernest",
  print: function () {
    console.log(this.name1);
  },
  printAfter: function () {
    setTimeout(this.print(),1000);
  },
};

room2.printAfter()