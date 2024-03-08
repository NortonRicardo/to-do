import { Trash, Check } from '@phosphor-icons/react'

import styles from "./Task.module.css"

export function Task({data = false}){

    return(
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox">
                    <input readOnly type="checkbox" />
                    { data ? 
                    (<span className={`${styles.checkbox} ${styles.checkboxChecked}`}>
                        {true && <Check size={12} />}
                    </span>)
:
                    (<span className={`${styles.checkbox} ${styles.checkboxUnchecked}`}>
                        {false && <Check size={12} />}
                    </span>)
                }
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corporis dignissimos molestiae nobis omnis quasi dolore nostrum atque reiciendis.</p>
                </label>
            </div>
            <button >
                <Trash size={16} color="#808080" />
            </button>

        </div>
    )
}