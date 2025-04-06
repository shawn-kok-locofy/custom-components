import { FunctionComponent, useState } from "react";
import { Button } from '@fluentui/react-components';

import styles from './Toggle.module.css'

const Toggle = () => {
    const [decision, setDecision] = useState(true);

    return <div className={styles.container}>
        <Button appearance={decision ? 'primary' : 'outline'} size="large" onClick={() => setDecision(!decision)}>Yes</Button>
        <Button appearance={!decision ? 'primary' : 'outline'} size="large"onClick={() => setDecision(!decision)}>No</Button>
    </div>
}

export default Toggle;