import { VideoFeedAtom } from "@/store/user";
import { useAtom } from "jotai";

export const Feed = () => {
  const [videoFeed, setVideoFeed] = useAtom(VideoFeedAtom);
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6"
    >
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              alt=""
              src={file.source}
              className="pointer-events-none object-cover group-hover:opacity-75"
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
            {file.title}
          </p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">
            {file.size}
          </p>
        </li>
      ))}
    </ul>
  );
};
