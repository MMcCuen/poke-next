import { gottaCatchThemAll } from "@/app/lib/data";
import { Pokemon } from "@/app/lib/types";
import RegionBadge from "../region/region";

export default  async function Sprite() {
    const data: Pokemon[] = await gottaCatchThemAll();
  return (
    <div>
      <RegionBadge />
    {data.map((pokemon: Pokemon) => (
      <button key={pokemon.id} className="avatar">
        <div className="btn ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
          <img src={pokemon.image}/>
        </div>
        <h2>{pokemon.name}</h2>
        {/* <h2>{pokemon.type}</h2> */}
      </button>
      ))}
      </div>
  )
}; 