import React, { useEffect, useState, useContext } from "react";

import Web3Status from "../Web3Status";

import MenuIcon from "../Icons/MenuIcon";
import CloseIcon from "../Icons/CloseIcon";
import { formatBalance, shortenAddress } from "functions/format";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import useBalances from "hooks/useBalance";
import Link from "next/link";

interface NavbarProps {}

const Navbar = (props: NavbarProps): JSX.Element => {
  const MobileNavbar = () => {
    return (
      <div className="MobileNavbar">
        <ul className="MobileNavbar__links bgBlue">
          <div>
            <li className="MobileNavbar__menuLink ">
              <Link href="/#about">ABOUT</Link>
            </li>
            <li className="MobileNavbar__menuLink">
              <Link href="/#roadmap">ROADMAP</Link>
            </li>
            <li className="MobileNavbar__menuLink">
              <Link href="/#faq">FAQ</Link>
            </li>
          </div>
          <div className="MobileNavbar__social-links">
            <Link href="https://discord.gg/2SqTufhKeU">
              <img alt="" src="/icons/discord.svg" />
            </Link>
            <Link href="https://twitter.com/cryptopumpnft">
              <img alt="" src="/icons/twitter.svg" />
            </Link>
            <Link href="https://www.instagram.com/cryptopumpsnft">
              <img alt="" src="/icons/instagram.svg" />
            </Link>
          </div>
        </ul>
      </div>
    );
  };

  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const { library, accounts, account, connector, chainId } =
    useActiveWeb3React();
  const balances = useBalances(library, accounts);
  return (
    <nav className="Navbar">
      <div className="px-5 Navbar__inner Main__Margin lg:px-4">
        <div className="py-1">
          <img src="/img/logo.png" className="h-20" alt="crypto-rat logo" />
        </div>

        {/* Hamburger Menu & Close Icon */}
        <button
          onClick={handleClick}
          className="Navbar__menuIcon lg:hidden"
          aria-label="Menu"
        >
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Menu Links on Desktop */}
        <div className="Navbar__links">
          <div className="Navbar__menu-links">
            <Link href="/#about">ABOUT</Link>
            <Link href="/#roadmap">ROADMAP</Link>
            <Link href="/#faq">FAQ</Link>
            <div className="w-auto flex items-center rounded-lg bg-black hover:bg-dark-800 p-0.5 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto">
              {account && chainId && balances && (
                <>
                  <div className="px-3 py-2 text-2xl text-primary text-bold">
                    {balances?.[0]
                      ? ` ${formatBalance(balances[0], 18, 3)}`
                      : null}{" "}
                    ETH
                  </div>
                </>
              )}
              <Web3Status
                title="Connect Wallet"
                className="font-bold bg-black border border-green greentext"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Menu Links on Mobile */}
      {openMenu && <MobileNavbar />}
    </nav>
  );
};

export default Navbar;
