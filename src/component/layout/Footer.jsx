import Logo from "@/assets/images/logo.webp";
import { Instagram, Facebook } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black">
            <div className="max-w-7xl mx-auto md:px-10 lg:px-6 px-4 py-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Logo & About */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <Image src={Logo} alt="Logo" className="w-20 md:w-23 -ml-2" />
                        <span className="text-2xl font-bold text-secondary"></span>
                    </div>
                    <p className="mt-4 text-white text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum molestiae nulla natus, aliquid dolore dolorum quam, optio quo aperiam ea iusto nobis cum sapiente nam at. A expedita nobis voluptatem.
                    </p>
                    <div className="mt-5 flex flex-row gap-3">
                        <Link href="https://www.instagram.com"
                            className="flex items-center justify-center w-10 h-10 rounded-full text-white shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                        >
                            <Instagram className="w-6 h-6" />
                        </Link>
                        <Link href="#"
                            className="flex items-center justify-center w-10 h-10 rounded-full text-white shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                        >
                            <Facebook className="w-6 h-6" />
                        </Link>
                    </div>
                </div>

                {/* Links */}
                <div className="text-white">
                    <p className="text-lg font-semibold mb-2 inline-block">
                        Quick Links
                    </p>
                    <ul className="mt-3 space-y-2 text-white ">
                        <li>
                            <Link
                                href="/"
                                className={({ isActive }) =>
                                    isActive ? "tefont-medium" : ""
                                }
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className={({ isActive }) =>
                                    isActive ? " font-medium" : ""
                                }
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/courses"
                                className={({ isActive }) =>
                                    isActive ? "font-medium" : ""
                                }
                            >
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/career"
                                className={({ isActive }) =>
                                    isActive ? "font-medium" : ""
                                }
                            >
                                Career
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className={({ isActive }) =>
                                    isActive ? "font-medium" : ""
                                }
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={({ isActive }) =>
                                    isActive ? "font-medium" : ""
                                }
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Products */}
                <div className="text-white">
                    <p className="text-lg font-semibold mb-2 inline-block">
                        Online Plateforms
                    </p>
                    <ul className="mt-3 space-y-2">
                        <li><Link href="/l" className="">Internships
                        </Link></li>
                        <li><Link href="/h" className="">Hire From Us</Link></li>
                        <li><Link href="/h" className="">Terms and Conditions</Link></li>
                        <li><Link href="/h" className="">Privacy Policy</Link></li>
                        <li><Link href="/hs" className="">Cancellation and Refund Policy</Link></li>
                        <li><Link href="/h" className="">Shipping and Delivery Policy</Link></li>
                        <li><Link href="/h" className="">links</Link></li>
                    </ul>
                </div>

                <div className="text-white">
                    <p className="text-lg font-semibold mb-2 inline-block">
                        Contact Us
                    </p>
                    <p className="mt-3 ">Chhapi, Gujarat</p>
                    <p className="">abegining@gmail.com</p>

                    <div className="mt-3 relative">

                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white text-center py-3 md:py-6 text-white text-sm">
                © {new Date().getFullYear()} A Beginning. All rights reserved.
            </div>
        </footer>
    );
}


