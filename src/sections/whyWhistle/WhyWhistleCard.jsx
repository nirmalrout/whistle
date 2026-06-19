function WhyWhistleCard({ item }) {
  return (
    <div className="why-card">
      <div className="why-card-image">
        <img src={item.image} alt={item.title} />
      </div>

      <div className="why-card-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default WhyWhistleCard;