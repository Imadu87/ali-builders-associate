import { Link } from "react-router";

const TeamCard = ({
    slug,
    image,
    name,
    designation,
}) => {
    return (
        <Link
            to={`/team/${slug}`}
            className="group block overflow-hidden rounded-xl shadow-primary"
        >
            <div className="relative h-[420px] overflow-hidden">

                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">

                    <h3 className="text-2xl font-semibold text-white transition-default group-hover:text-secondary">
                        {name}
                    </h3>

                    <p className="mt-2 text-white/80">
                        {designation}
                    </p>

                </div>

            </div>
        </Link>
    );
};

export default TeamCard;