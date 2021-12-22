function projectsCreation(archName, projects) {
    let name = archName;
    let numProjects = Number(projects);

    let hours = numProjects * 3;

    let result = `The architect ${name} will need ${hours} hours to complete ${numProjects} project/s.`

    console.log(result);

}
projectsCreation("George", "4")