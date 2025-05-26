import { useState } from "react";
import Page from "../../components/layout/page";
import { EmptyAdvertsWarning } from "./empty-adverts-warning";
import { NotFoundAdvertsWarning } from "./not-found-adverts-warning";

function AdvertsPage() {
  const [adverts, getAdverts] = useState([]);

  return (
    <Page title="Newsfeed">
      {adverts.length ? (
        <ul>
          <li>sdhsfu</li>
        </ul>
      ) : (
        <EmptyAdvertsWarning />
      )}
    </Page>
  );
}

export default AdvertsPage;
