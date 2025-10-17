

export function Characterbio({name}) {
    const characterBios = {
        Yumi: "Leader of Blue Rifle Corps. A strategist excelling in infantry tactics. Always inovating new tactics, conventional or unconventional. Utilizes artillery and engineers to support the frontlines.",
        Dongmei: "Chief of the Blue Rifle Corps Air Force Division. Air superiority, bomber interception, close air support, or carpet bombing, Dongmei does it all. Taking to the skies and saining down fire is what she does best.",
        Amelia: "Engineering student, untrained civilian survivalist. Has been hiding out in her fortified apartment complex since the zombie apocalypse begun, and unlucky for her, her university is right at the epicenter. Doesn't help that it's directly next to a virology lab...",
    };

    return (
        <div className="character">
            {/* Display bio based on the name prop */}
            {name && characterBios[name] && <p>{characterBios[name]}</p>}
        </div>
    );
        

}