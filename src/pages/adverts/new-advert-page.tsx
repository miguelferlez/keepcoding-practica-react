import Dropzone from "../../components/ui/dropzone";
import FormField from "../../components/ui/form-field";
import ChoiceField from "../../components/ui/choice-field";
import { useNavigate } from "react-router";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import Page from "../../components/layout/page";
import Alert from "../../components/ui/alert";
import { AxiosError } from "axios";
import { createAdvert, getAdvertTags } from "../../services/adverts";
import Button from "../../components/ui/button";

function NewAdvertPage() {
  const [newAdvert, setNewAdvert] = useState({
    name: "",
    sale: true,
    price: 1.0,
    tags: [],
  });
  const [advertTags, setAdvertTags] = useState<String[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const { name, sale, price, tags } = newAdvert;
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [tags, setTags] = useState([]);
  // const [sale, setSale] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const isDisabled = !name || !price || !tags || isFetching;
  const [error, setError] = useState<{ message: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(newAdvert);

    async function fetchAdvertTags() {
      const advertTags = await getAdvertTags();
      setAdvertTags(advertTags);
    }
    fetchAdvertTags();
  }, []);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewAdvert((prevNewAdvert) => ({
      ...prevNewAdvert,
      [event.target.name]: event.target.value,
    }));
  }

  function handleRadioChange(event: ChangeEvent<HTMLInputElement>) {
    setNewAdvert((prevNewAdvert) => ({
      ...prevNewAdvert,
      sale: event.target.value === "on",
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setIsFetching(true);
      setNewAdvert((prevNewAdvert) => ({
        ...prevNewAdvert,
        photo: fileRef.current?.files?.[0],
      }));
      console.log(newAdvert);

      // const createdAdvert = await createAdvert(newAdvert);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError({
          message:
            error.response?.data?.message ??
            error.message ??
            "Something wrong happened",
        });
      }
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <Page title="Create new advert">
      {error && (
        <Alert
          type="error"
          onClick={() => {
            setError(null);
          }}
        >
          {error.message}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <Dropzone
          label="Photo"
          name="photo"
          accept="image/png, image/jpg"
          ref={fileRef}
        />
        <FormField
          label="Title"
          name="name"
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter product name"
          aria-describedby="title-helper"
          maxLength={80}
          required
        />
        <p className="mb-4 text-gray-400" id="title-helper">
          Max title length 80 characters.
        </p>
        <FormField
          label="Price"
          name="price"
          type="number"
          value={price}
          onChange={handleInputChange}
          placeholder="1.00"
          aria-describedby="price-helper"
          min={1.0}
          max={99999.99}
          required
        />
        <p className="mb-4 text-gray-400" id="price-helper">
          Allowed price range from 1.00$ to 99999.99$.
        </p>
        <div className="flex gap-10">
          <div className="flex grow flex-col gap-4">
            <span className="font-bold">
              Tags <span className="text-red-500"> *</span>
            </span>
            <ul className="w-full items-center rounded-[9px] border border-gray-200 text-sm sm:flex">
              {advertTags.map((tag) => (
                <ChoiceField
                  label={`${tag}`}
                  type="checkbox"
                  name="tag"
                  forId={`${tag}`}
                  key={`advert-tag-${tag}`}
                />
              ))}
            </ul>
          </div>
          <div className="flex grow flex-col gap-4">
            <span className="font-bold">
              What kind of ad is this? <span className="text-red-500"> *</span>
            </span>
            <ul className="w-full items-center rounded-[9px] border border-gray-200 text-sm sm:flex">
              <ChoiceField
                label="For sale"
                type="radio"
                name="sale"
                forId="sale-input-on"
                checked={sale}
                value="on"
                onChange={handleRadioChange}
              />
              <ChoiceField
                label="Wanted"
                type="radio"
                name="sale"
                forId="sale-input-off"
                checked={!sale}
                value="off"
                onChange={handleRadioChange}
              />
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <Button
            label="Create new advert"
            variant="primary"
            type="submit"
            disabled={isDisabled}
          />
        </div>
      </form>
    </Page>
  );
}

export default NewAdvertPage;
