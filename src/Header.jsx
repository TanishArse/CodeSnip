function Header({onSearchChange,onTagChange,tags=[]}){
    return (
       
         
        <div className= "headerr">
            <h1>CodeSnip</h1>
            <div className="searchbar">

                <input  className="search" type="search" placeholder="Search..." onChange={(e)=>onSearchChange(e.target.value)}></input>
               <i className="fa-solid fa-magnifying-glass"></i>
               <select onChange={(e)=>onTagChange(e.target.value)}>
               
                {tags.map((tag)=>
                <option key={tag} value={tag}>
                    {tag}
                </option>)}
                
            </select>
            </div>
            
            
            
            
        </div>
        
        
    )
}
export default Header;