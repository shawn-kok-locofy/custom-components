import { FunctionComponent, useState } from "react";

import styles from './Toggle.module.css'

const Toggle = () => {
    const [decision, setDecision] = useState(true);

    return <div className={styles.container}>
        <div onClick={() => setDecision(true)} className={decision ? styles.selected : styles.button }>Yes</div>
        <div onClick={() => setDecision(false)} className={!decision ? styles.selected : styles.button }>No</div>
    </div>
}

export default Toggle;