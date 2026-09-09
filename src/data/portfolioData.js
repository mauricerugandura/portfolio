const baseUrl = import.meta.env.BASE_URL

export const portfolioData = {
  name: 'Rugandura Maurice', title: 'Software Engineering Student & Developer',
  email: 'mauricerugandura123@gmail.com', phone: '+250798729241', location: 'Rwanda',
  github: 'https://github.com/mauricerugandura', linkedin: 'https://www.linkedin.com/in/rugandura-maurice-974284384',
  cv: `${baseUrl}cv/Rugandura-Maurice-CV.pdf`, profileImage: `${baseUrl}images/profile.jpeg`
}

export const skills = [
  ['Programming', ['Java', 'JavaScript', 'PHP', 'Python', 'HTML', 'CSS']],
  ['Web Development', ['React', 'Laravel', 'REST API concepts', 'Responsive Web Development']],
  ['Databases', ['MySQL', 'SQL', 'Database Design']],
  ['Networking & Systems', ['Computer Networking', 'Network Cabling', 'IP Addressing', 'Windows', 'Computer Troubleshooting', 'Printer Configuration']],
  ['Cybersecurity', ['Cybersecurity Fundamentals', 'Ethical Hacking Fundamentals', 'Software Security', 'Kali Linux']],
  ['Tools', ['Git', 'GitHub', 'Visual Studio Code', 'XAMPP', 'PowerShell', 'Android Studio']]
]

export const projects = [{
  title: 'Online Student Result Management System',
  description: 'A software project designed to support the management and organization of student academic results.',
  technologies: ['Java', 'Software Development'], github: 'https://github.com/mauricerugandura/osrms-bfu', demo: null, featured: true
}]
