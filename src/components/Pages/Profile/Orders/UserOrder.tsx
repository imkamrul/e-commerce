import ProfileTitle from "../ProfileTitle";
import OrderList from "./OrderList";

const UserOrder = () => {
  return (
    <>
      <ProfileTitle title="Recent Orders" />
      <OrderList />
    </>
  );
};

export default UserOrder;
