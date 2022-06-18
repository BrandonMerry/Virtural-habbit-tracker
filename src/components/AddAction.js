// component lvl state for each element
  import { useState } from "react"

  const AddAction = () => {
    const[ text, setText] = useState('')
    const[ day, setDay] = useState('')
    const[ multiple, setMultiple] = useState(false)
 

  return (
   <form className="add-form">
        <div className="form-control">
            <label >Action</label>
            <input type="text" placeholder="Add Action" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label >Day & Time</label>
            <input type="text" placeholder="Add Day and Time" value={text} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label >Multiple Times</label>
            <input type="checkbox"  value={text} onChange={(e) => setMultiple(e.currentTarget.checked)} />
        </div>
        <input type="submit" value='Save Action' className="btn btn-block"/>
   </form>
  )
}


export default AddAction