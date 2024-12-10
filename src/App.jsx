import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import './App.css'

const App = () => {
  return (
    <>
      <NavBar />
      <h1>Test</h1>
      <Routes>
      <Route path='/' element={<mail><h1>Post Office</h1></mail>} />
      <Route path='/mailboxes' element={<MailboxList />} />
      <Route path='/new-mailbox' element={<MailboxForm />} />
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />} />
      </Routes>
    </>
  )
};

export default App
