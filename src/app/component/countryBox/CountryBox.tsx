


type SingleCountryDataType = {
    description: string;
    image: string;
    title: string;

}

const CountryBox: React.FC<SingleCountryDataType> = ({ description, image, title }) => {
    return (
        <div>
            {description}
            {title}
            {image}
        </div>
    )
}

export default CountryBox
