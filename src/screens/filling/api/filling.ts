import { api } from '../../../api';

interface IData {
  method: string;
  name: string;
  payloads: any;
}

interface IResponse {
  payload: any;
}

export const fillRecipient: (
  deviceId: string,
  data: IData,
) => Promise<IResponse> = async (deviceId: string, data: IData) => {
  return api.post<IData, IResponse>(`/things/${deviceId}/invoke`, data);
};

const MOCK_WRITE_RFID = 3000;

export const writeRFID: () => Promise<boolean> = () => {
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, MOCK_WRITE_RFID);
  });
};
