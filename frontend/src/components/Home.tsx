import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <ul className='App'>
        <li><NavLink  className="nav-bar-link" to="/create">Create</NavLink></li>
        {/* <li><NavLink className="nav-bar-link" to="/list">List</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/update">Update</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/sorted">Sorted</NavLink></li> */}
        {/* <li><NavLink className="nav-bar-link" to="/updatedList">Updated List</NavLink></li> */}
        <li><NavLink className="nav-bar-link" to="/sortedlist">SortedTable List</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/dropdown">Dropdown</NavLink></li>
      </ul>
    </div>
  )
}
