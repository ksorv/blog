import { Link } from 'remix';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative z-50 text-secondary-accent bg-primary-accent pt-12 mt-auto"
    >
      <div className="border-t border-b border-b-secondary-accent/20 border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-3xl mx-auto container px-4 xl:px-12 2xl:px-4">
          <div className="flex justify-between">
            <div className="w-full lg:w-1/2 flex">
              <div className="w-full lg:w-1/2">
                <ul className="h-full flex flex-col justify-between">
                  <li>
                    <Link
                      to="/blog"
                      className="text-base hover:text-primary lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/ama"
                      className="text-base hover:text-primary lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                    >
                      AMA
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="text-base hover:text-primary lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-end">
              <div className="px-6 flex flex-col justify-between items-end">
                <Link
                  to="/"
                  className="flex flex-col gap-2 items-center justify-center hover:text-primary"
                >
                  <Logo className="h-12 fill-primary" />
                  <p className="font-bold capitalize text-base">KSORV</p>
                </Link>
                <div className="flex items-center justify-between mt-3 w-full">
                  <a href="/twitter">
                    <div className="cursor-pointer">
                      <svg
                        className="hover:stroke-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </div>
                  </a>
                  <a href="/twitter">
                    <div className="cursor-pointer">
                      <svg
                        className="hover:stroke-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 flex flex-col justify-center items-center">
        <p className="text-sm lg:text-base mt-1 md:text-left text-center">
          All rights reserved
          <br className="md:hidden block leading-6" /> © Saurav Khdoolia 2021
        </p>
      </div>
    </footer>
  );
};
