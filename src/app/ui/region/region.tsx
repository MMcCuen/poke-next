import { getPokemonGeneration } from "@/app/lib/data"
import { PokemonGeneration } from "@/app/lib/types"

export default async function RegionBadge() {
  const data = await getPokemonGeneration();
  
  return (
    <div>
     {data.map((region: PokemonGeneration) => (
      <button key={region} className="btn badge badge-outline badge-neutral">{region}</button>
      ))}
    </div>
  )
}