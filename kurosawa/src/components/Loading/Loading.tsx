import styles from "./loading.module.css";

interface LoadingProps {
  title: string;
}

const Loading = ({ title }: LoadingProps) => {
  return (
    <div className={styles.loadPage}>
      <h1>{`the ${title} page is loading`}</h1>
    </div>
  );
};

export default Loading;
