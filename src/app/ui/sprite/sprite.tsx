import { gottaCatchThemAll } from "@/app/lib/data";
import { Pokemon } from "@/app/lib/types";
import RegionBadge from "../region/region";
// import { useEffect } from "react";
// utilize use effect to render the pictures. 
// this should then communicate with the Region badge component
// 
export default  async function Sprite() {
    const data: Pokemon[] = await gottaCatchThemAll();

    return (
    <div>
      <RegionBadge />
      <div className="divider"></div>
      {data.map((pokemon: Pokemon) => (
        <div key={pokemon.id} className="avatar flex-col p-2 justify-center">
          <div className="ring-primary w-24 rounded-full ring ring-offset-2">
            <img src={pokemon.image}/>
          </div>
          <span className="badge align-center p-2">{pokemon.name}</span>
        </div>
        ))}
    </div>
  )
}; 