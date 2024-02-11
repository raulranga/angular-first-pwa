export interface UserModel {
  cell: string;
  dov: DobModel;
  email: string;
  gender: string;
  id: UserIdModel;
  location: LocationModel;
  login: LoginModel;
  name: UserNameModel;
  nat: string;
  phone: string;
  picture: PictureModel;
  registered: RegisteredModel;
}

interface DobModel {
  date: string;
  age: number;
}

interface UserIdModel {
  name: string;
  value: string;
}

interface LocationModel {
  city: string;
  coordinates: CoordinatesModel;
  country: string;
  postcode: number;
  state: string;
  street: StreetModel
  timezone: TimezoneModel;
  name: UserNameModel;
  nat: string;
  phone: string;
  picture: PictureModel;
}

interface CoordinatesModel {
  latitude: string;
  longitude: string;
}

interface StreetModel {
  number: number;
  name: string;
}

interface TimezoneModel {
  offset: string;
  description: string;
}

interface LoginModel {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

interface UserNameModel {
  first: string;
  last: string;
  title: string;
}

interface PictureModel {
  large: string;
  medium: string;
  thumbnail: string;
}

interface RegisteredModel {
  age: number;
  date: string;
}
