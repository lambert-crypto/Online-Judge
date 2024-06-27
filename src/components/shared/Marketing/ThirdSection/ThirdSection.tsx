import Image from "next/image";

export default function ThirdSection() {
  return (
    <div className="flex p-10 flex-col md:flex-row md:justify-evenly">
      <div className="flex-col md:flex-row gap-6 md:px-10 flex">
        <div className="md:w-2/3 w-full">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/content/landing-page-video.mp4"></source>
          </video>
        </div>
        <div className="flex-col border p-4 rounded-xl md:w-2/5">
          <div
            className="text-3xl flex justify-center text-center
            bg-gradient-to-b
            from-yellow-300
            to-blue-300
            bg-clip-text
            font-bold
            text-transparent
            "
          >
            The greatest coding platform that caters to your needs.
          </div>
          <div className="space-y-6 flex-col items-center pt-4 justify-center">
            <div className="text-lg flex gap-4">
              <Image
                src="/images/logo/logo.svg"
                width={40}
                height={40}
                alt="Bullet"
              />
              <div className="flex flex-col gap-2 pt-2 text-md">
                Choose from a variety of store templates to get started.{" "}
              </div>
            </div>

            <div className="text-lg flex gap-4">
              <Image
                src="/images/logo/logo.svg"
                width={40}
                height={40}
                alt="Bullet"
              />
              <div className="flex flex-col gap-2 pt-2 text-md">
                Choose from a variety of store templates to get started.{" "}
              </div>
            </div>

            <div className="text-lg flex gap-4">
              <Image
                src="/images/logo/logo.svg"
                width={40}
                height={40}
                alt="Bullet"
              />
              <div className="flex flex-col gap-2 pt-2 text-md">
                Choose from a variety of store templates to get started.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
