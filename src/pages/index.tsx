import type { ReactElement } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import SvgIconAccount from "@/svgs/icon-account.svg";
import SvgIconBasket from "@/svgs/icon-basket.svg";
import SvgIconCharity from "@/svgs/icon-charity.svg";
import SvgIconRewards from "@/svgs/icon-rewards.svg";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
    <div className="bg-white level-page">
      <main className="max-w-[1080px] grid m-auto">
        <section className="bg-tertiary">
          <div className="w-full">
            <Image
              priority
              alt="A new kind of rewards program: when you shop local, earn 5% cash back"
              src="/hero.png"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={393}
              height={221}
            />
          </div>

          <div className="grid grid-flow-row max-w-[240px] md:max-w-[450px] text-center mx-auto mt-[25px] pb-[25px]">
            <h2 className="text-[24px] leading-[30px] font-medium text-secondary">
              A new kind of rewards program
            </h2>
            <p className="text-[22px] font-normal mt-[18px]">
              when you shop local,{" "}
              <span className="font-semibold">earn 5% cash back</span>
            </p>
            <h2 className="text-[24px] leading-[30px] font-normal text-secondary">
              +
            </h2>
            <p className="text-[22px] font-normal">
              we&apos;ll <span className="font-semibold">donate 2%</span> to a
              charity of your choice
            </p>
          </div>
        </section>

        <section className="px-[20px] lg:px-0 pt-[40px] bg-white">
          <h2 className="text-[24px] leading-[30px] font-semibold text-center text-secondary">
            How it Works
          </h2>
          <div className="mt-[40px] grid gap-[14px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-[24px] bg-secondary grid grid-cols-[auto_1fr] md:grid-cols-[1fr] md:text-center md:justify-items-center rounded-[5px] ">
              <div className="py-[17px] self-center justify-center">
                <SvgIconAccount />
              </div>
              <div className="ml-[24px] md:ml-0 self-center">
                <h3 className="text-[18px] leading-[23px] font-medium text-primary">
                  Create a free account
                </h3>
                <p className="text-[16px] leading-[22px] font-light mt-[10px] text-primary">
                  Sign up for a rewards account and enter your card details
                </p>
              </div>
            </div>

            <div className="p-[24px] bg-secondary grid grid-cols-[auto_1fr] md:grid-cols-[1fr] md:text-center md:justify-items-center rounded-[5px] ">
              <div className="py-[17px] self-center justify-center">
                <SvgIconBasket />
              </div>
              <div className="ml-[24px] md:ml-0 self-center">
                <h3 className="text-[18px] leading-[23px] font-medium text-primary">
                  Shop local using your card
                </h3>
                <p className="text-[16px] leading-[22px] font-light mt-[10px] text-primary">
                  Shop or dine at participating stores and restaurants
                </p>
              </div>
            </div>

            <div className="p-[24px] bg-secondary grid grid-cols-[auto_1fr] md:grid-cols-[1fr] md:text-center md:justify-items-center rounded-[5px] ">
              <div className="py-[17px] self-center justify-center">
                <SvgIconRewards />
              </div>
              <div className="ml-[24px] md:ml-0 self-center">
                <h3 className="text-[18px] leading-[23px] font-medium text-primary">
                  Earn rewards
                </h3>
                <p className="text-[16px] leading-[22px] font-light text-primary mt-[10px]">
                  Receive cash back and discounts at local merchants
                </p>
              </div>
            </div>

            <div className="p-[24px] bg-secondary grid grid-cols-[auto_1fr] md:grid-cols-[1fr] md:text-center md:justify-items-center rounded-[5px] ">
              <div className="py-[17px] self-center justify-center">
                <SvgIconCharity />
              </div>
              <div className="ml-[24px] md:ml-0 self-center">
                <h3 className="text-[18px] leading-[23px] font-medium text-primary">
                  Give back to charity
                </h3>
                <p className="text-[16px] leading-[22px] font-light text-primary mt-[10px]">
                  Receive &apos;Community Cash&apos; to donate to local
                  charities
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="sticky bottom-0 z-10 bg-white min-h-[92px] mt-[17px] px-[20px]">
        <div className="grid grid-cols-1 justify-center content-center min-h-[inherit]">
          <button className="min-w-[100%] md:min-w-[300px] h-[60px] bg-secondary text-primary font-semibold text-[22px] rounded-[5px] justify-self-center">
            Get Started
          </button>
        </div>
      </footer>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};

export default Page;
