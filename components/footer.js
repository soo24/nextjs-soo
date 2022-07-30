import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';


export default function Footer() {
    return (
        <div className="flex flex-1 p-8 border-t-2 border-solid border-indigo-100 
        justify-center items-center text-gray-800 font-medium text-[20px]">
            <h4 className='hover:text-blue-500 hover:border-blue-600 cursor-pointer'>
                <Link href="/">
                    <FontAwesomeIcon icon={faHouse} size='xl' />
                </Link>
            </h4>
        </div>
    );
}