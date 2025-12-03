

export function Characterbio({name}) {
    const characterBios = {
        Yumi: "Leader of Blue Rifle Corps. A strategist excelling in infantry tactics. Also possesses limited knowledge for air and naval tactics, mainly close air support and river/coastal defense. Always inovating new tactics, conventional or unconventional. Utilizes artillery and engineers to support the frontlines.",
        Dongmei: "Chief of the Blue Rifle Corps Air Force Division. Air superiority, bomber interception, close air support, carpet bombing, or naval bombing, Dongmei does it all. She also has her paratrooper group, often supporting her sister in operations. Taking to the skies and raining down fire is what she does best. Also an ace pilot herself with a private collection of planes.",
        Blue: "The Police Commissioner of the Blue Rifle Corps Military Police. Counterterrorism, counterinsurgency, and counterintelligence is what she does best. Was also a highly trained detective, investigator, and SWAT officer. Father is a law professor, mother is a criminal defense lawyer.",
        Sophie: "Wait, is she part of the Blue Rifle Corps? That uniform isn't standard issue... Hmmm... \n Anyways... Sophie Yazov is part of the Siberian Black League, and hellbent on destroying all of Germania. I don't know why, but she wants raze Germania to the ground like what they did to Moscow. Or is it just an act?",
        Amelia: "Engineering student and untrained civilian survivalist. Has been hiding out in her fortified apartment complex since the zombie apocalypse begun, and unlucky for her, her university is right at the epicenter. Doesn't help that it's directly next to a virology lab...",
    };

    return (
        <div className="character">
            {/* Display bio based on the name prop */}
            <h2>Bio:</h2>
            {name && characterBios[name] && <p>{characterBios[name]}</p>}
        </div>
    );
        

}