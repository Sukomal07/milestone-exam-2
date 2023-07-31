import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="input-box">
          <input type="text" placeholder='Create a todo' id='input' />
          <button className='add'>Add</button>
        </div>
        <div className="todo-container">
          <div className="todos">
            <div className="heading">
              <span className="todo-number">1.</span>
              <h1 className="todo-title">Create Project</h1>
            </div>
            <span className="todo-status">Status:Pending</span>
            <div className="todo-btn">
              <button className="update-status">Update Status</button>
              <button className="remove">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
