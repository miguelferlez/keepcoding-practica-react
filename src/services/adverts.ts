import { client, setAuthorizationHeader } from "../api/client";
import { AdvertsSchema, type Advert } from "../pages/adverts/types";
import storage from "../utils/storage";

const ADVERT_URL = "/api/v1/adverts";

export const getAdverts = async () => {
  const url = `${ADVERT_URL}`;
  const response = await client.get<Advert>(url);
  const accessToken = storage.get("auth");

  if (accessToken) {
    setAuthorizationHeader(accessToken);
  }

  return AdvertsSchema.parse(response.data);
};

export const getAdvertTags = async () => {
  const url = `${ADVERT_URL}/tags`;
  const response = await client.get<Array<String>>(url);

  return response.data;
};

export const createAdvert = async (
  name: string,
  sale: boolean,
  price: number,
  tags: string[],
  photo: File | null,
) => {
  const response = await client.post<Advert>(ADVERT_URL, {
    name,
    sale,
    price,
    tags,
    photo,
  });

  return response.data;
};
