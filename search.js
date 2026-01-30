const userCardTemplate = document.querySelector("#resource-card-template");
const userCardContainer = document.querySelector("[user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach(user => {
  const isVisible = user.header.toLowerCase().includes(value) || user.address.toLowerCase().includes(value) || user.phone.toLowerCase().includes(value) || user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  })
});
const data = ParkerPlacesAPI.getAll();

    users = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header] h3");
      const address = card.querySelector("[data-address]");
      const phone = card.querySelector("[data-phone]");
      const email = card.querySelector("[data-email]");
      const website = card.querySelector("[data-website]");
      header.textContent = user.name;
      address.textContent = user.address;
      phone.textContent = user.phone;
      email.textContent = user.email;
      website.href = user.website;
      userCardContainer.append(card);
      return {header: user.name, address: user.address, phone: user.phone, email: user.email, element: card};
    });