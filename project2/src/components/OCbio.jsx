

export function Characterbio({name, bio}) {
    return  ( <div className="character">
        <p>{name}</p>
        <img src={image} width="300px" />

        {name === "Yumi" && <p>{bio}</p>}
        </div>)

}