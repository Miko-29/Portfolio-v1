import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, signal, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    constructor(private scroller: ViewportScroller) {} 
   navItems = [
    { name: 'Home', path: 'home-section' },
    { name: 'About', path: 'about-section' },
    { name: 'Projects', path: 'projects-section' },
    { name: 'Contact', path: 'contact-section' },
  ];

  // Method to handle smooth scrolling
  scrollToSection(sectionId: string): void {
    this.scroller.scrollToAnchor(sectionId); // <-- Use the service to scroll
  }
isDarkTheme: boolean = false;
    ngOnInit(): void {
    // Check for saved theme preference on component initialization
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme === 'dark';
    // No need to manipulate the document.body here, Angular will handle it via class binding.
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }
  // Resume Customizer - Update your personal information here
  //  resumeData = {
  //     // Personal Information
  //     name: "YOUR NAME",
  //     title: "Software Developer",
  //     email: "your.email@example.com",
  //     phone: "(555) 123-4567",
  //     location: "City, State",
  //     linkedin: "linkedin.com/in/yourprofile",
  //     github: "github.com/yourusername",
      
  //     // Professional Summary
  //     summary: "Passionate software developer with X years of experience in web development, specializing in modern JavaScript frameworks and responsive design. Proven track record of delivering high-quality, scalable applications and collaborating effectively in agile environments. Committed to continuous learning and staying current with industry best practices.",
      
  //     // Skills - Update these based on your expertise
  //     skills: {
  //         frontend: [
  //             "HTML5, CSS3, JavaScript (ES6+)",
  //             "Angular, React, Vue.js",
  //             "TypeScript",
  //             "Responsive Design",
  //             "Bootstrap, Tailwind CSS"
  //         ],
  //         backend: [
  //             "Node.js, Express.js",
  //             "Python, Django/Flask",
  //             "Java, Spring Boot",
  //             "RESTful APIs",
  //             "GraphQL"
  //         ],
  //         database: [
  //             "MongoDB, PostgreSQL",
  //             "MySQL, SQLite",
  //             "Redis",
  //             "Database Design"
  //         ],
  //         tools: [
  //             "Git, GitHub",
  //             "Docker, Kubernetes",
  //             "AWS, Azure",
  //             "CI/CD Pipelines",
  //             "Jest, Cypress"
  //         ]
  //     },
      
  //     // Work Experience - Update with your actual experience
  //     experience: [
  //         {
  //             title: "Senior Software Developer",
  //             company: "Company Name",
  //             date: "January 2023 - Present",
  //             achievements: [
  //                 "Led development of a full-stack web application using Angular and Node.js, resulting in 40% improvement in user engagement",
  //                 "Mentored junior developers and conducted code reviews to maintain code quality standards",
  //                 "Collaborated with cross-functional teams to implement new features and optimize application performance",
  //                 "Implemented automated testing strategies, achieving 90% code coverage"
  //             ]
  //         },
  //         {
  //             title: "Software Developer",
  //             company: "Previous Company",
  //             date: "June 2021 - December 2022",
  //             achievements: [
  //                 "Developed and maintained multiple client-facing applications using React and TypeScript",
  //                 "Integrated third-party APIs and payment gateways to enhance application functionality",
  //                 "Participated in agile development processes, including sprint planning and retrospectives",
  //                 "Optimized database queries and improved application loading times by 30%"
  //             ]
  //         }
  //     ],
      
  //     // Projects - Update with your actual projects
  //     projects: [
  //         {
  //             title: "E-commerce Platform",
  //             tech: "Angular, Node.js, MongoDB, Stripe API",
  //             description: "Built a full-featured e-commerce platform with user authentication, product management, shopping cart functionality, and secure payment processing. Implemented responsive design and optimized for mobile users.",
  //             demoLink: "#",
  //             githubLink: "#"
  //         },
  //         {
  //             title: "Task Management App",
  //             tech: "React, Firebase, Material-UI",
  //             description: "Created a collaborative task management application with real-time updates, user roles, and drag-and-drop functionality. Features include task assignment, progress tracking, and team collaboration tools.",
  //             demoLink: "#",
  //             githubLink: "#"
  //         }
  //     ],
      
  //     // Education
  //     education: {
  //         degree: "Bachelor of Science in Computer Science",
  //         school: "University Name",
  //         date: "2017 - 2021",
  //         coursework: "Data Structures & Algorithms, Software Engineering, Database Systems, Web Development, Machine Learning"
  //     },
      
  //     // Certifications
  //     certifications: [
  //         "AWS Certified Developer Associate",
  //         "MongoDB Certified Developer",
  //         "Google Cloud Professional Developer"
  //     ]
  // };
  
  // // Function to populate the resume with data
  //  populateResume() {
  //     // Update header information
  //     document.querySelector('.header h1').textContent = resumeData.name;
  //     document.querySelector('.header h2').textContent = resumeData.title;
      
  //     // Update contact information
  //     const contactItems = document.querySelectorAll('.contact-item span:last-child');
  //     contactItems[0].textContent = resumeData.email;
  //     contactItems[1].textContent = resumeData.phone;
  //     contactItems[2].textContent = resumeData.location;
  //     contactItems[3].textContent = resumeData.linkedin;
  //     contactItems[4].textContent = resumeData.github;
      
  //     // Update summary
  //     document.querySelector('.summary').textContent = resumeData.summary;
      
  //     // Update skills
  //     const skillLists = document.querySelectorAll('.skill-list');
  //     skillLists[0].innerHTML = resumeData.skills.frontend.map(skill => `<li>${skill}</li>`).join('');
  //     skillLists[1].innerHTML = resumeData.skills.backend.map(skill => `<li>${skill}</li>`).join('');
  //     skillLists[2].innerHTML = resumeData.skills.database.map(skill => `<li>${skill}</li>`).join('');
  //     skillLists[3].innerHTML = resumeData.skills.tools.map(skill => `<li>${skill}</li>`).join('');
      
  //     // Update experience
  //     const experienceContainer = document.querySelector('.section:nth-child(4)');
  //     const experienceItems = experienceContainer.querySelectorAll('.experience-item');
      
  //     resumeData.experience.forEach((exp, index) => {
  //         if (experienceItems[index]) {
  //             experienceItems[index].querySelector('.job-title').textContent = exp.title;
  //             experienceItems[index].querySelector('.company').textContent = exp.company;
  //             experienceItems[index].querySelector('.date').textContent = exp.date;
  //             experienceItems[index].querySelector('.description ul').innerHTML = 
  //                 exp.achievements.map(achievement => `<li>${achievement}</li>`).join('');
  //         }
  //     });
      
  //     // Update projects
  //     const projectContainer = document.querySelector('.section:nth-child(5)');
  //     const projectItems = projectContainer.querySelectorAll('.project-item');
      
  //     resumeData.projects.forEach((project, index) => {
  //         if (projectItems[index]) {
  //             projectItems[index].querySelector('.project-title').textContent = project.title;
  //             projectItems[index].querySelector('.project-tech').textContent = project.tech;
  //             projectItems[index].querySelector('.description').textContent = project.description;
  //             projectItems[index].querySelector('.project-links a:first-child').href = project.demoLink;
  //             projectItems[index].querySelector('.project-links a:last-child').href = project.githubLink;
  //         }
  //     });
      
  //     // Update education
  //     document.querySelector('.degree').textContent = resumeData.education.degree;
  //     document.querySelector('.school').textContent = resumeData.education.school;
  //     document.querySelector('.education-item .date').textContent = resumeData.education.date;
  //     document.querySelector('.education-item .description').textContent = resumeData.education.coursework;
      
  //     // Update certifications
  //     const certList = document.querySelector('.section:last-child .description ul');
  //     certList.innerHTML = resumeData.certifications.map(cert => `<li>${cert}</li>`).join('');
  // }
  
  // // Instructions for use:
  // console.log(`
  // === RESUME CUSTOMIZATION INSTRUCTIONS ===
  
  // 1. Update the resumeData object above with your personal information
  // 2. Replace placeholder text with your actual:
  //    - Name, contact information, and social links
  //    - Work experience and achievements
  //    - Projects and their descriptions
  //    - Education details
  //    - Skills and certifications
  
  // 3. To use this resume:
  //    - Open resume.html in a web browser
  //    - Print to PDF (Ctrl+P or Cmd+P) for a professional PDF version
  //    - Or save as PDF directly from browser
  
  // 4. Customization tips:
  //    - Keep descriptions concise and achievement-focused
  //    - Use action verbs and quantify results when possible
  //    - Tailor skills to match job requirements
  //    - Ensure all links work and are up-to-date
  // `); 
}
