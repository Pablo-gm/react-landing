import './pricing.scss'

function Pricing() {
    const data = [
        {
          id: 1,
          name: "Free",
          price: "$0.00",
          extra: 'Yep',
          button: 'button--outline',
          desc:
            "Free for small teams up to 12 members. All features included.",
        },
        {
          id: 2,
          name: "Professional",
          price: "$5.00",
          extra: 'user/month',
          button: 'button--light',
          desc:
            "For entrepreneurs who want to take their growing business to the next level.",
          featured: true,
        },
        {
          id: 3,
          name: "Organization",
          price: "Contact Us",
          extra: '*Special',
          button: 'button--primary',
          desc:
            "For organizations managing all their teams using meet.",
        },
      ];
      return (
        <div className="pricing" id="pricing">
          <h2 className="h1">Pricing</h2>
          <div className="pricing__container container">
            {data.map((d) => (
              <div key={d.id} className={d.featured ? "card featured" : "card"}>
                <div className="pricing__name">
                  {d.name}
                </div>
                <div className="pricing__price">
                  {d.price}
                </div>
                <div className="pricing__extra">{d.extra}</div>
                <div className="pricing__description">
                  {d.desc}
                </div>
                <a href="#" className={d.featured ? "button button--light" : "button " + d.button }>Start today</a>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Pricing
