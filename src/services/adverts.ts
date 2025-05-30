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
