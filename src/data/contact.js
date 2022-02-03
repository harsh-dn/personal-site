import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/harsh-dn',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.facebook.com/profile.php?id=100026002803901',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/harsh_dn',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/harsh-vardhan-552838171',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:harshvardhanparaiya@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
