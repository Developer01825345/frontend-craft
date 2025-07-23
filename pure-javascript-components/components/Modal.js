export default class Modal
{
    constructor()
    {
        this.modalElement = null;
    }

    open(title)
    {
        this.title = title;

        if (!this.modalElement) {
            this.modalElement = document.createElement("div");
            this.modalElement.classList.add("modal-overlay");

            const box = document.createElement("div");
            box.classList.add("modal-box");

            const closeBtn = document.createElement("button")
            closeBtn.classList.add("close");
            closeBtn.textContent = "X";

            const modalTitle = document.createElement("h2");
            modalTitle.textContent = this.title;

            box.appendChild(closeBtn);
            box.appendChild(modalTitle);

            this.modalElement.appendChild(box);

            this.modalElement.addEventListener("click", (e) => {
                if (e.target === closeBtn) this.close();
            });

            document.body.appendChild(this.modalElement);
        }
    }

    close()
    {
        if (this.modalElement)
        {
            document.body.removeChild(this.modalElement);
            this.modalElement = null;
        }
    }
}