import Link from "next/link";
const Header = ()=>{
    return (
        <div className="w-full h-24 bg-gradient-to-r from-neutral-900 to-neutral-800 flex flex-row items-center justify-between px-5">
            <p className="font-semibold text-lg">Traffic Sign Recognition</p>
            <ul className="links">
                <li><Link href={"https://github.com/zaidbzaheer2/TrafficSignRecognition"}>GitHub</Link></li>
                <li></li>
            </ul>
        </div>
    );
}
export default Header;