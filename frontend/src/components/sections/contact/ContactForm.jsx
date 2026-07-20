import PrimaryButton from "../../common/PrimaryButton";

import { COMPANY } from "../../../constant/common/company"
import { CONTACT_DATA } from "../../../constant/contact/contactPageData"

const ContactForm = () => {
    return (
        <section className="section bg-light">

            <div className="container">

                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Contact Form */}

                    <div className="rounded-xl bg-white p-8 shadow-primary">

                        <h2 className="mb-8 text-3xl font-bold text-heading">
                            {CONTACT_DATA.form.title}
                        </h2>

                        <form className="space-y-5">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full rounded-lg border border-border px-4 py-3"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full rounded-lg border border-border px-4 py-3"
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full rounded-lg border border-border px-4 py-3"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full rounded-lg border border-border px-4 py-3"
                            />

                            <textarea
                                rows={6}
                                placeholder="Write your message..."
                                className="w-full rounded-lg border border-border px-4 py-3"
                            />

                            <PrimaryButton type="submit">
                                Send Message
                            </PrimaryButton>

                        </form>

                    </div>

                    {/* Google Map */}

                    <div className="rounded-xl overflow-hidden shadow-primary">

                        <iframe
                            src={COMPANY.contact.map}
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className="min-h-[550px] w-full"
                            title="Ali Builders Associate Location"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ContactForm;