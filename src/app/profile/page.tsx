import Address from "@/components/Pages/Profile/Address";
import OrderList from "@/components/Pages/Profile/OrderList";
import PasswordChange from "@/components/Pages/Profile/PassowordChange";
import ProfileTitle from "@/components/Pages/Profile/ProfileTitle";
import ProfileUpdate from "@/components/Pages/Profile/ProfileUpdate";
import SingleOrder from "@/components/Pages/Profile/SingleOrder";
import UserInfo from "@/components/Pages/Profile/UserInfo";

const Page = () => {
  return (
    <>
      <section className="container flex flex-warp py-[70px]">
        <div className="w-3/12">
          <UserInfo />
        </div>
        <div className="w-9/12 pl-6">
          <ProfileTitle
            title="Address Book"
            btn={{ link: "/", text: "Edit" }}
          />
          <Address />
          <ProfileTitle
            title="Recent Orders"
            btn={{ link: "/", text: "View All" }}
          />
          <OrderList />
          <SingleOrder />
          <ProfileTitle title="Edit Personal Information" />
          <ProfileUpdate />
          <ProfileTitle title="Password Change" />
          <PasswordChange />
        </div>
      </section>
    </>
  );
};

export default Page;
