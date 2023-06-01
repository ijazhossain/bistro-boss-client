const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center my-8  w-4/12 mx-auto">
            <p className="text-yellow-500 mb-4">{subHeading}</p>
            <h1 className="text-4xl border-y-4 py-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;