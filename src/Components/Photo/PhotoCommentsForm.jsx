import React from "react";
import { COMMENT_POST } from "../../Api";
import PhotoEnviar from "../../Assets/enviar.svg?react";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        value={comment}
        placeholder="Faça um comentário"
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <PhotoEnviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
