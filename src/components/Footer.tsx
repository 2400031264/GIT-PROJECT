export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-4 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600">
          © {currentYear} Little Lemon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
