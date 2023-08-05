import styles from './Coments.module.css'

export function Coments() {
  const coments = useState();
  return (
    <form className={styles.form}>
      <strong>Comentários</strong>

      <textarea name="coment" id="coment" placeholder='Escreva algo legal' className={styles.textarea} cols="30" rows="5"></textarea>

      <footer className={styles.footer}>
        <button className={styles.button}>
          Comentar
        </button>
      </footer>
    </form>
  )
}