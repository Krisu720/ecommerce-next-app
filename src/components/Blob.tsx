import { FC } from "react";

interface BlobProps {}

const Blob: FC<BlobProps> = ({}) => {
  return (
    <svg
      className="absolute w-full h-full"
      id="visual"
      viewBox="0 0 1232 720"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <g transform="translate(606.4865219366508 275.9666605000806)">
        <path
          d="M229.4 -195.1C286.7 -172.1 315.4 -86 303.1 -12.3C290.9 61.5 237.7 123 180.4 198C123 273 61.5 361.5 -7.9 369.4C-77.3 377.3 -154.6 304.6 -211.3 229.6C-268 154.6 -304 77.3 -278.6 25.4C-253.2 -26.5 -166.4 -53 -109.7 -76C-53 -99 -26.5 -118.5 29.8 -148.3C86 -178 172.1 -218.1 229.4 -195.1"
          fill="#1decff"
        ></path>
      </g>
    </svg>
  );
};

export default Blob;
