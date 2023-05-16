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

const TermsAndConditions = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
        <section className="section">
            <div className="container">
            <div className="row">
                <h3 className="mb-4">Privacy Policy</h3>
                <div>
                    <p className="mb-1">Last updated: November 10, 2020</p>
                    <p className="mb-1">
                        These Terms and Conditions (“Terms”, “Terms and Conditions”) govern your relationship with monkidsstudio.com website and Unipuzz Studio’ applications mobile application (the “Service”) operated by Unipuzz Studio Pte. Ltd. (“us”, “we”, or “our”).
                    </p>
                    <p className="mb-1">Please read these Terms and Conditions carefully before using our website and Unipuzz Studio’ applications mobile application (the “Service”).
                    </p>
                    <p className="mb-1">Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
                    <p className="mb-1">By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                    </p>
                </div>
                <h4 className="mb-3">Purchases</h4>
                <p className="mb-1">If you wish to purchase any product or service made available through the Service (“Purchase”), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
                <p className="mb-1">You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
                </p>
                <p className="mb-1">By submitting such information, you grant us the right to provide the information to third parties for purposes of facilitating the completion of Purchases.
                </p>
                <p className="mb-1">We reserve the right to refuse or cancel your order at any time for certain reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
                </p>
                <h4 className="mb-3">Availability, Errors and Inaccuracies</h4>
                <p className="mb-1">We are constantly updating our offerings of products and services on the Service. The products or services available on our Service may be mispriced, described inaccurately, or unavailable, and we may experience delays in updating information on the Service and in our advertising on other web sites.
                </p>
                <p className="mb-1">We cannot and do not guarantee the accuracy or completeness of any information, including prices, product images, specifications, availability, and services. We reserve the right to change or update information and to correct errors, inaccuracies, or omissions at any time without prior notice.
                </p>
                <h4 className="mb-3">Contests, Sweepstakes and Promotions</h4>
                <p className="mb-1">Any contests, sweepstakes or other promotions (collectively, “Promotions”) made available through the Service may be governed by rules that are separate from these Terms. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms, the Promotion rules will apply.
                </p>
                <h4 className="mb-3">Subscriptions</h4>
                <p className="mb-1">Some parts of the Service are billed on a subscription basis (“Subscription(s)”). You will be billed in advance on a recurring and periodic basis (weekly, monthly, yearly). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
                </p>
                <p className="mb-1">At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Unipuzz Studio Pte. Ltd. cancels it. You may cancel your Subscription renewal either through your online account management page.
                </p>
                <p className="mb-1">A valid payment method, including credit card or PayPal, is required to process the payment for your Subscription. You shall provide Unipuzz Studio Pte. Ltd. with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize Unipuzz Studio Pte. Ltd. to charge all Subscription fees incurred through your account to any such payment instruments.
                </p>
                <p className="mb-1">Should automatic billing fail to occur for any reason, Unipuzz Studio Pte. Ltd. will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.
                </p>
                <h4 className="mb-3">Free Trial</h4>
                <p className="mb-1">Unipuzz Studio Pte. Ltd. may, at its sole discretion, offer a Subscription with a free trial for a limited period of time (“Free Trial”).</p>
                <p className="mb-1">You may be required to enter your billing information in order to sign up for the Free Trial.
                </p>
                <p className="mb-1">If you do enter your billing information when signing up for the Free Trial, you will not be charged by Unipuzz Studio Pte. Ltd. until the Free Trial has expired. On the last day of the Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.
                </p>
                <p className="mb-1">At any time and without notice, Unipuzz Studio Pte. Ltd. reserves the right to (i) modify the terms and conditions of the Free Trial offer, or (ii) cancel such Free Trial offer.
                </p>
                <h4 className="mb-3">Fee Changes</h4>
                <p className="mb-1">Unipuzz Studio Pte. Ltd., in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.
                </p>
                <p className="mb-1">Unipuzz Studio Pte. Ltd. will provide you with a reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.
                </p>
                <p className="mb-1">Your continued use of the Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.
                </p>
                <h4 className="mb-3">Refunds</h4>
                <p className="mb-1">Except when required by law, paid Subscription fees are non-refundable.
                </p>
                <h4 className="mb-3">Content</h4>
                <p className="mb-1">Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (“Content”). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
                </p>
                <p className="mb-1">By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights. You agree that this license includes the right for us to make your Content available to other users of the Service, who may also use your Content subject to these Terms.
                </p>
                <p className="mb-1">You represent and warrant that: (i) the Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
                </p>
                <h4 className="mb-3">Accounts</h4>
                <p className="mb-1">When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                </p>
                <p className="mb-1">You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                </p>
                <p className="mb-1">You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
                <p className="mb-1">You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trade mark that is subject to any rights of another person or entity other than you without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.
                </p>
                <p className="mb-1">If you sign into the Service with Facebook Connect we will collect information that is visible via your Facebook account such as: (1) your first and last name, (2) Facebook ID, (3) Profile Picture/URL, and (4) list of Facebook friends. Your Account may be used to publicly identify you as part of social features of the Service, which may include user-to-user interaction, chat or messaging functionality, public leaderboards, head-to-head competition, and other similar features. Your username will be public and will be shown to other users, but will only permit access to information that is considered public or that you have designated as public in your user profile settings. All info here is provided by the User voluntarily to simplify the authorization process and use of social features. Learn about how to remove your Facebook integration with our Service: HERE
                </p>
                <h4 className="mb-3">Copyright Policy</h4>
                <p className="mb-1">We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement (“Infringement”) of any person.
                </p>
                <p className="mb-1">If you are a copyright owner or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of “Copyright Infringement” of support@Unipuzz Studio.com and include in your notice a detailed description of the alleged Infringement.
                </p>
                <p className="mb-1">You may be held accountable for damages (including costs and attorneys’ fees) for misrepresenting that any Content is infringing your copyright.
                </p>
                <h4 className="mb-3">Intellectual Property</h4>
                <p className="mb-1">The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Unipuzz Studio Pte. Ltd. and its licensors. The Service is protected by copyright, trademark, and other laws of both the Singapore and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Unipuzz Studio Pte. Ltd..
                </p>
                <h4 className="mb-3">Links To Other Web Sites</h4>
                <p className="mb-1">Our Service may contain links to third-party web sites or services that are not owned or controlled by Unipuzz Studio Pte. Ltd..
                </p>
                <p className="mb-1">Unipuzz Studio Pte. Ltd. has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Unipuzz Studio Pte. Ltd. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                </p>
                <p className="mb-1">We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
                </p>
                <h4 className="mb-3">Termination</h4>
                <p className="mb-1">We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="mb-1">Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
                </p>
                <h4 className="mb-3">Limitation Of Liability</h4>
                <p className="mb-1">In no event shall Unipuzz Studio Pte. Ltd., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                </p>
                <h4 className="mb-3">Disclaimer</h4>
                <p className="mb-1">Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                </p>
                <p className="mb-1">Unipuzz Studio Pte. Ltd. its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
                </p>
                <h4 className="mb-3">Governing Law</h4>
                <p className="mb-1">These Terms shall be governed and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions.
                </p>
                <p className="mb-1">Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
                </p>
                <h4 className="mb-3">Changes</h4>
                <p className="mb-1">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 15 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                <p className="mb-1">By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                </p>
                <h4 className="mb-3">Contact Us</h4>
                <p className="mb-1">If you have any questions about these Terms, please contact us at support@monkidsstudio.com.</p>
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

export default TermsAndConditions;
