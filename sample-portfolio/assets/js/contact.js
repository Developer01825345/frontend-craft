const contactBtn = document.getElementById("contact-btn");
const pageSection = document.getElementById("contact");

contactBtn.addEventListener("click", function(e){
    e.preventDefault();
    contactBtn.textContent = "Sending";
    pageSection.style.backgroundColor = `rgb(${ChangeRandomColor(255)}, ${ChangeRandomColor(255)}, ${ChangeRandomColor(255)})`;
    contactBtn.textContent = "Save";
    console.table([e, e.type, e.target]);
});

function ChangeRandomColor(number)
{
    return Math.random(number) * (number + 1);
}