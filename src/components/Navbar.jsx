import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const handleGoogleSignOut = async () => {
    await signOut();
  };
  const [toggleUser, setToggleUser] = useState(false);
  const routerClassName = router.pathname === '/' ? '/home' : router.pathname;
  return (
    <div className="container mx-auto flex flex-row px-4 items-center xl:justify-between xl:py-12">
      <Link href={'/'} className="font medium relative xl:text-2xl ">
        Omah
        <span className=" w-[6px] h-[6px] bg-[#F58634] absolute rounded-full bottom-2 -right-2" />
      </Link>
      <div className="flex flex-row items-center">
        {['home', 'rent', 'sale', 'blog'].map((value, i) => (
          <Link
            href={`${value}` === 'home' ? '/' : value}
            className={`capitalize text-center xl:text-base xl:w-32
              ${
                routerClassName === `/${value}`
                  ? 'text-[#212121]'
                  : 'text-[#828282]'
              }`}
          >
            {value}
          </Link>
        ))}
        {session ? (
          <>
            <button
              onClick={() => setToggleUser(!toggleUser)}
              className="relative"
            >
              {session.user.name}
              <div className="flex flex-col absolute">
                {toggleUser && (
                  <button onClick={handleGoogleSignOut}>Logout</button>
                )}
              </div>
            </button>
          </>
        ) : (
          <Link
            href={'/login'}
            className="capitalize bg-red-400 text-center flex items-center justify-center text-white xl:h-16 xl:w-32"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
