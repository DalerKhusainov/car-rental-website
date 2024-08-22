import Image from "next/image";

export default function PlanTrip() {
  return (
    <section className="max-w-[1248px] mx-auto mb-[150px]">
      <h3 className="headingTertiary text-center mb-4">Plan your trip now</h3>
      <h2 className="headingSecondary text-center mb-[80px]">
        Quick & easy car rental
      </h2>
      <div className="grid grid-cols-3 text-center gap-x-10">
        <div className="flex flex-col justify-center items-center w-[300px]">
          <Image src="/images/plan/icon1.png" className="mb-4" width={150} height={150} alt="" />
          <h4 className="text-lg text-textBlack font-semibold mb-2">Select car</h4>
          <p className="textBodyLarge">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[300px]">
          <Image src="/images/plan/icon2.png" className="mb-4" width={150} height={150} alt="" />
          <h4 className="text-lg text-textBlack font-semibold mb-2">
            Contact Operator
          </h4>
          <p className="textBodyLarge">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[300px]">
          <Image src="/images/plan/icon3.png" className="mb-4" width={150} height={150} alt="" />
          <h4 className="text-lg text-textBlack font-semibold mb-2">Let s Drive</h4>
          <p className="textBodyLarge">
            Whether you re hitting the open road, weve got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </section>
  );
}
