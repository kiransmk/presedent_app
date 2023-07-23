import { Link } from "react-router-dom";
import Card from "./Card";
import formatTimestamp from "./../utils/formatTimestamp";

type DetailsLinkProps = {
  id: number;
  date: string;
};

const DATETIME_FORMAT = "MM/DD/YY - HH:mm";
const DetailsLink: React.FC<DetailsLinkProps> = ({ id, date }) => {
  return (
    <Card>
      <Link
        to={`details/${id}`}
        className="cursor-pointer w-full flex flex-row justify-between rounded hover:bg-cyan-400 hover:text-white"
      >
        <div className="col-start-1 col-end-2 p-4">
          {formatTimestamp(date, DATETIME_FORMAT)}
        </div>
        <div className="col-end-11 col-span-1 flex items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
            className="h-4 w-4 m-1 md:m-0 stroke-2"
          >
            <path
              d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </Link>
    </Card>
  );
};

export default DetailsLink;
