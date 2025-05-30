import { Link } from "react-router";

function NotFoundPage() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
            404
          </h2>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Something's missing.
          </p>
          <p className="mb-8 text-lg font-light text-gray-500">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <div className="flex justify-center">
            <Link to="/" className="btn btn-remove">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
