export const Footer = () => {
  return (
    <footer className="p-6 lg:fixed lg:bottom-0 lg:left-0">
      <div>
        <p className="text-sm text-gray-500 z-50">©{new Date().getFullYear()} Waku Blog.</p>
      </div>
    </footer>
  );
};
