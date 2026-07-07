import site from '../data/site.json';
import './Skills.css';

function Skills() {
  const { skills, tools } = site;

  return (
    <section id="skills" className="section skills">
      <div className="container skills__row">
        <div className="skills__col">
          <div className="section-head">
            <span className="eyebrow">Skills</span>
            <h2>Where the hours go</h2>
          </div>

          <div className="skills__bars">
            {skills.map((skill) => (
              <div className="skills__bar" key={skill.name}>
                <div className="skills__bar-top">
                  <span>{skill.name}</span>
                  <span className="skills__bar-value">{skill.level}%</span>
                </div>
                <div className="skills__bar-track">
                  <div
                    className="skills__bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills__col">
          <div className="section-head">
            <span className="eyebrow">Toolkit</span>
            <h2>Platforms I run daily</h2>
          </div>
          <div className="skills__tools">
            {tools.map((tool) => (
              <span className="skills__tool" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
