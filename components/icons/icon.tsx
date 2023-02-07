import React from 'react';
import {
    GitHubIcon,
    LinkedInIcon,
    FiFolder,
    ExternalLinkIcon,
    Logo
} from '@/components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <GitHubIcon />;
    case 'LinkedIn':
        return <LinkedInIcon />;
    case 'External':
      return <ExternalLinkIcon />;
    case 'FolderIcon':
      return <FiFolder />;
    case 'Globe':
      return <Logo/>;
    default:
      return <></>;
  }
}; 

export default Icon;