import PageHero from "../../components/common/PageHero";
import PrimaryButton from "../../components/common/PrimaryButton";

import heroImage from "../../assets/images/hero/hero1.avif";

const FileVerification = () => {
  return (
    <>
      <PageHero
        title="File Verification"
        breadcrumb="File Verification"
        background={heroImage}
      />

      <section className="first-section bg-light">

        <div className="container">

          <div
            data-aos="zoom-in-up"
            className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-primary lg:p-10"
          >

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="mb-8 text-center"
            >

              <h2 className="text-3xl font-bold text-heading">
                File Verification
              </h2>

              <p className="mt-3 text-text">
                Enter your registration number, CNIC, and password to verify
                your property file.
              </p>

            </div>

            <form className="space-y-5">

              <input
                data-aos="fade-up"
                data-aos-delay="200"
                type="text"
                placeholder="Registration Number"
                className="form-input"
              />

              <input
                data-aos="fade-up"
                data-aos-delay="300"
                type="text"
                placeholder="CNIC (XXXXX-XXXXXXX-X)"
                className="form-input"
              />

              <input
                data-aos="fade-up"
                data-aos-delay="400"
                type="password"
                placeholder="Password"
                className="form-input"
              />

              <div
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <PrimaryButton
                  type="submit"
                  className="w-full justify-center"
                >
                  Verify File
                </PrimaryButton>
              </div>

            </form>

          </div>

        </div>

      </section>
    </>
  );
};

export default FileVerification;