import { Aside } from "../../components/dashboard/Aside";
import { Navbar } from "../../components/dashboard/Navbar";

export function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar />
      <div class="flex overflow-hidden bg-white pt-16">
        <Aside />
        <div
          class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          class="h-screen w-full bg-yellow-600 relative overflow-y-auto lg:ml-64"
        >
          {children}
        </div>
      </div>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
      <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
    </section>
  );
}

export default Dashboard;
