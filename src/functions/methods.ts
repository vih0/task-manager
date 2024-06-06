import axios from 'axios';
type GetProps = {
  url: string;
  setResult: React.Dispatch<React.SetStateAction<never[]>>;
};
type PostProps = {
  url: string;
  body: object;
};
export class Methods {
  static async get({ url, setResult }: GetProps) {
    try {
      const response = await axios.get(url);
      if (response.status) {
        return setResult(response.data);
      }
      throw new Error('algo deu errado');
    } catch (err) {
      console.log(err);
    }
  }
  static async post({ url, body }: PostProps) {
    const post = await axios
      .post(url, body)
      .then((response) => {
        if (!response.status) {
          throw new Error('Erro ao criar tarefa');
        }
        console.log('Enviando com sucesso', response.data);
      })
      .catch((err) => {
        throw new Error('Erro ao enviar POST:' + err);
      });
    return post;
  }
}
