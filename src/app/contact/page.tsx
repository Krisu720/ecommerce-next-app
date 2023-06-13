import { Building2, Mail, Phone } from "lucide-react";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="lg:min-h-screen flex flex-col justify-center items-center my-12 lg:my-0">
      <h1 className="text-xl text-gray-500 uppercase font-semibold">Contact</h1>
      <h1 className="text-3xl font-extrabold">Get in touch</h1>
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <div className="border border-gray-200 rounded flex flex-col items-start justify-center px-12 gap-8  py-12 lg:py-0 mx-2 lg:mx-0">
          <a href="" className="flex gap-2 text-sky-600">
            <Phone />{" "}
            <span className="hover:underline text-xl text-black">
              (+48) 123 456 789
            </span>
          </a>
          <a href="" className="flex gap-2 text-sky-600">
            <Building2 />{" "}
            <span className="hover:underline text-xl text-black">
              Warszawa ul.Kościuszkowskiej 12/43
            </span>
          </a>
          <a href="" className="flex gap-2 text-sky-600">
            <Mail />{" "}
            <span className="hover:underline text-xl text-black">
              Shopy@shopy.com
            </span>
          </a>
        </div>
        <iframe
          className="rounded-3xl w-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40338.81846694449!2d19.114703064965592!3d50.8093748866567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1686578203402!5m2!1spl!2spl"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
