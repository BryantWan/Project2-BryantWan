
export function Character({name, image, bio}) {
    return  ( <div className="character">
        <h2>{name}</h2>
        <img src={image} altname={name}/>


        </div>)

}

