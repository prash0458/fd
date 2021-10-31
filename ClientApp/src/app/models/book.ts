export interface Book {
  id: string;
  bookName: string;
  price: number;
  category: string;
  author: string;
  iSB: string;
  bookOrigin: string;
  addressList: Address[];
  relatedPersonList: RelatedPerson[];
}

export interface Address {
  id: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface RelatedPerson {
  id: string;
  name: string;
}
