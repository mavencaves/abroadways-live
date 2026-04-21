import CommonPart from "../Listening/CommonPart";
import CommonSection from "../Listening/CommonSection";
import FAQ from "./FAQ";
import Intro from "./Intro";
import SecondComponent from "./SecondComponent";


const IeltsTypes = () => {
    return (
        <div>
            <Intro></Intro>
            <SecondComponent></SecondComponent>
            <FAQ></FAQ>
            <CommonSection></CommonSection>
            <CommonPart></CommonPart>
        </div>
    );
};

export default IeltsTypes;