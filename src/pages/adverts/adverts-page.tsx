import { useEffect, useState } from "react";
import Page from "../../components/layout/page";
import { EmptyAdvertsWarning } from "./empty-adverts-warning";
import { NotFoundAdvertsWarning } from "./not-found-adverts-warning";
import { Link } from "react-router";
import { getAdverts, getAdvertTags } from "../../services/adverts";
import type { Advert } from "./types";
import AdvertCard from "./advert-card";
import FormField from "../../components/ui/form-field";
import MagnifyingGlassIcon from "../../components/icons/magnifying-glass-icon";
import clsx from "clsx";
import ChoiceField from "../../components/ui/choice-field";

function AdvertsPage() {
  const [adverts, setAdverts] = useState<Advert[]>([]);
  const [advertTags, setAdvertTags] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filterAdverts = adverts.filter((advert) => {
    const advertName = advert.name.toLowerCase();
    const advertTags = advert.tags;
    return (
      advertName.includes(search.toLowerCase()) &&
      selectedTags.every((tag) => advertTags.includes(`${tag}`))
    );
  });

  const toggleTag = (tagValue: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tagValue)
        ? prevTags.filter((tag) => tag !== tagValue)
        : [...prevTags, tagValue],
    );
  };

  useEffect(() => {
    async function fetchAdverts() {
      const adverts = await getAdverts();
      const advertTags = await getAdvertTags();
      setAdverts(adverts);
      setAdvertTags(advertTags);
    }
    fetchAdverts();
  }, []);

  return (
    <>
      <div className="mb-4 border-b-1 border-gray-200">
        <form className="container mx-auto items-center gap-4 p-6 sm:flex sm:py-3">
          <div className="grow-4">
            <FormField
              label=""
              type="text"
              name="search"
              value={search}
              icon={<MagnifyingGlassIcon className="size-6 text-gray-400" />}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              placeholder="Search products"
            />
          </div>
          <div className="grow">
            <ul className="mb-2 w-full items-center rounded-[9px] border border-gray-200 text-sm sm:flex">
              {advertTags.map((tag) => (
                <ChoiceField
                  label={`${tag}`}
                  type="checkbox"
                  name="tag"
                  value={`${tag}`}
                  forId={`${tag}`}
                  key={`advert-tag-${tag}`}
                  onChange={() => {
                    toggleTag(`${tag}`);
                  }}
                />
              ))}
            </ul>
          </div>
        </form>
      </div>
      <Page title="Newsfeed">
        {adverts.length ? (
          <ul
            className={clsx({
              "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8":
                filterAdverts.length !== 0,
            })}
          >
            {filterAdverts.length ? (
              filterAdverts.map((advert) => (
                <li key={advert.id}>
                  <Link to={`/adverts/${advert.id}`}>
                    <AdvertCard advert={advert} />
                  </Link>
                </li>
              ))
            ) : (
              <NotFoundAdvertsWarning />
            )}
          </ul>
        ) : (
          <EmptyAdvertsWarning />
        )}
      </Page>
    </>
  );
}

export default AdvertsPage;
