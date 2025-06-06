import { Link } from "react-router";
import DocumentPlusIncon from "../../components/icons/document-plus-icon";

export const EmptyAdvertsWarning = () => (
  <section>
    <div className="mx-auto flex h-[calc(100vh-300px)] w-full max-w-sm flex-col items-center px-4">
      <div className="mx-auto mb-3 rounded-full bg-amber-100 p-3">
        <DocumentPlusIncon className="size-6 text-amber-500" />
      </div>
      <h1 className="mb-2 text-lg text-gray-800">No adverts... yet</h1>
      <p className="mb-4 text-gray-500">Get started by creating a new one!</p>
      <Link to="/adverts/new" className="btn btn-secondary">
        Create advert
      </Link>
    </div>
  </section>
);
