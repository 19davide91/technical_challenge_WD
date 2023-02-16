function PhoneCardList(props) {
  const { name, manufacturer, imageFileName } = props;

  return (
    <div>
      {phone.name && (
        <>
          <h1>{phone.name}</h1>
          <h2>{phone.manufacturer}</h2>
          <img src={`images/${phone.imageFileName}`} />
          <p>Price: {phone.price}£</p>
          <p>{phone.description}</p>
          <p>{phone.processor}</p>
          <p>RAM: {phone.ram}GB</p>
        </>
      )}
    </div>
  );
}

export default PrankCardList;
