import Tab from "../../components/Tab.js";

const tabs = new Tab([
    { title: "Overview", content: "This is the overview section." },
    { title: "Features", content: "These are the features." },
    { title: "Contact", content: "This is the contact section." }
]);

tabs.render("#Tabs");