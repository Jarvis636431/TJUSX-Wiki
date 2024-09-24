import {
    Contribution,
    Description,
    Engineering,
    Home,
    HumanPractices,
    Notebook,
    Results,
    Safety,
    Members,
    Design,
    Protcol,
    Parts,
    Model,
    Software,
} from "./contents";

interface Base {
    name: string | undefined;
}

class Folder implements Base {
    name: string | undefined;
    folder: Page[] | undefined;
}

class Page implements Base {
    name: string | undefined;
    title: string | undefined;
    path: string | undefined;
    component: React.FC | undefined;
    lead: string | undefined;
}

const Pages: (Page | Folder)[] = [
    {
        name: "Home",
        title: "",
        path: "/",
        component: Home,
        lead:""
    },
    {
        name: "Team",
        folder: [
            {
                name: "Members",
                title: "Members",
                path: "/members",
                component: Members,
                lead: "On this page you can introduce your team members, instructors, and advisors.",
            },
        ],
    },
    {
        name: "Project",
        folder: [
            {
                name: "Description",
                title: "Project Description",
                path: "/description",
                component: Description,
                lead: "Describe how and why you chose your iGEM project.",
            },
            {
                name: "Design",
                title: "Design",
                path: "/Design",
                component: Design,
                lead: "Innovative educational tools and outreach activities have the ability to establish a two-way dialogue with new communities by discussing public values and the science behind synthetic biology.",
            },
            {
                name: "Contribution",
                title: "Contribution",
                path: "/contribution",
                component: Contribution,
                lead: "Make a useful contribution for future iGEM teams. Use this page to document that contribution.",
            },
        ],
    },
    {
        name: "Wet experiment",
        folder: [
            {
                name: "Engineering",
                title: "Engineering Success",
                path: "/engineering",
                component: Engineering,
                lead: "Demonstrate engineering success in a technical aspect of your project by going through at least one iteration of the engineering design cycle. This achievement should be distinct from your Contribution for Bronze.",
            },
            {
                name: "Notebook",
                title: "Notebook",
                path: "/notebook",
                component: Notebook,
                lead: "Document the dates you worked on your project. This should be a detailed account of the work done each day for your project.",
            },
            {
                name: "Protcol",
                title: "Protcol",
                path: "/protcol",
                component: Protcol,
                lead: "The entrepreneurship prize recognizes exceptional effort to build a business case and commercialize an iGEM project.",
            },
            {
                name: "Results",
                title: "Results",
                path: "/results",
                component: Results,
                lead: "You can describe the results of your project and your future plans here.",
            },
            {
                name: "Parts",
                title: "Parts",
                path: "/parts",
                component: Parts,
                lead: "Every individual, regardless of background or experience, should have an equal opportunity to engage with scientific knowledge and technological development.",
            },
        ],
    },
    {
        name: "Dry experiment",
        folder: [
            {
                name: "Model",
                title: "Model",
                path: "/model",
                component: Model,
                lead: "Explain your model's assumptions, data, parameters, and results in a way that anyone could understand.",
            },
            {
                name: "Software",
                title: "Software",
                path: "/software",
                component: Software,
                lead: "Software in iGEM should make synthetic biology based on standard parts easier, faster, better or more accessible to our community.",
            },
        ]
    },
    {
        name: "Human Practices",
        title: "Human Practices",
        path: "/human-practices",
        component: HumanPractices,
        lead: "We ask every team to think deeply and creatively about whether their project is responsible and good for the world. Consider how the world affects your work and how your work affects the world.",
    },
    {
        name: "Safety",
        title: "Safety",
        path: "/safety",
        component: Safety,
        lead: "Describe all the safety issues of your project.",
    },
];

export default Pages;
