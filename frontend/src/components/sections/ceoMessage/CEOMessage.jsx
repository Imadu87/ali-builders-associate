import { CEO_DATA } from "../../../constant/ceoMessage/ceoMessageData";

const CEOMessage = () => {
    return (
        <section className="first-section bg-white">
            <div className="container">

                <div className="section-header">
                    <span className="section-subtitle">
                        Leadership
                    </span>

                    <h2 className="section-title">
                        CEO Message
                    </h2>
                </div>

                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Message */}

                    <div>

                        <p className="section-description-left italic">
                            {CEO_DATA.message}
                        </p>

                        <div className="mt-8">

                            <h3 className="text-2xl font-bold text-heading">
                                {CEO_DATA.name}
                            </h3>

                            <p className="mt-2 font-medium text-secondary">
                                {CEO_DATA.designation}
                            </p>

                        </div>

                    </div>

                    {/* CEO Image */}
                    <div className="relative flex justify-center">

                        <div className="absolute h-72 w-72 rounded-full bg-secondary/15 blur-2xl"></div>

                        <img
                            src={CEO_DATA.image}
                            alt={CEO_DATA.name}
                            className="relative z-10 h-72 w-72 rounded-full border-4 border-secondary object-cover shadow-2xl md:h-80 md:w-80"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default CEOMessage;