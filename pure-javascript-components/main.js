import Card from "./components/Card.js";
import Modal from "./components/Modal.js";

const modal = new Modal();

const cards = [
    new Card("Card 1", "Brief description of the project 1.", () => modal.open("Card 1")),
    new Card("Card 2", "Brief description of the project 2.", () => modal.open("Card 2")),
];

cards.forEach(card => card.render("#app"));