function Header({onSearchChange}){
    return (
       
         
        <div className= "headerr">
            <h1>CodeSnip</h1>
            <div className="searchbar">

                <input  className="search" type="search" placeholder="Search..." onChange={(e)=>onSearchChange(e.target.value)}></input>
               <i className="fa-solid fa-magnifying-glass"></i>
               <select>
                <option>All</option>
                <option>React</option>
            </select>
            </div>
            
            
            
            
        </div>
        
        
    )
}
export default Header;