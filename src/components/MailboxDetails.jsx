import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams();
    const [mailbox, setMailbox] = useState({})
    const [error, setError] = useState(false)

useEffect(() => {
    const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))
    if (selectedBox){ 
        setMailbox(selectedBox)
        setError(false)
    } else {
        setError(true)
    }
}, [])
    if (error) return <h2>Mailbox Not Found</h2>

  return (
    <>
        <div className='mail-box'>
            <h2>Mailbox {mailbox._id}</h2>
            <h3>Details</h3>
            <h4>Boxholder: {mailbox.boxholder}</h4>
            <h4>Box Size: {mailbox.boxSize}</h4>
        </div>
    </>
  )
}

export default MailboxDetails