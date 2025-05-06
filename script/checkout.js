const stripe = Stripe("VOTRE_CLE_PUBLIQUE_STRIPE");
const checkoutButton = document.getElementById("checkout-button");

checkoutButton.addEventListener("click", () => {
    fetch("/create-checkout-session", { method: "POST" })
        .then(response => response.json())
        .then(session => {
            return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .catch(error => console.error("Erreur lors du paiement :", error));
});
