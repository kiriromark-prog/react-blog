function Header(props) {

   return(
    <header>
        <h1>Everfresh</h1>
        <p> {props.links}</p>
        
        <hr />
    </header>
    
   )
}

export default Header