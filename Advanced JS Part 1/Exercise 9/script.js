function makeUser() {
    return {
      name: "John",
      ref: this
    };
  };
  
  let user = makeUser();
  
  alert( user.ref.name ); // What's the result?

// ไม่โชว์อะไรเลย

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.name ); // What's the result?

// โชว์ John