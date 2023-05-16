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

const AboutUs = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
        <section className="section">
            <div className="container">
                <div className="row">
                    <h3 className="mb-4">About Unipuzz Studio</h3>
                    <p>
                        Unipuzz Studio is a fast growing mobile game production company.
                        We position ourselves as a pioneer for the Asia Game industry, 
                        ready to cooperate with other Game developers in asia to bring Asia Game products to the world.
                    </p>

                    <h4 className="mb-3 mt-3">What drives us</h4>
                    <p className="mb-1">
                        Our purpose is to unlock exponential growth for all of our stakeholders – including our colleagues, customers, partners, and communities.
                        We all love games. We share our passion. And we stick together to achieve our dream.
                    </p>
                    <h4 className="mb-3 mt-3">What we do</h4>
                    <p className="mb-1">
                        Monkids Game Studio’s mission is to create and bring games to players. We are not standing only as a game publisher but also as a reliable backer and lasting partner because we want to open new doors and push the gaming industry development to the next stage.”
                    </p>
                    <h4 className="mb-3 mt-3">How we do it</h4>
                    <p className="mb-1">
                        The strength of a team comes from every individual. And every member of Monkids Game Studio plays a crucial part contributing to our success.
                    </p>
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

export default AboutUs;
