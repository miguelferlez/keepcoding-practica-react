import "./advert-page.css";
import Page from "../../components/layout/page";
import { deleteAdvert, getAdvertById } from "../../services/adverts";
import type { Advert } from "./types";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import placeholderImg from "../../assets/image-placeholder.jpg";
import notFoundImg from "../../assets/image-not-found-placeholder.jpg";
import Button from "../../components/ui/button";
import DeleteAdvertWarning from "./delete-advert-warning";
import Alert from "../../components/ui/alert";
import { formatDistanceToNow } from "date-fns";

function AdvertPage() {
  const params = useParams();
  const [advert, setAdvert] = useState<Advert | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<{ message: string[] } | null>(null);
  const navigate = useNavigate();

  const handleModalClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleDelete = async () => {
    setIsModalOpen(false);
    try {
      await deleteAdvert(advert!.id);
      navigate("/adverts", { replace: true });
    } catch (error) {
      if (error instanceof AxiosError) {
        setError({
          message:
            error.status === 401
              ? navigate("/login", { replace: true })
              : (error.response?.data?.message ??
                error.message ??
                "Something wrong happened"),
        });
      }
    }
  };

  useEffect(() => {
    async function getAdvert() {
      try {
        if (!params.advertId) {
          return;
        } else {
          const response = await getAdvertById(params.advertId);
          setAdvert(response);
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.status === 404) {
            navigate("/not-found", { replace: true });
          }
        }
      }
    }
    getAdvert();
  }, [params.advertId, navigate]);
  return (
    <Page title={`${advert?.name}`}>
      {error &&
        error.message.map((message) => (
          <Alert
            type="error"
            onClick={() => {
              setError(null);
            }}
          >
            {message}
          </Alert>
        ))}
      <div className="flex flex-wrap gap-4 sm:flex-nowrap">
        <div className="w-full px-4 md:w-1/2">
          {advert?.photo === null ? (
            <img src={placeholderImg} className="image-container" />
          ) : advert?.photo ? (
            <img src={`${advert?.photo}`} className="image-container" />
          ) : (
            <img src={notFoundImg} className="image-container" />
          )}
          <Button
            label="Delete this advert"
            variant="remove"
            onClick={handleModalClick}
          />
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
          {advert?.createdAt && (
            <time dateTime={advert?.createdAt}>
              <p className="text-gray-500">
                Advert created{" "}
                {formatDistanceToNow(new Date(advert!.createdAt))} ago.
              </p>
            </time>
          )}
        </div>
      </div>
      <DeleteAdvertWarning
        defaultIsOpen={isModalOpen}
        onConfirm={handleDelete}
        onClose={handleModalClick}
      />
    </Page>
  );
}

export default AdvertPage;
