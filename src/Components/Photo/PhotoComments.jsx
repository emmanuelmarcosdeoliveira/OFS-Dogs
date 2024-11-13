import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author}: </strong>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
