const LOCAL_STORAGE_PROJECTS_LISTS_KEY = "projects.list";
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "project.selectedID";

let selectedProjectID = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
);

export let projects = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_PROJECTS_LISTS_KEY)
) || [
  {
    id: "1728272822829",
    name: "Today",
    tasks: [
      {
        id: "012",
        name: "Be awesome",
        isComplete: false,
      },
    ],
  },

  {
    id: "1728272822839",
    name: "Grocerys",
    tasks: [
      { id: "123", name: "Potatoes", isComplete: false },
      { id: "456", name: "Bananas", isComplete: true },
    ],
  },
];

export const saveLocalStorage = () => {
  localStorage.setItem(
    LOCAL_STORAGE_PROJECTS_LISTS_KEY,
    JSON.stringify(projects)
  );
  localStorage.setItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    selectedProjectID
  );
};

export const getSelectedProjectID = () => {
  const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "project.selectedID";
  let selectedProjectID = localStorage.getItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
  );

  return selectedProjectID;
};
