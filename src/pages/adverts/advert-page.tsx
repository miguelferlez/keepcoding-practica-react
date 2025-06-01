import "./advert-page.css";
import Page from "../../components/layout/page";
import { getAdvertById } from "../../services/adverts";
import type { Advert } from "./types";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import placeholderImg from "../../assets/image-placeholder.jpg";
import notFoundImg from "../../assets/image-not-found-placeholder.jpg";
import Button from "../../components/ui/button";

function AdvertPage() {
  const params = useParams();
  const [advert, setAdvert] = useState<Advert | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.advertId) {
      return;
    } else {
      getAdvertById(params.advertId)
        .then((advert) => setAdvert(advert))
        .catch((error) => {
          if (error instanceof AxiosError) {
            if (error.status === 404) {
              navigate("/not-found", { replace: true });
            }
          }
        });
    }
  }, [params.advertId, navigate]);
  return (
    <Page title={`${advert?.name}`}>
      <div className="flex">
        <div className="w-full px-4 md:w-1/2">
          {advert?.photo === null ? (
            <img src={placeholderImg} className="image-container" />
          ) : advert?.photo ? (
            <img src={`${advert?.photo}`} className="image-container" />
          ) : (
            <img src={notFoundImg} className="image-container" />
          )}
        </div>
        <div className="flex w-full flex-col items-baseline gap-3 px-4 md:w-1/2">
          {advert?.sale === true ? (
            <h3 className="heading-3 sale-container">For sale</h3>
          ) : (
            <h3 className="heading-3 sale-container">Wanted</h3>
          )}
          <div>
            <p className="mb-1 text-xl font-bold text-gray-500">Price:</p>
            <p className="heading-3">${`${advert?.price}`}</p>
          </div>
          <div>
            <p className="mb-1.5 text-xl font-bold text-gray-500">Tags:</p>
            <div className="mb-3 flex gap-3">
              {advert?.tags.map((tag) => (
                <span key={`${advert.id}-${tag}`} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Button label="Delete this advert" variant="remove" />
          </div>
        </div>
      </div>
    </Page>
  );
}

export default AdvertPage;
