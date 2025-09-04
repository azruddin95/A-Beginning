import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, MapPin, Mail } from "lucide-react";
import Logo from "@/assets/images/logo.webp";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const menuRef = useRef(null);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
                setOpenDropdown(null);
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <header className="w-full bg-white shadow-md">
            {/* Top Bar */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-between px-4 sm:px-6 py-3 bg-white">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center space-x-3 justify-center lg:justify-start"
                >
                    <Image src={Logo} className="w-[60px] md:w-[70px] hidden lg:block" alt="Logo" />
                </Link>

                <div className="hidden lg:flex items-center justify-end space-x-4 xl:space-x-6">
                    {/* Location */}
                    <div className="flex items-center space-x-2">
                        <span className="p-2 rounded-full bg-gradient-to-r from-primary to-third text-white">
                            <MapPin size={16} className="lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px]" />
                        </span>
                        <div>
                            <p className="text-sm">Location</p>
                            <p className="text-sm font-medium">Chhapi, Gujarat</p>
                        </div>
                    </div>
                    {/* Email */}
                    <div className="flex items-center space-x-2">
                        <span className="p-2 rounded-full bg-gradient-to-r from-third to-primary text-white">
                            <Mail size={16} className="lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px]" />
                        </span>
                        <div>
                            <p className="text-sm">Email</p>
                            <p className="text-sm font-medium">abegining@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <nav className="bg-white lg:px-6 lg:py-4 sticky top-0">
                <div className="max-w-7xl mx-auto -mt-6 lg:mt-0 lg:shadow-2xl flex items-center justify-between px-5 sm:px-6 py-5 sm:py-6 lg:rounded-md">

                    <div className="flex items-center justify-between w-full lg:hidden">
                        <Link href="/">
                            <Image src={Logo} alt="Logo" className="w-[60px] sm:w-[50px] md:w-[55px]" />
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100"
                            aria-label="Toggle menu"
                        >
                            <Menu size={27} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                        </button>
                    </div>

                    {/* Desktop Links */}
                    <ul className="hidden lg:flex items-center space-x-4 xl:space-x-6 font-medium text-sm xl:text-base">
                        <li><Link href="/" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-third transition">Home</Link></li>
                        <li><Link href="/aboutus" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-third transition">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-third transition">Services</Link></li>
                        <li><Link href="/courses" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-third transition">Courses</Link></li>

                        {/* Career Dropdown */}
                        <li className="relative group cursor-pointer">
                            <div className="flex items-center space-x-1">
                                <Link href="/career" className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-third">Career</Link>
                                <ChevronDown size={14} className="xl:w-4 xl:h-4 transition-transform duration-300 group-hover:rotate-180" />
                            </div>
                            <ul className="absolute left-0 mt-2 w-36 xl:w-40 bg-white shadow-md rounded-md max-h-0 overflow-hidden opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-300">
                                <li><Link href="/career/jobs" className="block px-3 xl:px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-primary hover:to-third hover:text-white">Jobs</Link></li>
                                <li><Link href="/career/opportunities" className="block px-3 xl:px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-third hover:to-primary hover:text-white">Opportunities</Link></li>
                            </ul>
                        </li>

                        {/* Internship Dropdown */}
                        <li className="relative group cursor-pointer">
                            <div className="flex items-center space-x-1">
                                <Link href="/internship" className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-third">Internships</Link>
                                <ChevronDown size={14} className="xl:w-4 xl:h-4 transition-transform duration-300 group-hover:rotate-180" />
                            </div>
                            <ul className="absolute left-0 mt-2 w-44 xl:w-48 bg-white shadow-md rounded-md max-h-0 overflow-hidden opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-300">
                                <li><Link href="/internship/web-development" className="block px-3 xl:px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-primary hover:to-third hover:text-white">Web Development</Link></li>
                                <li><Link href="/internship/data-science" className="block px-3 xl:px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-third hover:to-primary hover:text-white">Data Science</Link></li>
                                <li><Link href="/internship/ai-ml" className="block px-3 xl:px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-primary hover:to-third hover:text-white">AI & ML</Link></li>
                            </ul>
                        </li>

                        <li><Link href="/blog" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-third transition">Blog</Link></li>
                        <li><Link href="/contactus" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-third transition">Contact Us</Link></li>
                    </ul>

                    {/* Desktop Apply Button */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link href="/" className="btn-primary">Apply Now for Internship</Link>
                    </div>
                </div>

                <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)}></div>

                {/* Mobile & Tablet Menu */}
                <div
                    ref={menuRef}
                    className={`fixed top-0 left-0 h-full w-72 sm:w-80 md:w-96 bg-white shadow-lg z-50 flex flex-col transform transition-all duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                        }`}
                >
                    {/* Mobile & Tablet Header */}
                    <div className="flex justify-between items-center px-4 sm:px-6 py-5 sm:py-6 border-b border-gray-200">
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            <Image src={Logo} className="w-[50px] sm:w-[50px] md:w-[55px]" alt="Logo" />
                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-lg transition-colors duration-200"
                            aria-label="Close menu"
                        >
                            <X size={26} className="sm:w-6 sm:h-6" />
                        </button>
                    </div>

                    {/* Mobile & Tablet Links */}
                    <div className="flex-1 overflow-y-auto">
                        <ul className="flex flex-col p-4 sm:p-6 space-y-1 font-medium">
                            <li>
                                <Link
                                    href="/"
                                    onClick={() => setIsOpen(false)}
                                    className="block py-3 px-2 rounded-lg transition-colors duration-200 sm:text-base"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/aboutus"
                                    onClick={() => setIsOpen(false)}
                                    className="block py-3 px-2 rounded-lg transition-colors duration-200 sm:text-base"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    onClick={() => setIsOpen(false)}
                                    className="block py-3 px-2 rounded-lg transition-colors duration-200 sm:text-base"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/courses"
                                    onClick={() => setIsOpen(false)}
                                    className="block py-3 px-2 rounded-lg transition-colors duration-200 sm:text-base"
                                >
                                    Courses
                                </Link>
                            </li>

                            {/* Career Dropdown */}
                            <li>
                                <button
                                    className="flex items-center justify-between w-full py-3 px-2 rounded-lg transition-colors duration-200 sm:text-base"
                                    onClick={() => toggleDropdown("career")}
                                >
                                    <span>Career</span>
                                    <ChevronDown
                                        size={14}
                                        className={`sm:w-4 sm:h-4 transform transition-transform duration-300 ${openDropdown === "career" ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === "career" ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                                    }`}>
                                    <ul className="ml-4 mt-1 space-y-1">
                                        <li>
                                            <Link
                                                href="/career/jobs"
                                                onClick={() => setIsOpen(false)}
                                                className="block py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                Jobs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/career/opportunities"
                                                onClick={() => setIsOpen(false)}
                                                className="block py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                Opportunities
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            {/* Internship Dropdown */}
                            <li>
                                <button
                                    className="flex items-center justify-between w-full py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 sm:text-base"
                                    onClick={() => toggleDropdown("internship")}
                                >
                                    <span>Internships</span>
                                    <ChevronDown
                                        size={14}
                                        className={`sm:w-4 sm:h-4 transform transition-transform duration-300 ${openDropdown === "internship" ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === "internship" ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                    }`}>
                                    <ul className="ml-4 mt-1 space-y-1">
                                        <li>
                                            <Link
                                                href="/internship/web-development"
                                                onClick={() => setIsOpen(false)}
                                                className="block py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                Web Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/internship/data-science"
                                                onClick={() => setIsOpen(false)}
                                                className="block py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                Data Science
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/internship/ai-ml"
                                                onClick={() => setIsOpen(false)}
                                                className="block py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                AI & ML
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <Link
                                    href="/blog"
                                    onClick={() => setIsOpen(false)}
                                    className="block py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 sm:text-base"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contactus"
                                    onClick={() => setIsOpen(false)}
                                    className="block py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 sm:text-base"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>

                        {/* Mobile & Tablet Apply Button */}
                        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                            <button className="btn-primary">Apply Now for Internship</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}   