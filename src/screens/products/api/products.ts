import { IProduct } from '../../../model/order';

const getProducts: (kioskId: string) => IProduct[] = (kioskId) => {
  const MOCKED_PRODUCTS = [
    {
      id: 'product1',
      category: 'KAIAK',
      name: 'Kaiak Oceano Masculino',
      imageUrl:
        'http://static.natura.com/cdn/farfuture/HU1ytcshnCb4FlG45EaRVc1yjykRc4L7PGSFxTWbXbI/1598369171/sites/default/files/styles/original/public/2020-08/400x400%20-%20Kaiak.jpg?itok=QXYqD5qI',
      price: 1234,
      description:
        'Mergulhe na imensidão do fundo do mar. Notas frescas das algas marinhas naturais do Oceano Atlântico e da pataqueira, ingrediente da biodiversidade amazônica, unem-se à densidade do âmbar-marinho e das madeiras escuras. Ouça o chamado do oceano, ele precisa de todos nós. No equilíbrio com o oceano, a vida se renova. Sinta o mergulho profundo e cuide das águas com o novo Kaiak Oceano. Para evitar que mais plástico chegue nas nossas águas, Kaiak Oceano não tem o plástico filme que reveste a caixa. Ela é feita de um cartucho mais resistente e vem lacrada com cola para evitar a violação.',
    },
    {
      id: 'product2',
      category: 'KAIAK',
      name: 'Kaiak Aventura',
      imageUrl:
        'https://static.natura.com/cdn/farfuture/lKcgjlJr14oZST9xVZezRXPO4A7zQ2Auolxy7w3oCEA/1598369195/sites/default/files/styles/original/public/2020-08/400x400%20-%20Kaiak%20Aventura.jpg?itok=kZf4y0zb',
      price: 4321,
      description:
        'Com o acorde refrescante das ervas combinado com notas de musc, Kaiak Aventura Masculino possui um espírito aventureiro, inspirado na energia da natureza.' +
        'A busca por viver intensamente traz a essência do que é Kaiak. Os desafios são atrativos para homens que não possuem medo de se aventurar.' +
        'A natureza te convida a desvendá-la e seu espírito aventureiro é incapaz de recusar. As montanhas te chamam para descobrir cada centímetro delas. As águas das corredeiras te desafiam a explorá-las. A força do ambiente te faz querer desvendar o desconhecido, e você se entrega profundo e completo, superando seus limites. Então finalmente entende o que a natureza tem para você: Liberdade.' +
        'A sensação de aventura é dada pelo acorde de cítricos com artemísia e notas aquosas, que combinadas com a adrenalina da pimenta preta trazem a satisfação da superação através das madeiras.',
    },
    {
      id: 'product3',
      category: 'KAIAK',
      name: 'Kaiak Pulso',
      imageUrl:
        'https://static.natura.com/cdn/farfuture/rjPP6DyF3mEOPnHy9HEODj16ZfjNBGjA7eHHNMeJdRg/1598369195/sites/default/files/styles/original/public/2020-08/400x400%20-%20Kaiak%20Pulso.jpg?itok=Tapp0mQB',
      price: 6969,
      description:
        'Vibrante, Kaiak Pulso combina ervas com notas de lima. Uma fragrância que move os homens e exala adrenalina. Ideal para homens que não gostam de ficar parados.' +
        'A busca por viver intensamente traz a essência do que é Kaiak. Os desafios são atrativos para homens que não possuem medo de se aventurar.' +
        'Sentindo o movimento das ondas seu corpo absorve a energia do mar. Guiando a bike a sensação de comando e segurança é libertadora. Enquanto aumenta a velocidade da corrida você sente seu coração ganhar um ritmo envolvente. É uma mistura de emoções que te movem. É pulsante.' +
        'Kaiak Pulso possui uma saída que é uma explosão de frescor, ressaltada pelo contraste do corpo floral. O fundo é uma rica combinação de madeiras como musc, tonka e incenso. Fragrância totalmente inspirada na sua energia.',
    },
  ];
  return MOCKED_PRODUCTS;
};

export default getProducts;
