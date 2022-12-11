import styles from "./styles.module.css"

interface TaskBoxProps {
  task: Task;
  onDone: () => void;
}

type Task = {
  title: string;
}

export const TaskBox = ({task, onDone}: TaskBoxProps) => {

  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <div>
          {task.title}
        </div>

        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={onDone}
          >
            Concluído
          </button>
        </div>
      </div>
    </div>
  )
}