export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">&copy; 2024 LaptopBrand. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="#"
            className="mx-2 hover:text-gray-400">
            Privacy Policy
          </a>
          <a
            href="#"
            className="mx-2 hover:text-gray-400">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
