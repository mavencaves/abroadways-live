import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Country = "usa" | "uk" | "canada" | "australia";
type Housing = "shared" | "private";
type Food = "cook" | "mealplan" | "eatout";
type Transport = "transit" | "taxi" | "bike";
type FunFrequency = 0 | 1 | 2 | 3;

interface City {
    value: string;
    label: string;
    mult: number;
}

const CITY_DATA: Record<Country, City[]> = {
    usa: [
        { value: "newyork", label: "New York", mult: 1.6 },
        { value: "sf", label: "San Francisco", mult: 1.5 },
        { value: "austin", label: "Austin", mult: 1.1 },
    ],
    uk: [
        { value: "london", label: "London", mult: 1.5 },
        { value: "manchester", label: "Manchester", mult: 1.1 },
        { value: "edinburgh", label: "Edinburgh", mult: 1.2 },
    ],
    canada: [
        { value: "toronto", label: "Toronto", mult: 1.3 },
        { value: "vancouver", label: "Vancouver", mult: 1.35 },
        { value: "montreal", label: "Montreal", mult: 1.1 },
    ],
    australia: [
        { value: "sydney", label: "Sydney", mult: 1.4 },
        { value: "melbourne", label: "Melbourne", mult: 1.3 },
        { value: "brisbane", label: "Brisbane", mult: 1.2 },
    ],
};

const BASE = {
    housing: { shared: 800, private: 1300 },
    food: { cook: 250, mealplan: 400, eatout: 650 },
    transport: { transit: 80, taxi: 260, bike: 30 },
    misc: 200,
    funPerWeek: 60,
} as const;

const fmt = (n: number) => "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });

export default function CostPage() {
    const [country, setCountry] = useState<Country>("usa");
    const [city, setCity] = useState("");
    const [housing, setHousing] = useState<Housing>("shared");
    const [food, setFood] = useState<Food>("eatout");
    const [transport, setTransport] = useState<Transport>("transit");
    const [fun, setFun] = useState<FunFrequency>(0);
    const [total, setTotal] = useState("$0/month");

    const cities = CITY_DATA[country] || [];

    useEffect(() => {
        setCity("");
    }, [country]);

    const calc = () => {
        if (!city) {
            setTotal("Select a city first");
            return;
        }

        const selectedCity = cities.find((c) => c.value === city);
        const mult = selectedCity?.mult ?? 1;

        const housingCost = BASE.housing[housing] * mult;
        const foodCost = BASE.food[food] * Math.pow(mult, 0.7);
        const transportCost = BASE.transport[transport] * Math.pow(mult, 0.6);
        const misc = BASE.misc * mult;
        const funWeekly = fun === 0 ? 0 : fun === 1 ? 1 : fun === 2 ? 2.5 : 4;
        const funCost = BASE.funPerWeek * funWeekly * 4 * mult;

        const totalCost = Math.round(housingCost + foodCost + transportCost + misc + funCost);
        setTotal(`${fmt(totalCost)}/month`);
    };

    const reset = () => {
        setCountry("usa");
        setCity("");
        setHousing("shared");
        setFood("eatout");
        setTransport("transit");
        setFun(0);
        setTotal("$0/month");
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-purple-600">Cost Calculator</h1>
                    <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-600">
                        Estimate a realistic monthly living cost for major study destinations. This tool helps students
                        compare city-level expenses across accommodation, food, transport, and lifestyle choices before
                        they make bigger study abroad decisions.
                    </p>
                </div>

                <Card className="border border-gray-200 bg-white shadow-sm">
                    <CardContent className="p-8">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <div className="space-y-6">
                                    <div>
                                        <Label className="mb-3 block font-medium text-purple-600">
                                            Which country are you planning for?
                                        </Label>
                                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                            {[
                                                { value: "usa", label: "United States" },
                                                { value: "uk", label: "United Kingdom" },
                                                { value: "canada", label: "Canada" },
                                                { value: "australia", label: "Australia" },
                                            ].map((option) => (
                                                <Button
                                                    key={option.value}
                                                    type="button"
                                                    variant="outline"
                                                    className={`h-12 rounded-lg border-gray-300 text-sm ${
                                                        country === option.value
                                                            ? "border-purple-300 bg-purple-50 text-purple-700"
                                                            : "bg-white text-gray-700 hover:bg-gray-50"
                                                    }`}
                                                    onClick={() => setCountry(option.value as Country)}
                                                >
                                                    {option.label}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <Label className="mb-3 block font-medium text-purple-600">
                                            Preferred accommodation type
                                        </Label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {[
                                                { value: "shared", label: "Shared" },
                                                { value: "private", label: "Private" },
                                            ].map((option) => (
                                                <Button
                                                    key={option.value}
                                                    type="button"
                                                    variant="outline"
                                                    className={`h-12 rounded-lg border-gray-300 text-sm ${
                                                        housing === option.value
                                                            ? "border-purple-300 bg-purple-50 text-purple-700"
                                                            : "bg-white text-gray-700 hover:bg-gray-50"
                                                    }`}
                                                    onClick={() => setHousing(option.value as Housing)}
                                                >
                                                    {option.label}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <Label className="mb-3 block font-medium text-purple-600">
                                            How do you prefer to travel locally?
                                        </Label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {[
                                                { value: "transit", label: "Public Transit" },
                                                { value: "taxi", label: "Taxi or Ride Share" },
                                                { value: "bike", label: "Bike" },
                                            ].map((option) => (
                                                <Button
                                                    key={option.value}
                                                    type="button"
                                                    variant="outline"
                                                    className={`h-12 rounded-lg border-gray-300 text-sm ${
                                                        transport === option.value
                                                            ? "border-purple-300 bg-purple-50 text-purple-700"
                                                            : "bg-white text-gray-700 hover:bg-gray-50"
                                                    }`}
                                                    onClick={() => setTransport(option.value as Transport)}
                                                >
                                                    {option.label}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <Label className="mb-3 block font-medium text-purple-600">
                                            Select your target city
                                        </Label>
                                        <Select value={city} onValueChange={setCity}>
                                            <SelectTrigger className="h-12 rounded-lg border-gray-300">
                                                <SelectValue placeholder="Search for your city" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {cities.map((option) => (
                                                    <SelectItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label className="mb-3 block font-medium text-purple-600">
                                            How do you usually handle food?
                                        </Label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {[
                                                { value: "eatout", label: "Eat Out Often" },
                                                { value: "mealplan", label: "Meal Plan" },
                                                { value: "cook", label: "Mostly Cook" },
                                            ].map((option) => (
                                                <Button
                                                    key={option.value}
                                                    type="button"
                                                    variant="outline"
                                                    className={`h-12 rounded-lg border-gray-300 text-sm ${
                                                        food === option.value
                                                            ? "border-purple-300 bg-purple-50 text-purple-700"
                                                            : "bg-white text-gray-700 hover:bg-gray-50"
                                                    }`}
                                                    onClick={() => setFood(option.value as Food)}
                                                >
                                                    {option.label}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <Label className="mb-3 block font-medium text-purple-600">
                                            How often do you spend on social activities each week?
                                        </Label>
                                        <Select value={String(fun)} onValueChange={(value) => setFun(Number(value) as FunFrequency)}>
                                            <SelectTrigger className="h-12 rounded-lg border-gray-300">
                                                <SelectValue placeholder="Choose a frequency" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="0">Rarely or never</SelectItem>
                                                <SelectItem value="1">Once a week</SelectItem>
                                                <SelectItem value="2">Two to three times</SelectItem>
                                                <SelectItem value="3">More than three times</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col items-center gap-4 border-t border-gray-100 pt-8">
                                <div className="text-center">
                                    <h2 className="mb-2 text-3xl font-bold text-purple-600">Estimated Monthly Cost</h2>
                                    <p className="text-4xl font-extrabold text-slate-900">{total}</p>
                                </div>
                                <div className="flex flex-wrap justify-center gap-3">
                                    <Button size="xl" onClick={calc}>
                                        Calculate Living Cost
                                    </Button>
                                    <Button size="xl" variant="outline" onClick={reset}>
                                        Reset
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
