import Image from "next/image";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="relative h-screen bg-neutral-magnolia grid grid-cols-12 md:items-center px-6 md:px-0">
      {/* Mobile BG Image */}
      <Image
        src="/assets/images/bg-sidebar-mobile.svg"
        alt="Background sidebar mobile"
        height={300}
        width={300}
        priority
        className="absolute top-0 left-0 right-0 w-full z-0 md:hidden"
      />
      {/* Form Layout */}
      <div className="bg-neutral-milk md:col-start-3 col-span-12 md:col-span-8 h-[calc(100vh-40%)] xl:h-[calc(100vh-25%)] mt-[30%] md:mt-0 rounded-xl z-10">
        <div className="h-full md:grid grid-cols-8 py-7 px-6 md:p-4">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block md:bg-[url(/assets/images/bg-sidebar-desktop.svg)] rounded-lg w-9/12 md:col-span-3"></aside>
          {/* Main Routes */}
          <main className="col-start-4 col-span-5">{children}</main>
        </div>
      </div>
    </section>
  );
};

export default MainLayout;
