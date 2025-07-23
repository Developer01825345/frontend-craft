export default class Card
{
    constructor(title, content, onClick)
    {
        this.title = title;
        this.content = content;
        this.parentCardElement = null;
        this.onClick = onClick;
    }

    render(parentSelector)
    {
        if (!this.cardElement)
        {
            this.parentCardElement = document.createElement("div");
            this.parentCardElement.style.display = "flex";
            this.parentCardElement.style.flexWrap = "wrap";
            this.parentCardElement.style.gap = "20px";
            
            const cardElement = document.createElement("div");
            cardElement.style.padding = "20px";
            cardElement.style.background = "#f8f8f8";
            cardElement.style.borderRadius = "8px";
            cardElement.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
            cardElement.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            cardElement.style.width = "100%";
            cardElement.style.width = "100%";
            cardElement.style.maxWidth = "300px";
            cardElement.style.cursor = "pointer";

            const titleElement = document.createElement("h3");
            titleElement.textContent = this.title;

            const paraElement = document.createElement("p");
            paraElement.textContent = this.content;

            const buttonElement = document.createElement("button");
            buttonElement.textContent = "Action";
            buttonElement.addEventListener("click", this.onClick);

            this.parentCardElement.appendChild(cardElement);

            cardElement.appendChild(titleElement);
            cardElement.appendChild(paraElement);
            cardElement.appendChild(buttonElement);

            document.querySelector(parentSelector).appendChild(this.parentCardElement);
        }
    }
}