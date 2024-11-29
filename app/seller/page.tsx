// import SellerDashboard from "@/components/SellerDashboard";
import SellerDashboard from "@/components/SellerDashboard";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SellerPage = async() => {
    const { userId } = await auth();
    if(!userId) redirect("/");

  return (
    <div className="min-h-screen flex"><SellerDashboard /></div>
  )
}
export default SellerPage