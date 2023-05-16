import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";

const Home = ({ frontmatter }) => {
  const { banner, feature, product, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
     
       {/* products */}
       <section className="section bg-theme-light">
        <div className="container">
          <div className="text-center">
            <h2>{markdownify(product.title)}</h2>
            <p className="mt-4">{markdownify(product.content)}</p>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.products.map((item, i) => (
              <a key={`feature-${i}`} className="block" href={item.url}> 
                <div
                  className="feature-card rounded-xl bg-white p-5 pb-8 text-center cursor-pointer "
    
                >
                  {item.icon && (
                    <div className="relative">
                      <Image
                      className="mx-auto"
                      src={item.icon}
                      width={300}
                      height={300}
                      alt=""
                      />
                      <div className="absolute top-0 right-0	left-0 bottom-0 overflow-hidden bg-dark bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-95">
                        <div className="flex justify-center	items-center	w-full h-full ">
                          <div>
                            {item.icon && (
                              <Image
                                className="mx-auto"
                                src={item.icon}
                                width={75}
                                height={75}
                                alt=""
                              />
                            )}
                            <div className="mt-4 text-white">
                              {markdownify(item.name, "h3", "h5 text-white")}
                            </div>
                            <Image
                                className="mx-auto mt-4"
                                src='/images/playsotre.svg'
                                width={95}
                                height={28}
                                alt=""
                              />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  )}
                  <div className="mt-4">
                    {markdownify(item.name, "h3", "h5")}
                  </div>
                
                </div>
              </a>
             
            ))}
          </div>
        </div>
      </section>

    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
