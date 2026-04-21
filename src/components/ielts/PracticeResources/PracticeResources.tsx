import CommonPart from "../Listening/CommonPart";
import CommonSection from "../Listening/CommonSection";
import FAQ from "./FAQ";
import { FeatureOne, FeatureTwo, Intro } from "./Intro";
import { FeatureFive, FeatureFour, FeatureSix, FeatureThree } from "./SecondComponent";


const PracticeResources = () => {
    return (
        <div>
            <Intro></Intro>
            <FeatureOne></FeatureOne>
            <FeatureTwo></FeatureTwo>
            <FeatureThree></FeatureThree>
            <FeatureFour></FeatureFour>
            <FeatureFive></FeatureFive>
            <FeatureSix></FeatureSix>
           
            <CommonSection></CommonSection>
            <CommonPart></CommonPart>
             <FAQ></FAQ>
        </div>
    );
};

export default PracticeResources;