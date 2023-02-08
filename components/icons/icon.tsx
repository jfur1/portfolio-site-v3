import React from 'react';
import {
    GitHubIcon,
    LinkedInIcon,
    ExternalLinkIcon,
    Logo
} from '@/components/icons';
import { FiFolder } from 'react-icons/fi'

const Icon = ({ name }: any) => {
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