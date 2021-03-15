import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [day, setDay] = useState('')
  const [textInfor, setTextInfor] = useState('')
  const [important, setImportant] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (title.length > 30) {
      alert('Title can not be more than 30 characters!')
      return
    }
    if (!title) {
      alert('Please add a title!')
      return
    }
    if (textInfor.length > 100) {
      alert('The summary of your schedule can not be more than 100 characters!')
      return
    }

    onAdd({title, day, textInfor, important})

    setTitle('')
    setDay('')
    setTextInfor('')
    setImportant(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Title</label>
        <input type='text' placeholder='Add Task'
        value={title} onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Date</label>
        <input type='datetime-local'
        value={day} onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Zoom Link</label>
        <input type="url" placeholder='Zoom link to the meeting'
        value={textInfor} onChange={(e) => setTextInfor(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Important</label>
        <input type='checkbox' checked={important}
        value={important} onChange={(e) => setImportant(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Information' className='btn btn-block'/>
    </form>
  )
}

export default AddTask
