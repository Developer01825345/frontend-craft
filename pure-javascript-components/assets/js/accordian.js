import Accordian from "../../components/accordian.js";

const accordianItems = new Accordian([
    { title: "Overview", content: "This is the overview section." },
    { title: "Features", content: "These are the features." },
    { title: "Contact", content: "This is the contact section." }
]);

accordianItems.render("#accordian");