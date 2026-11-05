import { useMemo, useState } from 'react'
import { ExternalLink, Filter } from 'lucide-react'
import Codesphere from '../assets/codesphere.png'
import Vsm from '../assets/vsm.png'
import Slr from '../assets/slr.png'
import Cnn from '../assets/cnn.png'

const projects = [
  { image: Codesphere, title: 'CodeSphere', category: 'Full stack', details: 'A MERN e-learning platform connecting students, teachers, and administrators with courses, exams, progress tracking, and certificates.', stacks: ['MongoDB', 'Express', 'React', 'Node.js'], button: 'https://github.com/naina-nabisath/CodeSphere' },
  { image: Vsm, title: 'Value Stream Mapping', category: 'Full stack', details: 'A process-optimization application for creating interactive flow diagrams, visualizing workflows, and finding operational inefficiencies.', stacks: ['React', 'MySQL', 'JointJS', 'Node.js'], button: 'https://github.com/naina-nabisath/vsm' },
  { image: Slr, title: 'Sign Language Reader', category: 'Machine learning', details: 'An LSTM-powered gesture recognition project that interprets sequences of hand movements as readable text.', stacks: ['Python', 'TensorFlow', 'Keras', 'OpenCV'], button: 'https://github.com/naina-nabisath/Sign-language-reader-using-LSTM' },
  { image: Cnn, title: 'Sign Language Recognition', category: 'Machine learning', details: 'A CNN-based image recognition project that translates sign language gestures into readable text.', stacks: ['Python', 'TensorFlow', 'Keras', 'CNN'], button: 'https://github.com/naina-nabisath/Sign-language-recognition-using-CNN' },
]

function Project() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Full stack', 'Machine learning']
  const filteredProjects = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category === filter), [filter])

  return (
    <section id="projects" className="portfolio-section projects-section">
      <div className="section-kicker"><span>03</span> / SELECTED WORKS</div>
      <div className="section-heading-row">
        <div>
          <h2 className="section-title">Projects I&apos;m <span>proud of.</span></h2>
          <p className="section-lede">A mix of full-stack applications, machine learning projects, and experiments built to solve real problems.</p>
        </div>
        <div className="project-count"><strong>0{filteredProjects.length}</strong><span>selected projects</span></div>
      </div>
      <div className="project-filters" role="group" aria-label="Filter projects">
        <Filter size={16} aria-hidden="true" />
        {categories.map((category) => (
          <button key={category} type="button" className={filter === category ? 'filter-button active' : 'filter-button'} onClick={() => setFilter(category)} aria-pressed={filter === category}>{category}</button>
        ))}
      </div>
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-image-wrap"><img src={project.image} alt={`${project.title} project preview`} className="project-image" /><span className="project-category">{project.category}</span></div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.details}</p>
              <div className="stack-list">{project.stacks.map((stack) => <span key={stack}>{stack}</span>)}</div>
              <a href={project.button} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub <ExternalLink size={16} /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Project
