import React from "react";
import { UserContext } from "../../UserContext";
import styles from "./PhotoComments.module.css";
import PhotoCommentsForm from "./PhotoCommentsForm";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentSection}
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author}: </strong>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
