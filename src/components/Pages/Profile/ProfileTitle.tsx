"use client";
import { ProfileTitleProps } from "@/components/Common/interface-types/Index";
import { useRouter } from "next/navigation";

const ProfileTitle: React.FC<ProfileTitleProps> = ({ title, btn }) => {
  const router = useRouter();
  return (
    <div className="bg-[white] rounded font-semibold py-[30px] px-10 mb-[10px] flex justify-between items-center">
      <p className="text-[#303030] text-xl ">{title || "My Profile"}</p>
      {btn?.link ? (
        <button
          onClick={() => router?.push(`/${btn?.link}`)}
          className="text-[#214497] text-lg hover:underline transform transition-transform hover:scale-105 font-medium"
        >
          {btn?.text}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfileTitle;
