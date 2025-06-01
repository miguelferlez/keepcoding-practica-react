import MagnifyingGlassIcon from "../../components/icons/magnifying-glass-icon";

export const NotFoundAdvertsWarning = () => (
  <section className="">
    <div className="mx-auto flex h-[calc(100vh-300px)] max-w-sm flex-col items-center px-4">
      <div className="mx-auto mb-3 rounded-full bg-blue-100 p-3">
        <MagnifyingGlassIcon className="size-6 text-blue-500" />
      </div>
      <h1 className="mb-2 text-lg text-gray-800">There's no advert here</h1>
      <p className="mb-4 text-center text-gray-500">
        Try changing your filters to see appointments
      </p>
    </div>
  </section>
);
