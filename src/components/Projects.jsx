import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A cool project built with React and modern web technologies.',
      link: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'An awesome application showcasing advanced React patterns.',
      link: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A stunning web app with great user experience.',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
