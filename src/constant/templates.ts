import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import DefaultImage from 'public/images/default.png';
import ModernImage from 'public/images/modern.png';

const DefaultTemplate = dynamic(
  () => import('components/resume-builder/templates/layout/DefaultLayout'),
  {
    ssr: false,
  }
);

const ModernTemplate = dynamic(
  () => import('components/resume-builder/templates/layout/ModernLayout'),
  {
    ssr: false,
  }
);

const templates: ComponentType[] = [DefaultTemplate, ModernTemplate];

const templatesName: string[] = ['Default template', 'Modern template'];

const templatesImage = [DefaultImage, ModernImage];

export { templates, templatesName, templatesImage };
