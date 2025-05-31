import { Component, type ReactNode, type ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  { error: Error | null; info: unknown }
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { error: null, info: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, info: errorInfo });
  }

  render() {
    const { error, info } = this.state;

    return (
      <>
        {error ? (
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
              <div className="mx-auto max-w-screen-sm text-center">
                <h2 className="mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
                  Oops!
                </h2>
                <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Something went wrong.
                </p>
                <p className="mb-6 text-lg font-light text-gray-500">
                  There was a problem processing the request, please try again
                  later. If this error persists, don't hesitate to{" "}
                  <a
                    href="https://github.com/miguelferlez/keepcoding-practica-react/issues"
                    target="blank"
                    className="text-error hover:underline"
                  >
                    get in touch with us and open an issue for this project.
                  </a>
                </p>
                <div className="flex justify-center">
                  <a href="/" className="btn btn-remove">
                    Try again
                  </a>
                </div>
                <div className="mt-8 max-h-80 overflow-scroll rounded-xl bg-gray-100 p-4 text-left">
                  <code>{error.message}</code>
                  <code>{JSON.stringify(info)}</code>
                </div>
              </div>
            </div>
          </section>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default ErrorBoundary;
