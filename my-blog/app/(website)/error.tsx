"use client";

type Props = {
  error: Error;
  reset: () => void;
};

const error = ({ error, reset }: Props) => {
  console.log(error);
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-49 141 512 512"
        id="warning"
        className="h-24 w-24"
      >
        <path
          fill="none"
          d="M216.2 194.8c-3-5.6-7.7-8.8-12.9-8.8h-.1c-5.2 0-9.9 3.3-12.8 9L-6 581.3c-4.4 8.6-2.4 17.4.9 22.8 1.8 2.9 5.7 7.6 12.2 7.6l402 .4c6.5 0 10.4-4.8 12.1-7.6 3.3-5.4 5.1-14.3.5-22.9L216.2 194.8zm53.9 276.1c8 7.6 8.4 20.2.8 28.3-3.9 4.2-9.2 6.3-14.5 6.3-4.9 0-9.9-1.8-13.7-5.5L205 464.4 167.3 500c-3.9 3.6-8.8 5.5-13.7 5.5-5.3 0-10.6-2.1-14.5-6.3-7.6-8-7.2-20.7.8-28.3l36-34-36-34c-8-7.6-8.4-20.2-.8-28.3 7.6-8.1 20.2-8.4 28.3-.8l37.7 35.6 37.7-35.6c8-7.6 20.7-7.2 28.3.8 7.6 8 7.2 20.7-.8 28.3l-36 34 35.8 34z"
        ></path>
        <linearGradient
          id="a"
          x1="-32.898"
          x2="425.663"
          y1="436.921"
          y2="436.921"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FF884B"></stop>
          <stop offset=".35" stopColor="#FF634C"></stop>
          <stop offset=".655" stopColor="#FE4A4F"></stop>
          <stop offset="1" stopColor="#FE4840"></stop>
        </linearGradient>
        <path
          fill="url(#a)"
          d="M270.9 374.7c-7.6-8-20.2-8.4-28.3-.8L205 409.4l-37.7-35.6c-8-7.6-20.7-7.2-28.3.8s-7.2 20.7.8 28.3l36 34-36 34c-8 7.6-8.4 20.2-.8 28.3 3.9 4.2 9.2 6.3 14.5 6.3 4.9 0 9.9-1.8 13.7-5.5l37.7-35.6 37.7 35.6c3.9 3.6 8.8 5.5 13.7 5.5 5.3 0 10.6-2.1 14.5-6.3 7.6-8 7.2-20.7-.8-28.3l-36-34 36-34c8.2-7.6 8.5-20.2.9-28.2z"
        ></path>
        <linearGradient
          id="b"
          x1="-32.898"
          x2="425.663"
          y1="398.95"
          y2="398.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FF884B"></stop>
          <stop offset=".35" stopColor="#FF634C"></stop>
          <stop offset=".655" stopColor="#FE4A4F"></stop>
          <stop offset="1" stopColor="#FE4840"></stop>
        </linearGradient>
        <path
          fill="url(#b)"
          d="M457 562.7 251.5 176c-10-18.9-28-30.1-48.2-30.1h-.5c-20.3.2-38.3 11.7-48.1 30.9L-41.7 563.1c-9.9 19.5-9 43.2 2.4 61.8C-29 641.7-11.7 651.6 7 651.6l402 .4h.1c18.9 0 36.2-10.1 46.4-27 11.3-18.9 11.9-42.7 1.5-62.3zm-35.8 41.7c-1.7 2.9-5.6 7.6-12.1 7.6l-402-.4c-6.5 0-10.4-4.8-12.2-7.7-3.3-5.4-5.2-14.1-.9-22.8L190.4 195c2.9-5.7 7.6-9 12.8-9h.1c5.2 0 9.9 3.2 12.9 8.8l205.5 386.6c4.6 8.7 2.7 17.5-.5 23z"
        ></path>
      </svg>
      <h3 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-white">{`Uh Oh, An Error Occured`}</h3>
      <p className="mt-4 text-sm text-gray-500 dark:text-white/80">
        {`We're sorry, but something went wrong. Please try again later - ${error.message}`}
      </p>
      <div className="mt-6">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="1"
            viewBox="0 0 128 128"
            id="reset"
            className="h-5 w-5 mr-2"
            stroke="currentColor"
            strokeWidth={3}
            fill="currentColor"
          >
            <path d="M115 25.21a64 64 0 0 0-13-12.82 2 2 0 1 0-2.36 3.22 60.13 60.13 0 0 1 .86 96.11 59.79 59.79 0 0 1-83.9-11.36 60.17 60.17 0 0 1 8.33-81.62V38a2 2 0 1 0 4 0V14a2 2 0 0 0-2-2H2a2 2 0 0 0 0 4h20a64 64 0 0 0 42.27 112 63.39 63.39 0 0 0 38.61-13.07A64.18 64.18 0 0 0 115 25.21Z"></path>
            <path d="M63.83 67a2 2 0 0 0 2-2V2a2 2 0 1 0-4 0v63a2 2 0 0 0 2 2Z"></path>
          </svg>
          Try again
        </button>
      </div>
    </div>
  );
};

export default error;
