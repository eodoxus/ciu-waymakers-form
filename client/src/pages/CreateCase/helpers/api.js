import axios from 'axios';
import { isDev } from '../../../lib/util';

const BASE_URL = `${isDev ? 'http://localhost:9000' : ''}`;
const headers = {
  'Content-Type': 'application/json',
};
const api = axios.create({ baseURL: BASE_URL, headers });

export const createTicket = async attrs => {
  try {
    const { data } = await api.post(`/create-ticket.php`, attrs);
    return data;
  } catch (error) {
    const out = error.response ? error.response.data : error.message;
    console.error('API Error > createTicket:', out);
    return out;
  }
};

export const getContacts = async companyId => {
  try {
    const { data } = await api.get(`/get-contacts.php?company_id=${companyId}`);
    return data
      ? data.reduce((acc, cur) => ({ [cur.emailAddress]: cur.id, ...acc }), {})
      : {};
  } catch (error) {
    const out = error.response ? error.response.data : error.message;
    console.error('API Error > getContacts:', out);
    return out;
  }
};

export const getTicket = async id => {
  try {
    const { data } = await api.get(`/get-ticket.php?id=${id}`);
    return data?.item || {};
  } catch (error) {
    const out = error.response ? error.response.data : error.message;
    console.error('API Error > getTicket:', out);
    return out;
  }
};
