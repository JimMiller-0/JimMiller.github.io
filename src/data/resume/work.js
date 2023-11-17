/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Google Cloud',
    position: 'Cloud Security Architect',
    url: 'https://cloud.google.com/',
    startDate: '2021-11-01',
    summary: 'I develop novel solutions to help companies achieve their technical and business goals.',
    highlights: [
      'Design solutions to secure customers and their workloads',
      'Publish innovative ideas and open sources tools to improve security',
      'Invent new methods to secure LLMs and Gen AI by obtaining patents.',
      'Build and train cyber security teams internally and externally at Google',
      'Optimize cost of security architectures to make them economically viable',
    ],
  },
  {
    name: 'Amazon Web Services',
    position: 'Solutions Architect',
    url: 'https://aws.amazon.com',
    startDate: '2020-01-01',
    endDate: '2021-11-01',
    summary: 'I help companies through their cloud journey by designing and framing their mission critical workloads to take advantage of economies of scale.',
    highlights: [
      'Design cloud application architectures',
      'Educate organizations on cloud services and how to optimize them',
      'Publish technical content through AWS’s blog site to empower self-service customers',
      'Collaborate with service teams to prioritize product feature requests',
      'Dive deep with customer across the world on cloud security controls',
      'Mentor and develop technical individual contributors throughout AWS',
      'Reduce cost for customers by service and architectural optimization',
    ],
  },
  {
    name: 'Webster Bank',
    position: 'Vice President, Information Security Architecture.',
    url: 'https://www.websterbank.com',
    startDate: '2017-12-01',
    endDate: '2020-01-01',
    summary: 'As VP of Information Security Architecture at Webster Bank I shape strategy and capabilities of the information security role within Webster. My goal is to drive a roadmap that enforces a safe and sound technology environment while enabling innovation and agility for the Bank.',
    highlights: [
      'Frame Information Security functions and capabilities in accordance to NIST',
      'Driving to constantly mature against the FFIEC CAT model',
      'Automate security controls and compliance within CI/CD pipelines',
      'Enable cloud transformation through developing security controls',
      'Harden custom application through static code analysis and application security practices',
      'Govern technology innovation and planning through serving on the Architecture Review Board',
      'Design and implement network security solutions that operate at layer 7',
      'Lead agile development programs to achieve complex security goals',
      'Scaling the business with automated security controls and practices',
      'Promote cyber security competency and skills development',
      'Raise awareness of cyber risk to bank employees and customers',
      'Develop and maintain policies and standards to govern that IT functions ',
      'Build meaningful relationship and collaboration throughout the organization',

    ],
  },
  {
    name: 'ConnectiCare',
    position: 'Enterprise Security Architect',
    url: 'https://www.connecticare.com',
    startDate: '2016-07-01',
    endDate: '2017-12-01',
    summary: 'As an Enterprise Security Architect at ConnectiCare I play a crucial role in setting the strategy and technical direction of the company’s security posture.  I design, build and oversee the implementation of critical member facing assets.',
    highlights: [
      'Implement secure development best practices',
      'Responsible for application security through the enterprise’s custom developed assets.',
      'Build security strategy for ConnectiCare’s technical direction including moving key applications to Amazon Web Services',
      'Conduct proof of concept activities with key business users in support of advanced use cases.',
      'Analyze security weaknesses in complex technology deployments.',
      'Plan, research and design robust security architectures that leverage cloud services (IaaS, PaaS,SaaS).',
      'Perform vulnerability scanning, risk analyses and security assessment.',
      'Define, implement and maintain corporate security policies and procedures.',

    ],
  },
  {
    name: 'TicketNetwork',
    position: 'Information Security & Compliance Lead',
    url: 'https://www.ticketnetwork.com',
    startDate: '2015-10-01',
    endDate: '2016-07-01',
    summary: 'Responsible for Ticket Network’s Information Security program, and PCI Compliance.',
    highlights: [
      'Conduct software security reviews with HP Fortify for static code analysis.',
      'Integrate secure best practices into the SDLC.',
      'Assess web application for vulnerabilities using Burp and other penetration testing tools.',
      'Partner with Product Development teams to design security solutions for TicketNetwork products and applications.',
      'Build Amazon Web Services environment for Big Data analytics.',
      'Deploy and manage solutions to comply with PCI-DSS 3.1, PA-DSS 3.1 and drive towards PCI-DSS 3.2 compliance.',
      'Manage and configure the web application firewall (WAF), and Next-Gen Palo Alto Firewalls.',
      'Run vulnerability and patch management of servers and applications.',
      'Develop TicketNetwork security strategy and policy.',
    ],
  },
  {
    name: 'Protiviti',
    position: 'Senior Consultant – Information Security & Digital Forensics',
    url: 'https://www.protiviti.com/',
    startDate: '2014-10-01',
    endDate: '2015-10-01',
    summary: 'At Protiviti I have interfaced with many clients ranging in size, industry and information security maturity level. I have been able to develop and implement solutions for clients to further their security objectives and protect their key intellectual property and data.',
    highlights: [
      'Assessed over 50 customer facing websites by performing code reviews and penetration testing for Sony Music Entertainment.',
      'Integrated security best practices into Sony Music’s DevOps for artist websites.',
      'Developed Security Architecture Review Board for Deutsche Bank.',
      'Implemented Websense Data Security DLP Solution for The Clearing House.',
      'Administered and upgraded Websense Web Security web filtering proxy for The Clearing House.',
      'Implemented hardening standards for critical systems throughout the enterprise for The Clearing House.',
      'Performed vulnerability assessments with Nessus and other vulnerability scanners for a hospitality company.',
    ],
  },
  {
    name: 'United Technologies Corporation (Now Raytheon Technologies)',
    position: 'Information Technology Senior Analyst',
    url: 'https://www.rtx.com',
    startDate: '2011-06-01',
    endDate: '2014-10-01',
    summary: 'Lead many projects at different UTC business units, giving me a diverse set of skill and experience',
    highlights: [
      'Analyzed malware with Cuckoo Sandbox, IDA pro, and other methods.',
      'Investigated security incidents with both hard disk (EnCase) and memory (Volatility) forensic tools.',
      'Coordinated with corporate security to leverage shared resources to protect against APT activity.',
      'Architected the data warehouse infrastructure to support rapid data growth.',
      'Lead the SAP HANA implementation, enabling real-time analytics from SAP.',
      'United Technologies Corporate Headquarters.',
      'Implemented a SQL Server business intelligence solution for UTC contracts and supplier spend data.',
    ],
  },
];

export default work;
