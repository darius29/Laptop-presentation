import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full bg-white shadow-lg z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link href="/">LaptopBrand</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#performance">Performance</Link>
          </li>
          <li>
            <Link href="#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="#video">Video</Link>
          </li>
          <li>
            <Link href="#cta">Buy Now</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
