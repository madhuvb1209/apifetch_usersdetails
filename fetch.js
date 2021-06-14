function fetchUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      const html = data.map((user) => {
        return `<div class="user">
        <p>Name: ${user.name}</p>
        <p>UserName: ${user.username}</p>
        <p id="moreDetail"></p>
        <button onClick="showMore('${user.email}','${user.phone}','${user.website}')" class="btn btn-dark download-botton">More detail</button>

        </div>`;
      });
      document
        .querySelector("#display-data")
        .insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchUser();

function showMore(email, phone, website) {
  const html = `
        <p>phone :${phone}</p>
        <p>email :${email}</p>
        <p>website :${website}</p>
 `;
  document.querySelector("#moreDetail").insertAdjacentHTML("afterbegin", html);
}
