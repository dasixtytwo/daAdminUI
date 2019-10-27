export class Profile {
  _id: string;
  firstname: string;
  lastname: string;
  birthday: Date;
  location: {
    address: string;
    city: string;
    postcode: string;
    country: string;
    lon: string;
    lat: string;
  };
  phone: string;
  mobile: string;
  company: string;
  website: string;
  status: string;
  language: string;
  bio: string;
  // with auth
  _userId: string;
}
