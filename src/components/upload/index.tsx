import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from './style';
import UploadIcon from '../../assets/upload.svg';

interface Props {
  onFileUploaded: (file: File) => void;
  onFileURL: (fileURl: string) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded,onFileURL }) => {
    const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);
      onFileUploaded(file);
      onFileURL(fileUrl);
    },[onFileUploaded,onFileURL]
  );

  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop,
    accept: 'image/*',
  });
  
  return (
    <Upload {...getRootProps({className: 'dropzone'})} >
       <input {...getInputProps()} accept="image/*" />
       <img  src={UploadIcon} alt="Upload" />
       <p>Arraste e solte uma imagem aqui ou clique no botão abaixo</p>
       <button type="button" onClick={open} ><span>Pesquisar imagens</span></button>
    </Upload>
  );
}

export default Dropzone;