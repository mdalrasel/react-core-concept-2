import { useState } from 'react';

const Team = () => {
    const [team, setTeam] = useState(11);
    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    const handleRemove = ()=>{
        setTeam(team-1)
    }
    return (
        <div>
            <h3>Players : {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default Team;