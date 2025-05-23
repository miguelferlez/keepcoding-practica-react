import DocumentPlusIncon from "../../components/icons/document-plus-icon";

export const EmptyAdvertsWarning = () => (
  <section>
    <div className="mx-auto flex w-full max-w-sm flex-col px-4 text-center">
      <div className="mx-auto mb-3 rounded-full bg-amber-100 p-3">
        <DocumentPlusIncon className="size-6 text-amber-500" />
      </div>
      <h1 className="mb-2 text-lg text-gray-800">No adverts... yet</h1>
      <p className="mb-4 text-gray-500">Get started by creating a new one!</p>
      <button>Create advert</button>
    </div>
  </section>
);
