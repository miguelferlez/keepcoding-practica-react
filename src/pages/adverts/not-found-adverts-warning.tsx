import MagnifyingGlassIcon from "../../components/icons/magnifying-glass-icon";

export const NotFoundAdvertsWarning = () => (
  <section>
    <div className="mx-auto flex w-full max-w-sm flex-col px-4 text-center">
      <div className="mx-auto mb-3 rounded-full bg-blue-100 p-3">
        <MagnifyingGlassIcon className="size-6 text-blue-500" />
      </div>
      <h1 className="mb-2 text-lg text-gray-800">There's no advert here</h1>
      <p className="mb-4 text-gray-500">
        Try changing your filters to see appointments
      </p>
    </div>
  </section>
);
