const Card = (props: any) => {
  return (
    <div>
      <div className="bg-neutral-50 rounded-xl p-6 w-64">
        <div className="divide-y-2 divide-black">
          <h2 className="text-2xl text-black text-lg mb-2">{props.e.State}</h2>
          <h2 className="text-2xl text-neutral-400 font-bold text-sm mb-2 pt-2">
            Population: {props.e.Population}M
          </h2>
          <h2 className="text-2xl text-neutral-400 font-bold text-sm mb-2 pt-2">
            Jahr:{props.e.Year}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Card;
