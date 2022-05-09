import { awardMetadata, eduMetadata, workMetadata } from 'types/metadata';

export const EDU_METADATA: Array<eduMetadata> = [
  {
    label: 'Institution',
    name: 'institution',
    type: 'input',
  },
  {
    label: 'Website',
    name: 'website',
    type: 'input',
  },
  {
    label: 'Study Type',
    name: 'type',
    type: 'input',
  },
  {
    label: 'Area',
    name: 'area',
    type: 'input',
  },
  {
    label: 'Start Date',
    name: 'startDate',
    type: 'input',
  },
  {
    label: 'End Date',
    name: 'endDate',
    type: 'input',
  },
  {
    label: 'Score',
    name: 'score',
    type: 'input',
  },
  {
    label: 'Description',
    name: 'description',
    type: 'md',
  },
];

export const WORK_METADATA: Array<workMetadata> = [
  {
    label: 'Company name',
    name: 'name',
    type: 'input',
  },
  {
    label: 'Position',
    name: 'position',
    type: 'input',
  },
  {
    label: 'Website',
    name: 'website',
    type: 'input',
  },
  {
    label: 'Start date',
    name: 'startDate',
    type: 'input',
  },
  {
    label: 'End Date',
    name: 'endDate',
    type: 'input',
  },
  {
    label: 'Summary',
    name: 'summary',
    type: 'md',
  },
];

export const AWARD_METADATA: Array<awardMetadata> = [
  {
    label: 'Title',
    name: 'title',
    type: 'input',
  },
  {
    label: 'Credential',
    name: 'link',
    type: 'input',
  },
  {
    label: 'Date',
    name: 'date',
    type: 'input',
  },
  {
    label: 'Issued by',
    name: 'awarder',
    type: 'input',
  },
  {
    label: 'Summary',
    name: 'summary',
    type: 'md',
  },
];
