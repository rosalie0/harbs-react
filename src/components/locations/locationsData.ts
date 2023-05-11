interface slideInterface {
  url: string;
}

export interface CoordinateInterface {
  lat: number;
  lng: number;
}
export interface LocationInterface {
  name: string;
  address: string;
  googleMapsUrl: string;
  phoneNumber: string;
  text: string;
  imageUrls: slideInterface[];
  coordinates: CoordinateInterface;
}

export const chelseaData: LocationInterface = {
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
  imageUrls: [
    { url: "/locations/chelsea/harbs01.jpg" },
    { url: "/locations/chelsea/harbs02.jpg" },
    { url: "/locations/chelsea/harbs03.jpg" },
    { url: "/locations/chelsea/harbs04.jpg" },
    { url: "/locations/chelsea/harbs05.jpg" },
    { url: "/locations/chelsea/harbs06.jpg" },
    { url: "/locations/chelsea/harbs07.jpg" },
    { url: "/locations/chelsea/harbs08.jpg" },
    { url: "/locations/chelsea/harbs09.jpg" },
    { url: "/locations/chelsea/harbs10.jpg" },
    { url: "/locations/chelsea/harbs11.jpg" },
  ],
  coordinates: { lat: 40.745849, lng: -74.001548 },
};

export const sohoData: LocationInterface = {
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
  imageUrls: [
    { url: "/locations/soho/HARBS_SOHO_01.jpg" },
    { url: "/locations/soho/HARBS_SOHO_02.jpg" },
    { url: "/locations/soho/HARBS_SOHO_03.jpg" },
    { url: "/locations/soho/HARBS_SOHO_04.jpg" },
    { url: "/locations/soho/HARBS_SOHO_05.jpg" },
    { url: "/locations/soho/HARBS_SOHO_06.jpg" },
    { url: "/locations/soho/HARBS_SOHO_07.jpg" },
    { url: "/locations/soho/HARBS3_1920x1080.jpg" },
  ],
  coordinates: { lat: 40.7263606, lng: -74.000036 },
};

export const locationsData = { chelseaData, sohoData };
