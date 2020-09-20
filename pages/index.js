import React from "react";
import Feature from "../src/components/Feature/Feature";
import Header from "../src/components/Header/Header";
import Layout from '../src/components/Layout/Layout';
import Slider from "../src/components/Slider/slider";
const Page = () => {
    return (
      <>
        <Layout>
          <Header/>
          <Slider/>
          <main style={{backgroundImage: "url(https://lh4.googleusercontent.com/proxy/2fGclzz0IOb2FINyZAB9-IUGbltFjEKEGRK4MCSVjg8D2oQ-htHgnSWfoZv9qcSUdxK_pluO2U8dmNCQOJNOX2KETDxQ3AKsFbfhoJRV2SXlVdR2=w3840-h2160-p-k-no-nd-mv)"}}>
            <div className="bg-white" style={{opacity: 0.9}}>
            <section>
              <div className="sm:inline-block md:flex">
                <div>
                  <Feature title="Featured Malls"/>
                  <Feature title="Featured Hotels"/>
                </div>
                <div className="visible xs:invisible md:visible">
                  <div className="max-w-sm mt-16" style={{minWidth: "300px"}}>
                    <h3 className="text-md text-center  text-gray-800 font-bold">
                      Recently Posted Jobs
                    </h3>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col">
            <div className="box-border self-center border-solid border-b-2 border-opacity-100 border-pink-700">
                 <h1 className="text-purple-800 p-4 text-3xl">Get Discount Offers</h1>
            </div>
            </section>
            <section className="flex flex-col">
            <div className="box-border self-center border-solid border-b-2 border-opacity-100 border-pink-700">
                 <h1 className="text-purple-800 p-4 text-3xl">Upcoming Events</h1>
            </div>
            </section>
            </div>
          </main>

        </Layout>
      </>
    )
}

export default Page;