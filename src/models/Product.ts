interface IProductProps {
  title: string;
  price: number | string;
  id: number;
}

const data: IProductProps[] = [
  { id: 1, title: "Panela", price: 10 },
  { id: 2, title: "Produto X", price: 30 },
  { id: 3, title: "Produto Y", price: 20 },
];

export default {
  getAll: (): IProductProps[] => {
    return data;
  },

  getById: (id: number): IProductProps => {
    return data.filter((product) => product.id === id)[0];
  },
};
