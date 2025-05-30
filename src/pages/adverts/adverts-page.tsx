import { useEffect, useState } from "react";
import Page from "../../components/layout/page";
import { EmptyAdvertsWarning } from "./empty-adverts-warning";
import { NotFoundAdvertsWarning } from "./not-found-adverts-warning";
import { Link } from "react-router";
import { getAdverts } from "../../services/adverts";
import type { Advert } from "./types";
import AdvertCard from "./advert-card";

function AdvertsPage() {
  const [adverts, setAdverts] = useState<Advert[]>([]);

  useEffect(() => {
    async function fetchAdverts() {
      const adverts = await getAdverts();
      setAdverts(adverts);
    }
    fetchAdverts();
  }, []);

  return (
    <Page title="Newsfeed">
      {adverts.length ? (
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {adverts.map((advert) => (
            <li key={advert.id}>
              <Link to={`/adverts/${advert.id}`}>
                <AdvertCard advert={advert} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyAdvertsWarning />
      )}
    </Page>
  );
}

export default AdvertsPage;
