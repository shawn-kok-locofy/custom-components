import { FC } from "react";

import styles from './TextArea.module.css'

type TextAreaProps = {
    text: string;
}

const TextArea: FC<TextAreaProps> = ({text}) => {
    return <div className={styles.container} style={{
        display: "flex",
        width: "100%",
    }}>
        <textarea className={styles.textarea} style={{
            background: 'transparent',
        }} placeholder={text} />
    </div>
}

export default TextArea