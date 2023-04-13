export interface LocationInterface {
  name: string;
  address: string;
  googleMapsUrl: string;
  phoneNumber: string;
  text: string;
}

export const chelseaData = {
  name: "Chelsea",
  address: "198 9th Ave, New York, NY 10011",
  googleMapsUrl: "https://goo.gl/maps/tFXJxTJ7LN42",
  phoneNumber: "646 336 6888",
  text: `Monday – Thursday 11:00am – 6:00pm
  Indoor Dining Service (cakes & drinks) is available until 6:00pm
  (Last order at 5:30pm)
  Cake takeout is available until 6:00pm.
  
  Friday – Sunday 11:00am – 8:00pm
  Indoor Dining Service (including food menu) is available until 8:00pm
  (Last food order is at 3:00pm, cakes & drinks until 7:30pm)
  Cake takeout is available until 8:00pm.`,
};

export const sohoData = {
  name: "Soho",
  address: "465 West Broadway, New York, NY 10012",
  googleMapsUrl: "https://goo.gl/maps/S34KT9by7rr",
  phoneNumber: "212 473 1981",
  text: `Monday – Thursday 11:00am – 6:00pm
  Indoor Dining Service (cakes & drinks) is available until 6:00pm
  (Last order at 5:30pm)
  Cake takeout is available until 6:00pm.
  
  Friday – Sunday 11:00am – 8:00pm
  Indoor Dining Service (including food menu) is available until 8:00pm
  (Last food order is at 3:00pm, cakes & drinks until 7:30pm)
  Cake takeout is available until 8:00pm.`,
};

export const locationsData = { chelseaData, sohoData };
