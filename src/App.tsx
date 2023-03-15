import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { Button, Form, Modal, Upload } from 'antd'

import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import file from '../src/assets/http___127.0.0.1_5555_uploads_Vicky_Shipton_-_London (1).pdf'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);



// you must put the address of the file coming from the server

const docs = [
  //  { uri: "http://127.0.0.1:5555/uploads/Vicky_Shipton_-_London (1).pdf" }, // Remote file
   { uri: `${file}` }, // Local File
];


const showModal = () => {
  setIsModalOpen(true);
};

const handleOk = () => {
  setIsModalOpen(false);
};

const handleCancel = () => {
  setIsModalOpen(false);
};

  return (

 <div style={{display:'flex',margin:'50px', justifyContent:'center',alignItems:'center', padding:'100px'}}>
    <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
      </Modal>
 </div> 
    )
}

export default App
