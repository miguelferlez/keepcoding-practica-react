import "./advert-card.css";
import placeholderImg from "../../assets/image-placeholder.jpg";
import type { Advert } from "./types";

interface AdvertCardProps {
  advert: Advert;
}

function AdvertCard({ advert }: AdvertCardProps) {
  return (
    <div className="group relative">
      {advert.photo ? (
        <img src={advert.photo} className="photo-container" />
      ) : (
        <img src={placeholderImg} className="photo-container" />
      )}
      <div className="mb-1 flex items-center justify-between">
        <span className="inset-0 text-gray-500">{advert.name}</span>
        <span className="font-bold text-gray-800">
          {advert.price.toFixed(2)}$
        </span>
      </div>
      <div className="absolute top-2.5 right-2">
        {advert.sale ? (
          <span className="type">For sale</span>
        ) : (
          <span className="type">Wanted</span>
        )}
      </div>
      <div className="flex flex-wrap gap-1">
        {advert.tags.map((tag) => (
          <span className="tag" key={`${advert.id}-${tag}`}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AdvertCard;
