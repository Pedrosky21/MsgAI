export default function Menu() {
  return (
    <>
      <div className="h-full w-full">
        <h1 className="flex justify-center font-bold text-4xl">MSG AI</h1>
        <div className="w-full mt-5">
          <div className="flex justify-center">
            <button className="flex items-center space-x-2 pt-4 px-4 pb-2.5 rounded-xl outline-1 outline-white">
              <p className="text-xl leading-none align-text-bottom">New chat</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mb-1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
          </div>
          <div className="mt-5 w-full">
            <div className="flex space-x-2 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
              </svg>
              <h2 className="text-xl font-bold text-gray-300">Chats</h2>
            </div>
            <div className="px-5 w-full text-wrap">
              <p>Connected to a Backend we could create & save chats!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
