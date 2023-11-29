import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/JimMiller-0',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'www.linkedin.com/in/jim-miller-b386b278',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://wellfound.com/u/james-miller-121',
    label: 'Angel List',
    icon: faAngellist,
  },
  {
    link: 'mailto:jim.miller@jimmymiller.io',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
