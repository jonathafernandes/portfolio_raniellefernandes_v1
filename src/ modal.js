const projects = document.querySelectorAll(".projects-grid .project");

projects.forEach((project) => {
    const btn = project.querySelector("button");
    const modal = project.querySelector("dialog");
    const btnClose = modal.querySelector("button");

    btn.onclick = function () {
        modal.showModal();
    };

    btnClose.onclick = function () {
        modal.close();
    };
});
