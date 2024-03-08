import styles from './Header.module.css'
import todoImage from '../assets/todo.svg';

export function Header() {
   return (
    <div className={styles.container}>
        <img src={todoImage} alt="logo da aplicação" />
    </div>
   )
}
