import { Comment } from "@/types";
import { P } from "@/design/typography";
import { timeAgo } from "@/utils/helpers";
export const CommentFeed = ({ commentFeed }: { commentFeed: Comment[] }) => {
  return (
    <ul role="list" className="-mb-8 w-full">
      {commentFeed.map((comment: Comment) => (
        <li key={comment.id}>
          <div className="relative pb-8 w-full">
            <div className="relative flex items-start space-x-3">
              <div className="min-w-0 flex-1 w-full">
                <div>
                  <div className="flex items-center justify-start pt-2">
                    <P>{comment.user_id}</P>
                    <span className="px-2">&#x2022;</span>
                    <P>{timeAgo(comment.created_at)}</P>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-700 w-full bg-gray-200 px-4 py-3 rounded-r-xl rounded-bl-xl">
                  <P weight="font-base">{comment.content}</P>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
