import GithubIcon from "../icons/github-icon";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t-1 border-gray-200">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 p-6 sm:container sm:flex-row sm:py-6">
        <span className="text-gray-500">{`© ${year} KeepCoding. All Rights Reserved.`}</span>
        <div>
          <a href="https://github.com/miguelferlez/keepcoding-practica-react">
            <GithubIcon className="size-8 fill-gray-500 transition-colors duration-300 hover:fill-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
