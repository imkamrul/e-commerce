import OrderList from "./OrderList";
import ProfileTitle from "./ProfileTitle";

const UserOrder = () => {
  return (
    <>
      <ProfileTitle title="Recent Orders" />
      <OrderList />
    </>
  );
};

export default UserOrder;
