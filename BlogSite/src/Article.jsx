
function Food(props){
    return(
        <article>
            
            
            <div>
                <p>Name: {props.name}</p>
                <p><picture><img src={props.image} alt={props.name} /></picture></p>
                <p>Description: {props.description}</p>
                <p>Price: ${props.price.toFixed(2)}</p>
            </div>
            <hr />
        </article>

    );
}

export default Food