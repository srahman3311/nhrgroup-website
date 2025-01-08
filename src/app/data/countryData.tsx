import { BsPersonAdd } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { FaAward } from "react-icons/fa";
import { CountryType, WhyChoseType } from "../type/countryType";

export const countryData: CountryType = [
    {
        image: "/country_image/uk-flag.webp",
        title: "Study in UK",
        description: "One of the main advantages of studying in the UK is that you will be exposed to different cultures and experiences ..."
    },
    {
        image: "/country_image/usa-flag.webp",
        title: "Study in USA",
        description: "Studying in the USA doesn’t just give you tangible degrees and certificates. For any international student, the USA has a lot ..."
    },
    {
        image: "/country_image/canada-flag.webp",
        title: "Study in Canada",
        description: "Most students prefer to study in Canada because it is the most popular and cost effective study destination in the world ..."
    },
    {
        image: "/country_image/australia-flag.webp",
        title: "Study in Australia",
        description: "Australia has long been the preferred overseas study destinations. Multicultural Australia is a safe, friendly, sophisticated ..."
    },
    {
        image: "/country_image/malaysia-flag.webp",
        title: "Study in Malaysia",
        description: "Malaysia is an increasingly popular place to get tertiary education with more than 40,000 international students from over ..."
    },
    {
        image: "/country_image/world-map.webp",
        title: "Other Visa Services",
        description: "NHP Education Consultants also processes student dependent/spouse visa, parents visitor visa, family visit visa ..."
    },
]


export const whyChooseNhpDate: WhyChoseType = [
    {
        icon: () => <BsPersonAdd />,
        title: "Expirense",
        description: "Experience - all that matters! Having more than 16+ years of experience in education consultancy, NHP Education Consultants..."
    },
    {
        icon: () => <HiSparkles />,
        title: "Transparency",
        description: "Straight Talk is Good Business! Our services are our commitments to you and we deliver what we commit. We do not chase the..."
    },
    {
        icon: () => <FaAward />,
        title: "Pastoral Care",
        description: "We look at the consultancy differently! We are highly clinical to take care of your problems and remain focused until we can..."
    },
    {
        icon: () => <FaAward />,
        title: "Authorized Agent",
        description: "Our excellent network with the Universities helps us to deliver superlative services to our students. We provide end to end..."
    },
    {
        icon: () => <FaAward />,
        title: "Intelligency and Skill",
        description: "Practical wisdom, trusted advice! Our success rate with visa applications and university admissions is one of the highest in..."
    },
    {
        icon: () => <FaAward />,
        title: "Long Term Relationship",
        description: "Business is our signature! At NHP, we are committed to provide much more than excellent education consultancy – with us..."
    },
]


