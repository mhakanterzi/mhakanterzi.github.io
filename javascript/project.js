function openProject(projectElement) {
    const title = projectElement.querySelector('h3').innerText;
    const description = projectElement.querySelector('p').innerText;

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;

    document.getElementById('project-modal').style.display = 'block';
}

document.getElementById('close-modal').onclick = function() {
    document.getElementById('project-modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === document.getElementById('project-modal')) {
        document.getElementById('project-modal').style.display = 'none';
    }
}

function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}
