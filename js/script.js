let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance : '65px',
    duration :  2600,
    delay    : 450,
    reset    : true
});

sr.reveal('.hero-text',{delay:200,origin:'top'});
sr.reveal('.hero-img',{delay:300,origin:'top'});

const productContainer = document.querySelector(".row-match");

fetch("json/match.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)

    let contentHTML = "";
    data.products.forEach((product) => {
      contentHTML += `
      <div class="card">
      <img src="${product.image}" alt="${product.name}" style="width: 100%" />
      <h1>${product.name}</h1>
      <p>${product.description}</p>
      </div>
      `;
    });
    // console.log(isiHTML)
    productContainer.innerHTML = contentHTML;
  })
  .catch((err) => {
    console.log(err);
  });
