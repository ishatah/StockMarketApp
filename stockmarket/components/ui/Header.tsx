import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/constants";

const Header = () => {
    return (
        <header className="sticky top-0 header"> 
        
        <div className="container header-wrapper"> 
            <Link href="/">
                <Image src="/assets/icons/logo.svg" alt="logo" width={140} height={32} />
            </Link>
            <nav className="hidden sm:block">
            {NAV_ITEMS.map(({href, label}) => (
                <li key={href}>


                </li>
            ))}
            </nav>


        </div>
        
        
        </header>

    )
}

export default Header;
