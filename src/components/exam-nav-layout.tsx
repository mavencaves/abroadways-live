import { useState } from "react";
import { Bot, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { NavigationItem } from "@/data/navigation.ts";
import { Link } from "react-router";

interface ExamLayoutProps {
    examData: NavigationItem[];
    onLinkClick?: () => void;
}

export function ExamLayout({ examData, onLinkClick }: ExamLayoutProps) {
    const [selectedExam, setSelectedExam] = useState(
        examData.find((exam) => exam.dropdownItems && exam.dropdownItems.length > 0)?.label || examData[0]?.label || "",
    );

    const currentExam = examData.find((exam) => exam.label === selectedExam);
    const examDetails = currentExam?.dropdownItems || [];
    const shouldUseTwoColumns = examDetails.length > 6;

    const handleLinkClick = () => {
        if (onLinkClick) {
            onLinkClick();
        }
    };

    return (
        <div className="mx-auto w-[860px] max-w-[calc(100vw-4rem)] overflow-hidden rounded-[1.5rem] bg-white shadow-2xl">
            <div className="flex h-[520px]">
                <div className="w-48 border-r border-gray-200 bg-gray-50">
                    <div className="p-4">
                        <h3 className="mb-3 text-sm font-semibold text-gray-900">Exams</h3>
                        <div className="space-y-1">
                            {examData.map((exam) => {
                                const hasChildren = exam.dropdownItems && exam.dropdownItems.length > 0;

                                return hasChildren ? (
                                    <button
                                        key={exam.label}
                                        onClick={() => setSelectedExam(exam.label)}
                                        className={`group flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium transition-all duration-200 ${
                                            selectedExam === exam.label
                                                ? "border border-blue-200 bg-blue-100 text-blue-700"
                                                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        }`}
                                    >
                                        <span>{exam.label}</span>
                                        {selectedExam === exam.label && <ChevronRight className="h-4 w-4 text-blue-600" />}
                                    </button>
                                ) : (
                                    <Link
                                        key={exam.label}
                                        to={exam.href}
                                        onClick={handleLinkClick}
                                        className="group flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        <span>{exam.label}</span>
                                    </Link>
                                );
                            })}

                            <div className="mt-8 border-t border-gray-200 pt-6">
                                <Button size="xl" className="w-full text-xs text-white" onClick={handleLinkClick}>
                                    <Link to="/abroadai">
                                        <div className="flex items-center justify-center space-x-2 text-lg">
                                            <Bot className="mb-1 h-4 w-4" />
                                            <span>AbroadAI</span>
                                        </div>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {examDetails.length > 0 && (
                    <div className="flex flex-1 flex-col">
                        <div className="border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900">{selectedExam} Preparation</h2>
                                <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                                    Explore {selectedExam}
                                </Button>
                            </div>
                        </div>

                        <div className="flex flex-1">
                            <div className="flex-1 p-6">
                                <h3 className="mb-4 text-lg font-semibold text-gray-900">Explore {selectedExam}</h3>
                                <div
                                    className={
                                        shouldUseTwoColumns
                                            ? "grid grid-cols-2 gap-x-4 gap-y-2"
                                            : "grid grid-cols-1 gap-3"
                                    }
                                >
                                    {examDetails.map((item) => (
                                        <Link
                                            key={item.label}
                                            to={item.href}
                                            onClick={handleLinkClick}
                                            className={`group flex items-center rounded-lg p-3 transition-colors duration-200 hover:bg-gray-50 ${
                                                shouldUseTwoColumns ? "text-sm" : ""
                                            }`}
                                        >
                                            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                                {item.label}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
