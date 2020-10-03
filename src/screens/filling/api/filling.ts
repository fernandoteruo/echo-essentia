import api from '../../../api';

interface IData {
  method: string;
  name: string;
  payloads: any;
}

const fillRecipient = async (deviceId: string, data: IData) => {
  return api.post(`/things/${deviceId}/invoke`, data);
};

export default fillRecipient;
