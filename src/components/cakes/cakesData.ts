export interface CakeInterface {
  name: string;
  description: string;
  imageURL: string;
  slicePrice: number;
  wholePrice: number;
  alcohol?: "none" | "some" | "strong";
}

const mille: CakeInterface = {
  name: "Fresh Fruit Milles Crepe",
  description:
    "Six layers of thin crepes filled with fresh fruits and mixed cream.",
  slicePrice: 16,
  wholePrice: 160,
  imageURL: "/cakes/savorjapan/mille.jpg",
  alcohol: "some",
};

const strawberry: CakeInterface = {
  name: "Strawberry Cake",
  description:
    "Fine fluffy sponge cake with fresh strawberries and smooth whipped cream.",
  slicePrice: 15,
  wholePrice: 150,
  imageURL: "/cakes/savorjapan/strawberry.jpg",
  alcohol: "none",
};

const chocolate: CakeInterface = {
  name: "Chocolate Cake",
  description:
    "Layers of quality chocolate sponge, cream and walnuts with a hint of Brandy.",
  slicePrice: 12,
  wholePrice: 120,
  imageURL: "/cakes/savorjapan/chocolate.jpg",
  alcohol: "strong",
};

export const cakes = [strawberry, mille, chocolate];
