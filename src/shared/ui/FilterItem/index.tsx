import { Link, useSearchParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { DEFAULT_TAG } from "../../consts";

interface IFilterItemProps {
  name: string;
}

export const FilterItem = ({ name }: IFilterItemProps) => {
  const [searchParams] = useSearchParams();
  const currentFilter = searchParams.get("course");

  const tagParams = new URLSearchParams({ course: name }).toString();
  const linkParams = name === DEFAULT_TAG ? "" : `?${tagParams}`;

  return (
    <Link
      to={linkParams}
      className={twMerge(
        "p-3 rounded-xl text-tag",
        (currentFilter === name ||
          (searchParams.size === 0 && name === DEFAULT_TAG)) &&
          "bg-tag text-white"
      )}
    >
      {name}
    </Link>
  );
};
