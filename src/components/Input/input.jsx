import styles from './Input.module.css'
export function Input({ handleAdd, list, setList, edit, setshow, show }) {
    return (
        <div className={styles.container}>
            <textarea placeholder='Create a new note...' className={styles.input} value={list} onChange={event => setList(event.target.value)} />
            <button className={styles.btn} onClick={handleAdd}>{edit ? 'Save' : 'Add'}</button>
            <button className={styles.btn} onClick={() => setshow(!show)}>Menu</button>
        </div>
    )
}