import { api } from '../../../api';

interface IData {
  method: string;
  name: string;
  payloads: any;
}

interface IResponse {
  payload: any;
}

const fillRecipient: (
  deviceId: string,
  data: IData,
) => Promise<IResponse> = async (deviceId: string, data: IData) => {
  return api.post<IData, IResponse>(`/things/${deviceId}/invoke`, data);
};

export default fillRecipient;
