import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import './App.css'

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBox) => {
    newBox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newBox]);
  }
  
  return (
    <>
      <NavBar />
      <Routes>
      <Route path='/' element={<main><h1>Post Office</h1></main>} />
      <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
      <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />} />
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />} />
      </Routes>
    </>
  )
};

export default App
