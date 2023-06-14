import { Building2, Mail, Phone } from "lucide-react";
import { FC } from "react";

const Page: FC = ({}) => {
  return (
    <div className="my-12 flex flex-col items-center justify-center lg:my-0 lg:min-h-screen">
      <h1 className="text-xl font-semibold uppercase text-gray-500">Contact</h1>
      <h1 className="text-3xl font-extrabold">Get in touch</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="mx-2 flex flex-col items-start justify-center gap-8 rounded border border-gray-200  px-12 py-12 lg:mx-0 lg:py-0">
          <a href="" className="flex gap-2 text-sky-600">
            <Phone />{" "}
            <span className="text-xl text-black hover:underline">
              (+48) 123 456 789
            </span>
          </a>
          <a href="" className="flex gap-2 text-sky-600">
            <Building2 />{" "}
            <span className="text-xl text-black hover:underline">
              Warszawa ul.Kościuszkowskiej 12/43
            </span>
          </a>
          <a href="" className="flex gap-2 text-sky-600">
            <Mail />{" "}
            <span className="text-xl text-black hover:underline">
              Shopy@shopy.com
            </span>
          </a>
        </div>
        <iframe
          className="w-full rounded-3xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40338.81846694449!2d19.114703064965592!3d50.8093748866567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1686578203402!5m2!1spl!2spl"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Page;
