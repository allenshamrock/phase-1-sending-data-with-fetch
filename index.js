// Add your code here
function submitData(name, email) {
     return fetch("http://localhost:3000/users", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: JSON.stringify({
         name: name,
         email: email,
       }),
     })
       .then((res) => res.json())
       .then((data) => {
         let span = document.querySelector(".userId");
         span.innerHTML = `${data.id}`;
         document.body.append(span);
       })
       .catch((error) => {
       let p = document.querySelector(".error");
         p.innerHTML = error.message;
         document.body.append(p);
       });
}
;
