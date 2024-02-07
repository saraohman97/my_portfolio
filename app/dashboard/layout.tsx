import getCurrentUser from "@/actions/getCurrentUser";
import DashboardNavbar from "@/components/dashboard-navbar";
import Title from "@/components/ui/title";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";


interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = async ({
  children,
}) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/");
  }
  
  if (currentUser.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div className="p-10">
      <Title title="Dashboard" />
      <DashboardNavbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
