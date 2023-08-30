const selectOptions = [
  "Web Application",
  "Mobile Application",
  "UI/UX Design",
  "Branding",
];

function ProjectsFilter({ setSelectProject }) {
  return (
    <select
      onChange={(e) => {
        const selectedValue = e.target.value;
        if (selectedValue === "all") {
          // Handle the case where "All Projects" is selected
        } else {
          setSelectProject(selectedValue);
        }
      }}
      className="
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
    >
		
      <option value="all" className="text-sm sm:text-md">
        All Projects
      </option>

      {selectOptions.map((option) => (
        <option className="text-normal sm:text-md" key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default ProjectsFilter;
