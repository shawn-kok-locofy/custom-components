import { FunctionComponent, useRef, useState } from "react";
import styles from "./FileUpload.module.css";

export type FileUploadType = {
  text: string;
};

const FileUpload: FunctionComponent<FileUploadType> = ({
  text = "File Upload",
}) => {
  const fileInputRef: any = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleDivClick = () => {
    if (selectedFile) return;
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
      console.log("Selected file:", file);
    }
  };

  return (
    <div
      onClick={handleDivClick}
      className={styles.fileupload}
    >
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div className={styles.stateupload}>
        <div className={styles.container}>
          {selectedFile && (
            <>
            <img className={styles.tickicon1} alt="" src="/tickicon.svg" />
            <div className={styles.text}>{text} ({<span style={{color: "#0F6CBD"}}>{selectedFile?.name}</span>})</div>
            </>
          )}
          {!selectedFile && (
            <div className={styles.text}>{text}</div>
          )}
        </div>
        <div
          className={`${styles.iconwrapper} ${
            selectedFile ? styles.delete : styles.chevron
          }`}
          onClick={() => {
            if (selectedFile) {
              fileInputRef.current.value = "";
              setSelectedFile(null);
            }
          }}
        />
      </div>
    </div>
  );
};

export default FileUpload;
