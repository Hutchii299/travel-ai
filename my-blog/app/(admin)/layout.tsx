import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Page",
  description: "Generated all of your structured content here.",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default AdminLayout;
