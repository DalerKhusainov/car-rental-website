import Image from "next/image"
import Button from "./Button"

export default function Hero() {
  return (
    <section className="max-w-[1248px] mx-auto mb-[120px] h-[calc(100vh-100px)] relative flex items-center justify-between">
        <div className="absolute top-0 -z-10 -right-10">
          <Image src="/images/hero/hero-bg.png" width={500} height={600} alt="" />
        </div>
        {/* hero content */}
        <div className="w-[45%] tablet:text-left">
          <h3 className="headingTertiary mb-2">Save big with our</h3>
          <h1 className="headingPrimary mb-4">Save big with our car rental</h1>
          <p className="textBodyLarge mb-4">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick up options and much more.
          </p>
          <div className="flex gap-4">
            <Button type={"primary"} size={"large"}>
              Book Ride
            </Button>
            <Button type={"secondary"} size={"large"}>
              Learn More
            </Button>
          </div>
        </div>
        {/* hero image */}
        <div className="h-full flex items-center">
          <Image src="/images/hero/main-car.png" width={700} height={500} alt="" />
        </div>
      </section>
  )
}
