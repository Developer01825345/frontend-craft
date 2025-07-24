export default class Tab
{
    constructor(tabsData)
    {
        this.tabsData = tabsData;
        this.tabElement = null;
        this.activeIndex = 0
    }

    render(parentSelector)
    {
        if (!this.tabElement)
        {
            this.tabElement = document.createElement("div")
            this.tabElement.classList.add("tabs-buttons");

            const tabContainer = document.createElement("div"); 
            tabContainer.classList.add("tabs-content");

            const buttons = [];

            this.tabsData.forEach((tabData, index) => {
                const tabButton = document.createElement("div");
                tabButton.classList.add("tab-btn");
                tabButton.textContent = tabData.title;

                this.tabElement.appendChild(tabButton);
                buttons.push(tabButton);

                const tabContent = document.createElement("div");                
                tabContent.textContent = tabData.content;

                if (index === this.activeIndex) {
                    tabButton.classList.add("active");
                    tabContainer.textContent = tabData.content;
                }

                tabButton.addEventListener("click", () => {
                    this.activeIndex = index;
                    tabContainer.textContent = tabData.content;

                    buttons.forEach((btn, i) =>
                        btn.classList.toggle("active", i === index)
                    );
                });
            });

            document.querySelector(parentSelector).appendChild(this.tabElement);
            document.querySelector(parentSelector).appendChild(tabContainer);
        }
    }
}