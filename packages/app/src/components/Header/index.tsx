import React from "react";
import Link from "next/link";

import { Popover } from "@headlessui/react";
import Web3Status from "../Web3Status";
import { useActiveWeb3React } from "../../hooks/useActiveWeb3React";
import useBalances from "hooks/useBalance";

// components
import NavLink from "../NavLink";

// functions
import { formatBalance } from "functions/format";

function AppBar(props: { banner?: boolean }): JSX.Element {
  const { library, accounts, account, connector, chainId } =
    useActiveWeb3React();


  const balances = useBalances(library, accounts);

  return (
    <header className="fixed z-20 flex-shrink-0 w-full bg-white">
      {/* {props.banner && <Banner />} */}
      <Popover as="nav" className="z-10 w-full bg-transparent header-border-b">
        {({ open }) => (
          <>
            <div className="px-4 py-4 mx-auto max-w-7xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <NavLink href="/">
                    <div className="pl-2 cursor-pointer logo">
                      <Link href="/">
                        <a className="font-bold">NextJs Web3 Starter Kit</a>
                      </Link>
                    </div>
                  </NavLink>
                </div>

                <div className="fixed bottom-0 left-0 z-10 flex flex-row items-center justify-center w-full p-4 lg:w-auto bg-white lg:relative lg:p-0 lg:bg-transparent">
                  <div className="flex items-center justify-center lg:justify-between w-full space-x-2 sm:justify-end">
                    <div className="w-auto flex items-center rounded hover:bg-dark-800 hover:text-white p-0.5 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto">
                      {account && chainId && balances && (
                        <>
                          <div className="px-3 py-2 text-primary text-bold">
                            {balances?.[0]
                              ? ` ${formatBalance(balances[0], 18, 3)}`
                              : null}{" "}
                            ETH
                          </div>
                        </>
                      )}
                      <Web3Status
                        title="Connect Wallet"
                        className="px-4 py-2  rounded-full font-bold bg-black  text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile View Navbar Dropdown */}
          </>
        )}
      </Popover>
    </header>
  );
}

export default AppBar;
