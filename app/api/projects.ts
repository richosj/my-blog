// 프론트엔드에서 사용하는 API 함수 모음

export const fetchProjects = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/projects");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch projects, status code: ${response.status}`
      );
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching projects:", err);
    throw err;
  }
};

export const fetchProjectById = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:5000/api/projects/${id}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch project details, status code: ${response.status}`
      );
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching project details:", err);
    throw err;
  }
};

export const createProject = async (projectData: any) => {
  try {
    const response = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });
    if (!response.ok) {
      throw new Error(
        `Failed to create project, status code: ${response.status}`
      );
    }
    return await response.json();
  } catch (err) {
    console.error("Error creating project:", err);
    throw err;
  }
};
