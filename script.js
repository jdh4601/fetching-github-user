const root = document.querySelector('#root');

async function getUserData() {
  const res = await fetch(`https://api.github.com/users`);
  const data = await res.json();

  let display = '';

  data.map(user => {
    display += `<div class="cards">
    <img src=${user.avatar_url} alt=${user.login}>
    <h1>${user.login}</h1>
  </div>`;
  });

  root.innerHTML = display;

  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });

  console.log('All data is been displayed!');
}

getUserData();
