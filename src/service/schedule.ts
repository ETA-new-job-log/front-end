import { api } from './api';
export interface ScheduleDataType {
  title: string;
  step: string;
  company: string;
  position: string;
  date: string;
  link?: string;
  platform: string | null;
  memo?: string;
}

export const getScheduleBy = async (id: string, token: string) => {
  return api(`/schedules/detail/${id}`, 'get', token);
};

export const postSchedule = async (data: ScheduleDataType, token: string) => {
  return api(`/schedules`, 'post', token, data);
};

export const deleteSchedule = async (id: string, token: string) => {
  return api(`/schedules/${id}`, 'delete', token);
};

export const putSchedule = async (
  id: string,
  data: ScheduleDataType,
  token: string,
) => {
  return api(`/schedules/${id}`, 'put', token, data);
};
