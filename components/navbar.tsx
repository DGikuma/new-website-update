"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, SearchIcon, Logo } from "@/components/icons";

// Animation variants for dropdowns
const submenuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

// Fixed MobileMegaMenu with accordion behavior
const MobileMegaMenu = ({ megaMenus, setOpenMenu }: any) => {
  const [openTop, setOpenTop] = useState<string | null>(null);
  const [openColumns, setOpenColumns] = useState<{ [key: string]: number | null }>({});

  const topLevelItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services", megaItems: megaMenus.Services },
    { label: "Products", href: "/products", megaItems: megaMenus.Products },
    { label: "Claims", href: "/claims", megaItems: megaMenus.Claims },
    { label: "Leadership", href: "/our-leadership", megaItems: megaMenus.Leadership },
    { label: "About Us", href: "/about-us", megaItems: megaMenus.AboutUs },
  ];

  return (
    <div className="mx-4 mt-2 flex flex-col gap-2">
      {topLevelItems.map((item) => {
        const mega = !!item.megaItems;

        return (
          <div key={item.label} className="flex flex-col">
            {/* Top-level button */}
            <button
              onClick={() => setOpenTop(openTop === item.label ? null : item.label)}
              className={clsx(
                "flex justify-between items-center w-full px-4 py-2 text-left text-foreground bg-default-100 rounded-md",
                mega ? "font-semibold" : "font-medium"
              )}
            >
              {item.label}
              {mega && (
                <span
                  className={clsx(
                    "transition-transform duration-300",
                    openTop === item.label ? "rotate-180" : "rotate-0"
                  )}
                >
                  ▼
                </span>
              )}
            </button>

            {/* Mega menu columns */}
            {mega && (
              <AnimatePresence>
                {openTop === item.label && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col gap-1 mt-1 pl-4 border-l border-default-200"
                  >
                    {item.megaItems.map((col: any, colIdx: number) => (
                      <div key={colIdx} className="flex flex-col gap-1">
                        {/* Column button */}
                        <button
                          onClick={() =>
                            setOpenColumns((prev) => ({
                              ...prev,
                              [item.label]:
                                prev[item.label] === colIdx ? null : colIdx,
                            }))
                          }
                          className="flex justify-between items-center px-2 py-1 rounded-md text-sm font-semibold text-primary bg-default-100"
                        >
                          {col.title}
                          <span
                            className={clsx(
                              "transition-transform duration-300",
                              openColumns[item.label] === colIdx
                                ? "rotate-180"
                                : "rotate-0"
                            )}
                          >
                            ▼
                          </span>
                        </button>

                        {/* Column links */}
                        <AnimatePresence>
                          {openColumns[item.label] === colIdx && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="flex flex-col gap-1 mt-1 pl-4"
                            >
                              {col.links.map((link: any) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="px-2 py-1 rounded hover:bg-default-200 transition-colors text-sm"
                                  onClick={() => setOpenMenu(null)}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            )}

            {/* Regular menu item */}
            {!mega && (
              <NavbarMenuItem>
                <Link
                  color="foreground"
                  href={item.href}
                  size="lg"
                  onClick={() => setOpenMenu(null)}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Close menus on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{ inputWrapper: "bg-default-100", input: "text-sm" }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />}
      type="search"
    />
  );

  const retrieveInput = (
    <Input
      aria-label="Retrieve"
      classNames={{ inputWrapper: "bg-default-100", input: "text-sm" }}
      placeholder="Retrieve Policy / ID..."
      type="text"
    />
  );

  const megaMenus = {
    Services: [
      {
        title: "Health & Life",
        links: [
          { label: "Health Insurance", href: "/services/health" },
          { label: "Life Insurance", href: "/services/life" },
          { label: "Travel Insurance", href: "/services/travel" },
        ],
      },
      {
        title: "Property & Business",
        links: [
          { label: "Property Insurance", href: "/services/property" },
          { label: "Business Insurance", href: "/services/business" },
          { label: "Auto Insurance", href: "/services/auto" },
        ],
      },
      {
        title: "Financial & Education",
        links: [
          { label: "Education Insurance", href: "/services/education" },
          { label: "Retirement Plans", href: "/services/retirement" },
          { label: "Other Plans", href: "/services/other" },
        ],
      },
    ],
    Products: [
      {
        title: "Health & Life",
        links: [
          { label: "Health Insurance", href: "/products/health" },
          { label: "Life Insurance", href: "/products/life" },
          { label: "Travel Insurance", href: "/products/travel" },
        ],
      },
      {
        title: "Property & Business",
        links: [
          { label: "Property Insurance", href: "/products/property" },
          { label: "Business Insurance", href: "/products/business" },
          { label: "Auto Insurance", href: "/products/auto" },
        ],
      },
      {
        title: "Financial & Education",
        links: [
          { label: "Education Insurance", href: "/products/education" },
          { label: "Retirement Plans", href: "/products/retirement" },
          { label: "Other Plans", href: "/products/other" },
        ],
      },
    ],
    Claims: [
      {
        title: "File a Claim",
        links: [
          { label: "Health Claims", href: "/claims/health" },
          { label: "Life Claims", href: "/claims/life" },
          { label: "Property Claims", href: "/claims/property" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Claims Process", href: "/claims/process" },
          { label: "FAQs", href: "/claims/faqs" },
          { label: "Contact Support", href: "/claims/contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Download Forms", href: "/claims/forms" },
          { label: "Policy Information", href: "/claims/policy-info" },
          { label: "Customer Stories", href: "/claims/stories" },
        ],
      },
    ],
    Leadership: [
      {
        title: "Our Team",
        links: [
          { label: "Board of Directors", href: "/our-leadership#board" },
          { label: "Executive Team", href: "/our-leadership#executive" },
          { label: "Advisors", href: "/our-leadership#advisors" },
        ],
      },
      {
        title: "Careers",
        links: [
          { label: "Why Work With Us", href: "/careers#why-us" },
          { label: "Open Positions", href: "/careers#open-positions" },
          { label: "Internships", href: "/careers#internships" },
        ],
      },
      {
        title: "Culture & Values",
        links: [
          { label: "Our Values", href: "/our-leadership#values" },
          { label: "Diversity & Inclusion", href: "/our-leadership#diversity" },
          { label: "Community Engagement", href: "/our-leadership#community" },
        ],
      },
    ],
    AboutUs: [
      {
        title: "Company", links: [
          { label: "Our Story", href: "/about#story" },
          { label: "Mission & Vision", href: "/about#mission-vision" },
          { label: "Careers", href: "/careers" },
        ],
      },
      {
        title: "Legal", links: [
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Terms of Service", href: "/terms-of-service" },
          { label: "Regulatory Info", href: "/regulatory-info" },
          { label: "Sitemap", href: "/sitemap" },
        ],
      },
      {
        title: "Get in Touch", links: [
          { label: "Contact Form", href: "/contact-us#form" },
          { label: "Customer Support", href: "/contact-us#support" },
          { label: "Office Locations", href: "/contact-us#locations" },
        ],
      },
      {
        title: "Follow Us", links: [
          { label: "Facebook", href: "https://facebook.com/birdviewinsurance" },
          { label: "Twitter", href: "https://twitter.com/birdviewinsure" },
          { label: "LinkedIn", href: "https://linkedin.com/company/birdviewinsurance" },
          { label: "Instagram", href: "https://instagram.com/birdviewinsurance" },
          { label: "YouTube", href: "https://youtube.com/birdviewinsurance" },
          { label: "Tiktok", href: "https://tiktok.com/@birdviewinsurance" },
        ],
      },
      {
        title: "Resources", links: [
          { label: "Blog", href: "/blog" },
          { label: "Newsroom", href: "/newsroom" },
          { label: "FAQs", href: "/faqs" },
        ],
      },
    ],
  };

  return (
    <>
      {/* Topbar */}
      < div className="w-full bg-primary text-white text-sm px-6 py-2 flex items-center relative z-50" >
        <div className="flex flex-wrap gap-4 justify-center w-full">
          {["Newsroom", "Careers", "Blog", "Complaints", "Contact Us"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:underline text-white"
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* Portals dropdown */}
        < div className="flex items-center gap-4 relative ml-auto" ref={menuRef} >
          <Button
            onPress={() => toggleMenu("portals")}
            className="bg-danger text-white font-semibold px-4 py-2 rounded-md transition-all duration-300"
          >
            Portals
            <span
              className={clsx(
                "inline-block ml-2 transition-transform duration-300",
                openMenu === "portals" ? "rotate-180" : "rotate-0"
              )}
            >
              ▼
            </span>
          </Button>

          <AnimatePresence>
            {openMenu === "portals" && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={submenuVariants}
                className="absolute right-0 top-full mt-2 z-50 bg-white rounded-lg p-2 shadow-lg min-w-[220px]"
              >
                {[
                  { name: "Agent Portal", path: "/agent-portal" },
                  { name: "Broker Portal", path: "/broker-portal" },
                  { name: "Provider Portal", path: "/provider-portal" },
                  { name: "Intermediary Registration", path: "/intermediary-registration" },
                  { name: "Agent Registration", path: "/agent-registration" },
                  { name: "Group Registration", path: "/group-registration" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="px-3 py-2 rounded-md cursor-pointer text-primary hover:text-danger hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      router.push(item.path);
                      setOpenMenu(null);
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div >
      </div >

      {/* HeroUI Navbar */}
      < HeroUINavbar
        maxWidth="xl"
        position="sticky"
        className="bg-danger text-white shadow-md z-50"
      >
        {/* Left side (brand + nav items) */}
        < NavbarContent className="basis-1/5 md:basis-full" justify="start" >
          <NavbarBrand as="li" className="max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-2 bg-white px-2 py-1 rounded-md shadow-md"
              href="/"
            >
              <img
                src="/images/logo1.png"
                alt="Birdview Logo"
                className="h-8 w-auto"
              />
            </NextLink>
          </NavbarBrand>


          {/* Desktop Nav Items */}
          <ul className="hidden lg:flex gap-6 justify-start ml-4 relative">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services", mega: true, megaItems: megaMenus.Services },
              { label: "Products", href: "/products", mega: true, megaItems: megaMenus.Products },
              { label: "Claims", href: "/claims", mega: true, megaItems: megaMenus.Claims },
              { label: "Leadership", href: "/our-leadership", mega: true, megaItems: megaMenus.Leadership },
              { label: "About Us", href: "/about", mega: true, megaItems: megaMenus.AboutUs },
            ].map((item) => {
              const isActive = pathname?.startsWith(item.href);
              return (
                <NavbarItem key={item.href} className="relative group">
                  <button
                    onClick={() => item.mega && toggleMenu(item.label)}
                    className={clsx(
                      "flex items-center gap-1 text-white relative transition-colors duration-300",
                      isActive ? "font-semibold" : "font-medium"
                    )}
                  >
                    {item.label}
                    {item.mega && (
                      <span
                        className={clsx(
                          "inline-block transition-transform duration-300",
                          openMenu === item.label ? "rotate-180" : "rotate-0"
                        )}
                      >
                        ▼
                      </span>
                    )}
                    <span
                      className={clsx(
                        "absolute left-0 -bottom-1 h-1 bg-white transition-all duration-300",
                        isActive ? "w-full" : "group-hover:w-full"
                      )}
                    />
                    {isActive && (
                      <span className="absolute top-0 left-0 h-1 w-full bg-white" />
                    )}
                  </button>

                  {/* Desktop Mega Menu */}
                  <AnimatePresence>
                    {item.mega && openMenu === item.label && (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.4 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 bg-black z-10"
                          onClick={() => setOpenMenu(null)}
                        />
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25 }}
                          className="fixed left-0 top-full mt-2 w-screen bg-white text-gray-900 shadow-lg p-8 grid grid-cols-3 gap-8 z-20"
                        >
                          {item.megaItems.map((col, idx) => (
                            <div key={idx} className="flex flex-col gap-2">
                              <h4 className="font-semibold text-primary">{col.title}</h4>
                              {col.links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="hover:text-primary transition"
                                  onClick={() => setOpenMenu(null)}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </NavbarItem>
              );
            })}
          </ul>
        </NavbarContent >

        {/* Right side */}
        < NavbarContent className="hidden md:flex basis-1/5 md:basis-full" justify="end" >
          <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
          <NavbarItem className="hidden lg:flex">{retrieveInput}</NavbarItem>
          <NavbarItem className="hidden md:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent >

        {/* Mobile menu toggle */}
        < NavbarContent className="md:hidden basis-1 pl-4" justify="end" >
          <Link isExternal aria-label="Github" href="https://github.com/">
            <GithubIcon className="text-white" />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent >

        {/* Mobile menu */}
        < NavbarMenu >
          <MobileMegaMenu megaMenus={megaMenus} setOpenMenu={setOpenMenu} />
        </NavbarMenu >
      </HeroUINavbar >
    </>
  );
};
