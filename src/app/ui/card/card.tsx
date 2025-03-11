const Card = async () => { 
  // This Component will display the pokedex entry. 
  // picture of the pokemon, pokedex entry, and type(s)

  // Marked as async to indicate a Server Component
  // Any data fetching or server-side logic can go here.
  // For example, you could fetch the image URL or card title from a database.

  // Example (replace with your actual data fetching):
  // const imageUrl = await fetchImageUrl();
  // const cardTitle = await fetchCardTitle();

  const imageUrl = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp";
  const cardTitle = "Card Title";

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={imageUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {cardTitle}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Card;