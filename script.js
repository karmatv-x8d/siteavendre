const boutonsAjouter = document.querySelectorAll('.ajouter-panier');
const listePanier = document.getElementById('liste-panier');
const total = document.getElementById('total');
const count = document.getElementById('cart-count');
const whatsappLink = document.getElementById('whatsapp-link');

let panier = [];

boutonsAjouter.forEach(btn => {
  btn.addEventListener('click', () => {
    const produit = btn.parentElement;
    const nom = produit.getAttribute('data-nom');
    const prix = parseInt(produit.getAttribute('data-prix'));

    panier.push({ nom, prix });
    afficherPanier();
  });
});

function afficherPanier() {
  listePanier.innerHTML = '';
  let totalPrix = 0;

  panier.forEach((item, index) => {
    totalPrix += item.prix;
    const li = document.createElement('li');
    li.textContent = `${item.nom} - ${item.prix} FCFA`;
    listePanier.appendChild(li);
  });

  total.textContent = totalPrix;
  count.textContent = panier.length;

  const message = encodeURIComponent(
    "Bonjour, je veux commander :\n" +
    panier.map(item => `- ${item.nom} (${item.prix} FCFA)`).join('\n') +
    `\nTotal : ${totalPrix} FCFA`
  );
  whatsappLink.href = `https://wa.me/2250700000000?text=${message}`;
}
