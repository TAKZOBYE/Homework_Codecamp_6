let user = {
    name: "John",
    go: function() { alert(this.name) }
}
  
(user.go)()

// Error 

let user = {
    name: "John",
    go: function() { alert(this.name) }
};
  
(user.go)()

// John
  