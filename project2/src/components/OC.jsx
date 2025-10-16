
export function Character({name, image, bio}) {
    return  ( <div className="character">
        <h2>{name}</h2>
        <img src={image} width="300px" />


        </div>)

}

