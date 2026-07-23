import { Navigate, useParams } from "react-router";

import PageHero from "../../components/common/PageHero";
import ContactCTA from "../../components/sections/contactCTA/ContactCTA";
import TeamProfile from "../../components/sections/teamDetails/TeamProfile";

import { TEAM_DATA } from "../../constant/team/teamData";

const TeamDetails = () => {
    const { slug } = useParams();

    const member = TEAM_DATA.find(
        (item) => item.slug === slug
    );

    if (!member) {
        return <Navigate to="/404" replace />;
    }

    return (
        <>
            <PageHero
                title={member.name}
                breadcrumb={member.name}
                background={member.image}
            />

            <TeamProfile member={member} />

            <ContactCTA />
        </>
    );
};

export default TeamDetails;