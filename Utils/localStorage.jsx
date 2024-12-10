const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Complete Monthly Report",
        taskDescription:
          "Prepare the monthly sales report and send it to the management team.",
        taskDate: "2024-12-10",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Attend Client Meeting",
        taskDescription:
          "Join the virtual meeting with the client to discuss the new project.",
        taskDate: "2024-12-12",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update Website Content",
        taskDescription:
          "Make necessary updates to the homepage content based on the latest changes.",
        taskDate: "2024-12-15",
        category: "Web Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare Budget Plan",
        taskDescription:
          "Create the yearly budget plan and outline financial goals.",
        taskDate: "2024-12-11",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Social Media Strategy",
        taskDescription:
          "Plan the social media campaign for the upcoming product launch.",
        taskDate: "2024-12-13",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Organize Team Building Event",
        taskDescription:
          "Coordinate logistics for the upcoming team building event.",
        taskDate: "2024-12-18",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Client Follow-Up",
        taskDescription:
          "Reach out to the client and follow up on their feedback from last week's presentation.",
        taskDate: "2024-12-10",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Prepare Presentation Slides",
        taskDescription:
          "Create slides for the upcoming company-wide presentation.",
        taskDate: "2024-12-12",
        category: "Presentations",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Update Software Version",
        taskDescription: "Upgrade the internal software to the latest version.",
        taskDate: "2024-12-11",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Backup Data",
        taskDescription:
          "Perform a complete data backup for the company's database.",
        taskDate: "2024-12-14",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix Website Bug",
        taskDescription:
          "Fix the reported bug in the website's checkout process.",
        taskDate: "2024-12-16",
        category: "Web Development",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design New Logo",
        taskDescription: "Create a new logo for the upcoming brand refresh.",
        taskDate: "2024-12-13",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update Product Catalog",
        taskDescription: "Update the online product catalog with new items.",
        taskDate: "2024-12-14",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Video Editing",
        taskDescription:
          "Edit the promotional video for the product launch event.",
        taskDate: "2024-12-17",
        category: "Media",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Photography Session",
        taskDescription: "Organize a photo session for the new product.",
        taskDate: "2024-12-20",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
