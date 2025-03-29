export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-blue/5 to-primary-purple/5">
      {children}
    </div>
  );
} 