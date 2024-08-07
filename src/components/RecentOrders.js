import CustomerOrders from "./CustomerOrders";
import Stars from "./Stars";

const RecentOrders = () => {
  return (
    <section className="CustomOrderSection">
      <div className="OrdersParent">
        <CustomerOrders></CustomerOrders>
      </div>
      <div className="CustomReviews">
        <div className="InnerRiviewParent">
          <h4>Customer's Feedback</h4>
          <div className="customReviewsdiv">
            <div className="CustomerInfo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
              </svg>
              <p>Jenny Wilson</p>
            </div>
            <Stars></Stars>
            <div className="Content">
            “I’ve been looking forward to trying burger over greens, and was so glad that I did! The food was so delicious and the service was really great, too!”
            </div>
          </div>
          <div className="customReviewsdiv">
            <div className="CustomerInfo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
              </svg>
              <p>Dannie Russel</p>
            </div>
            <Stars></Stars>
            <div className="Content">
            This is always our breakfast stop before heading home from vacation. Always delicious. Always great service. Always worth the stop.”
            </div>
          </div>
          <div className="customReviewsdiv">
            <div className="CustomerInfo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
              </svg>
              <p>Dannie Russel</p>
            </div>
            <Stars></Stars>
            <div className="Content">
            “Breakfast was delicious. Like a good homestyle country savory breakfast (and Im from the south, thats saying a lot)… Enjoyed the whole experience and definitely recommend this place for a place to eat on the cape.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentOrders;
