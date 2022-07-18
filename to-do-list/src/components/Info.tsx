import styles from './Info.module.css'

export function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.createCount}>
        <strong>Tarefas Criadas</strong>
        <span>0</span>
      </div>
      <div className={styles.completedCount}>
        <strong>Concluídas</strong>
        <span>0</span>
      </div>
    </div>
  )
}