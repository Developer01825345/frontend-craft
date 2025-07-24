export default class Accordian
{
    constructor(items)
    {
        this.items = items;
        this.accordianElement = null;
    }

    render(parentSelector)
    {
        if (!this.accordianElement) {
            this.accordianElement = document.createElement("div");
            this.accordianElement.classList.add("accordion");

            const allContents = [];
            this.items.forEach((item, index) => {
                const items = document.createElement("div");
                items.classList.add("accordion-item");

                const header = document.createElement("div");
                header.classList.add("accordion-header");
                header.textContent = item.title;

                const content = document.createElement("div");
                content.classList.add("accordion-content");
                content.textContent = item.content;
                content.style.display = "none";

                allContents.push(content);

                header.addEventListener("click", (e) => {
                    allContents.forEach((c, i) => {
                        c.style.display = i === index ? "block" : "none";
                    });
                });

                items.appendChild(header);
                items.appendChild(content);
                this.accordianElement.appendChild(items);
            });
            
            document.querySelector(parentSelector).appendChild(this.accordianElement);
        }
    }
}