import React from "react";

type Props = {
  work: string;
  author: string;
  chapter: string;
};

const ChapterHeader: React.FC<Props> = ({ work, author, chapter }) => {
  return (
    <div>
      {work}
      {author}
      {chapter}
    </div>
  );
};

export default ChapterHeader;
