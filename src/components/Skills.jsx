import React from 'react';

const skillGroups = [
  {
    category: 'Diseño & UX/UI',
    icon: 'bx bx-pen',
    skills: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototipado', 'Photoshop', 'Diseño Responsive'],
  },
  {
    category: 'Frontend',
    icon: 'bx bx-code-alt',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Angular', 'Git'],
  },
  {
    category: 'CMS & E-commerce',
    icon: 'bx bx-globe',
    skills: ['WordPress', 'Elementor Pro', 'WooCommerce', 'SEO (Yoast)', 'cPanel / Hosting', 'SSL & DNS'],
  },
  {
    category: 'Backend & Base de Datos',
    icon: 'bx bx-data',
    skills: ['SQL Server', 'ASP.NET MVC', 'APIs REST', 'Laravel'],
  },
  {
    category: 'Ciberseguridad & Marketing',
    icon: 'bx bx-shield-alt-2',
    skills: ['Seguridad de correos', 'Gestión Meta Business', 'Facebook Ads', 'TikTok', 'Instagram'],
  },
  {
    category: 'Documentación Técnica',
    icon: 'bx bx-file',
    skills: ['Guías visuales', 'Manuales de usuario', 'Documentación de procesos', 'Excel avanzado'],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <p className="section-label">HERRAMIENTAS & TECNOLOGÍAS</p>
      <h2 className="heading">Habilidades <span>Técnicas</span></h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.category}>
            <div className="skill-group-header">
              <i className={group.icon}></i>
              <h3>{group.category}</h3>
            </div>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
