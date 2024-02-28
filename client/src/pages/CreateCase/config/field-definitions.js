import * as Yup from 'yup';

import { getContacts } from "../helpers";

const config = {
  attachments: {
    label: 'Attachments',
    placeholder: 'Upload screenshots or other files',
    type: 'upload',
  },
  contactID: {
    label: 'Contact Email',
    placeholder: 'Start typing...',
    emptyPlaceholder: 'Select email after selecting Site/Program',
    options: {},
    optionsApi: getContacts,
    listensTo: 'companyID',
    required: true,
    schema: Yup.string().required('Required'),
    type: 'autosuggest',
  },
  contactName: {
    label: 'Contact Name',
    placeholder: 'Tell us your name',
    required: true,
    schema: Yup.string().required('Required'),
    type: 'text',
    dtoTransform: 'appendToDescription',
  },
  contactPhone: {
    label: 'Contact Phone',
    placeholder: 'What is a good number to reach you at?',
    required: true,
    schema: Yup.string().required('Required'),
    type: 'text',
    dtoTransform: 'appendToDescription',
  },
  companyID: {
    label: 'Site/Program',
    placeholder: 'Make a selection',
    options: {
      'Waymakers (CCFSP)': 423,
      'Waymakers (Corporate)': 399,
      'Waymakers (Guidance Center - YOW_CCSFP)': 411,
      'Waymakers (Huntington Beach Youth Shelter)': 405,
      'Waymakers (Laguna Beach Children Crisis Residential Program)': 404,
      'Waymakers (PATH)': 424,
      'Waymakers (TAY)': 461,
      'Waymakers (Tustin Youth Shelter)': 407,
      'Waymakers (VAP Team Training)': 494,
      'Waymakers (VAP)': 425,
      'Waymakers (YOW - Corporate)': 421,
      'Waymakers - Central Justice Center': 615,
      'Waymakers - Harbor Justice Center': 614,
      'Waymakers - Lamoreaux Justice Center': 618,
      'Waymakers - Manchester Office Building': 619,
      'Waymakers - North Justice Center': 616,
      'Waymakers - West Justice Center': 617,
    },
    required: true,
    schema: Yup.string().required('Required'),
    type: 'select',
  },
  description: {
    label: 'Description',
    placeholder:
      'Tell us a little about the issue and when you are available to help us fix',
    required: true,
    schema: Yup.string().required('Required'),
    type: 'textarea',
  },
  deviceName: {
    helpComponent: 'DeviceNameHowTo',
    label: 'Device Name',
    placeholder: "Don't know it? Click that help icon right there.",
    required: true,
    schema: Yup.string().required('Required'),
    type: 'text',
    dtoTransform: 'appendToDescription',
  },
  supervisorEmail: {
    label: 'Supervisor Email (Optional)',
    placeholder: 'Enter email address of your supervisor',
    type: 'email',
    dtoTransform: 'appendToDescription',
  },
  title: {
    label: 'Title',
    placeholder: 'How can we help?',
    required: true,
    schema: Yup.string().required('Required'),
    type: 'text',
  },
  dueDateTime: {
    label: 'Due Date',
    type: 'string',
  },
  id: {
    label: 'ID',
    type: 'number',
  },
  priority: {
    label: 'Priority',
    type: 'number',
  },
  queueID: {
    label: 'Queue ID',
    type: 'number',
  },
  source: {
    label: 'Source',
    type: 'number',
  },
  status: {
    label: 'Status',
    type: 'number',
  },
  ticketCategory: {
    label: 'Ticket Category',
    type: 'number',
  },
  ticketType: {
    label: 'Ticket Type',
    type: 'number',
  },
};

export default config;
