const Sprite = async () => {
  // This component will handle the initial Image of the pokemon along with the Name of the Pokemon
  
    // const exampleMethod = await fetchexampleMethod();

  return (
    <button className="avatar">
      <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      </div>
      <p>Name</p>
    </button>
  )
};

export default Sprite;