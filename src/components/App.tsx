import { PlusCircle } from '@phosphor-icons/react'
import styles from './App.module.css'
import { Button } from './Button'
import { Header } from './Header'
import { Input } from './Input'
import { ListHeader } from './ListHeader'
import { Task } from './Task'

export function App() {
  return (
    <main>
      
      <Header />


      <section className={styles.content}>
        <div className={styles.inputContainer}>
          <Input />
          <Button> 
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
        <div className={styles.tasksList}>
          <ListHeader />
          <div>
            <Task />
            <Task data={true}/>
          </div>

        </div>
      </section>
      
    </main>
  )
}
