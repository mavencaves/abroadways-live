import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button.tsx";

type TabKey =
    | "cgpa-to-gpa"
    | "gpa-to-cgpa"
    | "cgpa-to-percentage"
    | "percentage-to-cgpa"
    | "cgpa-to-marks"
    | "marks-to-cgpa";

type ButtonConfig = {
    key: TabKey;
    label: string;
    active: boolean;
};

type TabConfig = {
    title: string;
    description: string;
    sectionTitle: string;
    sectionDesc: string;
    inputLabel: string;
    placeholder: string;
    range: string;
    formula: string;
    conversionButtons: ButtonConfig[];
    directionButtons: ButtonConfig[];
};

export default function CGPACalculatorPage() {
    const [activeTab, setActiveTab] = useState<TabKey>("cgpa-to-gpa");
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        setInputValue("");
        setResult("");
        setError("");
    }, [activeTab]);

    const validateInput = (value: string, min: number, max: number) => {
        const num = parseFloat(value);
        return !isNaN(num) && num >= min && num <= max;
    };

    const handleCalculate = () => {
        setError("");

        if (!inputValue.trim()) {
            setError("Enter a valid number to see the result.");
            setResult("");
            return;
        }

        const input = parseFloat(inputValue);

        switch (activeTab) {
            case "cgpa-to-gpa":
                if (!validateInput(inputValue, 0, 4)) {
                    setError("Enter a valid CGPA between 0 and 4.");
                    setResult("");
                } else {
                    setResult(`Your GPA is ${input.toFixed(2)}`);
                }
                break;
            case "gpa-to-cgpa":
                if (!validateInput(inputValue, 0, 4)) {
                    setError("Enter a valid GPA between 0 and 4.");
                    setResult("");
                } else {
                    setResult(`Your CGPA is ${input.toFixed(2)}`);
                }
                break;
            case "cgpa-to-percentage":
                if (!validateInput(inputValue, 0, 4)) {
                    setError("Enter a valid CGPA between 0 and 4.");
                    setResult("");
                } else {
                    setResult(`Your percentage is ${(input * 25).toFixed(2)}%`);
                }
                break;
            case "percentage-to-cgpa":
                if (!validateInput(inputValue, 0, 100)) {
                    setError("Enter a valid percentage between 0 and 100.");
                    setResult("");
                } else {
                    setResult(`Your CGPA is ${(input / 25).toFixed(2)}`);
                }
                break;
            case "cgpa-to-marks":
                if (!validateInput(inputValue, 0, 4)) {
                    setError("Enter a valid CGPA between 0 and 4.");
                    setResult("");
                } else {
                    setResult(`Your marks percentage is ${(input * 25).toFixed(2)}%`);
                }
                break;
            case "marks-to-cgpa":
                if (!validateInput(inputValue, 0, 100)) {
                    setError("Enter valid marks between 0 and 100.");
                    setResult("");
                } else {
                    setResult(`Your CGPA is ${(input / 25).toFixed(2)}`);
                }
                break;
        }
    };

    const getTabConfig = (): TabConfig => {
        const conversionButtons = [
            { key: "cgpa-to-gpa", label: "CGPA to GPA Calculator", active: activeTab === "cgpa-to-gpa" || activeTab === "gpa-to-cgpa" },
            {
                key: "cgpa-to-percentage",
                label: "CGPA to Percentage Calculator",
                active: activeTab === "cgpa-to-percentage" || activeTab === "percentage-to-cgpa",
            },
            { key: "cgpa-to-marks", label: "CGPA to Marks Calculator", active: activeTab === "cgpa-to-marks" || activeTab === "marks-to-cgpa" },
        ] as ButtonConfig[];

        switch (activeTab) {
            case "cgpa-to-gpa":
                return {
                    title: "CGPA to GPA Converter",
                    description: "Convert your 4-point scale CGPA to GPA instantly with a simple and accurate calculator.",
                    sectionTitle: "Convert CGPA to GPA",
                    sectionDesc: "Enter your CGPA on a 4-point scale to calculate the equivalent GPA.",
                    inputLabel: "CGPA (0 to 4 scale)",
                    placeholder: "Example: 3.62",
                    range: "Valid range: 0.00 - 4.00",
                    formula: "Formula: GPA = CGPA",
                    conversionButtons,
                    directionButtons: [
                        { key: "cgpa-to-gpa", label: "CGPA to GPA", active: true },
                        { key: "gpa-to-cgpa", label: "GPA to CGPA", active: false },
                    ],
                };
            case "gpa-to-cgpa":
                return {
                    title: "GPA to CGPA Converter",
                    description: "Convert your GPA to CGPA on a 4-point scale using a clear and fast calculation flow.",
                    sectionTitle: "Convert GPA to CGPA",
                    sectionDesc: "Enter your GPA on a 4-point scale to calculate the equivalent CGPA.",
                    inputLabel: "GPA (0 to 4 scale)",
                    placeholder: "Example: 3.62",
                    range: "Valid range: 0.00 - 4.00",
                    formula: "Formula: CGPA = GPA",
                    conversionButtons,
                    directionButtons: [
                        { key: "cgpa-to-gpa", label: "CGPA to GPA", active: false },
                        { key: "gpa-to-cgpa", label: "GPA to CGPA", active: true },
                    ],
                };
            case "cgpa-to-percentage":
                return {
                    title: "CGPA to Percentage Converter",
                    description: "Estimate your percentage from a 4-point scale CGPA using a simple standard conversion method.",
                    sectionTitle: "Convert CGPA to Percentage",
                    sectionDesc: "Enter your CGPA on a 4-point scale to convert it into percentage.",
                    inputLabel: "CGPA (0 to 4 scale)",
                    placeholder: "Example: 3.62",
                    range: "Valid range: 0.00 - 4.00",
                    formula: "Formula: Percentage = CGPA x 25",
                    conversionButtons,
                    directionButtons: [
                        { key: "cgpa-to-percentage", label: "CGPA to Percentage", active: true },
                        { key: "percentage-to-cgpa", label: "Percentage to CGPA", active: false },
                    ],
                };
            case "percentage-to-cgpa":
                return {
                    title: "Percentage to CGPA Converter",
                    description: "Convert your percentage to an estimated CGPA on a 4-point scale with a quick academic planning tool.",
                    sectionTitle: "Convert Percentage to CGPA",
                    sectionDesc: "Enter your percentage to convert it into CGPA on a 4-point scale.",
                    inputLabel: "Percentage (0 to 100)",
                    placeholder: "Example: 80",
                    range: "Valid range: 0.00 - 100.00",
                    formula: "Formula: CGPA = Percentage / 25",
                    conversionButtons,
                    directionButtons: [
                        { key: "cgpa-to-percentage", label: "CGPA to Percentage", active: false },
                        { key: "percentage-to-cgpa", label: "Percentage to CGPA", active: true },
                    ],
                };
            case "cgpa-to-marks":
                return {
                    title: "CGPA to Marks Converter",
                    description: "Estimate marks percentage from CGPA quickly using a clear and student-friendly conversion flow.",
                    sectionTitle: "Convert CGPA to Marks",
                    sectionDesc: "Enter your CGPA on a 4-point scale to estimate marks percentage.",
                    inputLabel: "CGPA (0 to 4 scale)",
                    placeholder: "Example: 3.62",
                    range: "Valid range: 0.00 - 4.00",
                    formula: "Formula: Marks % = CGPA x 25",
                    conversionButtons,
                    directionButtons: [
                        { key: "cgpa-to-marks", label: "CGPA to Marks", active: true },
                        { key: "marks-to-cgpa", label: "Marks to CGPA", active: false },
                    ],
                };
            case "marks-to-cgpa":
                return {
                    title: "Marks to CGPA Converter",
                    description: "Convert marks percentage to an estimated CGPA using a simple 4-point scale formula.",
                    sectionTitle: "Convert Marks to CGPA",
                    sectionDesc: "Enter your marks out of 100 to estimate CGPA on a 4-point scale.",
                    inputLabel: "Marks (0 to 100)",
                    placeholder: "Example: 80",
                    range: "Valid range: 0.00 - 100.00",
                    formula: "Formula: CGPA = Marks / 25",
                    conversionButtons,
                    directionButtons: [
                        { key: "cgpa-to-marks", label: "CGPA to Marks", active: false },
                        { key: "marks-to-cgpa", label: "Marks to CGPA", active: true },
                    ],
                };
        }
    };

    const config = getTabConfig();

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-purple-100 py-16">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h1 className="mb-4 text-2xl font-bold text-purple-600 md:text-3xl">{config.title}</h1>
                    <p className="mx-auto max-w-3xl leading-relaxed text-gray-700">{config.description}</p>
                </div>
            </div>

            <div className="mx-auto max-w-4xl px-4 py-12">
                <div className="mb-8">
                    <div className="mb-6 flex flex-wrap justify-center gap-4">
                        {config.conversionButtons.map((button) => (
                            <Button
                                size="xl"
                                key={button.key}
                                onClick={() => setActiveTab(button.key)}
                                className={`rounded-lg px-6 py-3 font-medium transition-colors duration-200 ${
                                    button.active ? "text-white" : "bg-purple-200 text-purple-800 hover:bg-purple-300"
                                }`}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4">
                        {config.directionButtons.map((button) => (
                            <Button
                                size="xl"
                                key={button.key}
                                onClick={() => setActiveTab(button.key)}
                                className={`rounded-lg px-6 py-3 font-medium transition-colors duration-200 ${
                                    button.active ? "text-white" : "bg-purple-200 text-purple-800 hover:bg-purple-300"
                                }`}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="rounded-lg bg-white p-8 shadow-sm">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="mb-4 text-center text-xl font-semibold text-purple-600">{config.sectionTitle}</h2>
                        <p className="mb-8 text-center text-gray-600">{config.sectionDesc}</p>

                        <div className="space-y-6">
                            <div>
                                <label className="mb-2 block font-medium text-purple-600">{config.inputLabel}</label>
                                <input
                                    type="number"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder={config.placeholder}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                                    step="0.01"
                                />
                                <p className="mt-1 text-sm text-gray-500">{config.range}</p>
                            </div>

                            <div className="text-center">
                                <Button size="xl" onClick={handleCalculate}>
                                    Convert
                                </Button>
                            </div>

                            <div className="text-center">
                                {error ? <p className="text-red-500">{error}</p> : null}
                                {result ? <p className="text-lg font-medium text-green-600">{result}</p> : null}
                            </div>

                            <div className="text-center">
                                <p className="text-sm text-gray-600">{config.formula}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
