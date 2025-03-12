import Link from "next/link";
import { EmailIcon, MovieIcon, PhoneIcon } from "./Icons";

const Footer = () => {
  return (
    <div className="w-full bg-indigo-700 py-10 px-5 text-white">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="stroke-white">
              <MovieIcon />
            </span>
            <h1 className="font-bold italic">Movie Z</h1>
          </div>
          <div className="text-sm">
            <p>&copy; 2024 Movie Z. All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <div>Contact Information</div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span>
                  <EmailIcon />
                </span>
                <div>
                  <h1 className="font-medium">Email:</h1>
                  <p>support@movieZ.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span>
                  <PhoneIcon />
                </span>
                <div>
                  <h1 className="font-medium">Phone: </h1>
                  <p>+976 (11) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1>Follow us</h1>
            <div className="flex flex-col gap-3">
              <Link href="" className="font-medium">
                Facebook
              </Link>
              <Link href="" className="font-medium">
                Intsagram
              </Link>
              <Link href="" className="font-medium">
                Twitter
              </Link>
              <Link href="" className="font-medium">
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
