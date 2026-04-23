import { useEffect, useState } from "react";
import { toast } from "sonner";
import { studentApi } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type StudentProfile = {
  fullName?: string;
  email?: string;
  phone?: string;
  destinationInterests?: string[];
  preferredCountry?: string;
  intake?: string;
  qualification?: string;
  examInterest?: string;
  budget?: string;
  academicBackground?: string;
  notes?: string;
};

export default function StudentProfilePage() {
  const [profile, setProfile] = useState<StudentProfile>({
    fullName: "",
    email: "",
    phone: "",
    destinationInterests: [],
    preferredCountry: "",
    intake: "",
    qualification: "",
    examInterest: "",
    budget: "",
    academicBackground: "",
    notes: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await studentApi.getProfile();
        setProfile(response.data);
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "Failed to load your profile.");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-6 text-slate-500">Loading profile...</div>;
  }

  return (
    <div className="container mx-auto space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Student Portal</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Profile</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Keep your study-abroad profile updated so your counselor can guide you faster and more accurately.
        </p>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="space-y-5 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Input value={profile.fullName || ""} onChange={(e) => setProfile((prev) => ({ ...prev, fullName: e.target.value }))} placeholder="Full name" />
            <Input value={profile.email || ""} disabled placeholder="Email address" />
            <Input value={profile.phone || ""} onChange={(e) => setProfile((prev) => ({ ...prev, phone: e.target.value }))} placeholder="Phone number" />
            <Input value={profile.preferredCountry || ""} onChange={(e) => setProfile((prev) => ({ ...prev, preferredCountry: e.target.value }))} placeholder="Preferred country" />
            <Input value={profile.intake || ""} onChange={(e) => setProfile((prev) => ({ ...prev, intake: e.target.value }))} placeholder="Preferred intake" />
            <Input value={profile.qualification || ""} onChange={(e) => setProfile((prev) => ({ ...prev, qualification: e.target.value }))} placeholder="Highest qualification" />
            <Input value={profile.examInterest || ""} onChange={(e) => setProfile((prev) => ({ ...prev, examInterest: e.target.value }))} placeholder="Exam interest" />
            <Input value={profile.budget || ""} onChange={(e) => setProfile((prev) => ({ ...prev, budget: e.target.value }))} placeholder="Budget range" />
          </div>

          <Input
            value={(profile.destinationInterests || []).join(", ")}
            onChange={(e) =>
              setProfile((prev) => ({
                ...prev,
                destinationInterests: e.target.value.split(",").map((item) => item.trim()).filter(Boolean),
              }))
            }
            placeholder="Destination interests, separated by commas"
          />

          <Textarea
            value={profile.academicBackground || ""}
            onChange={(e) => setProfile((prev) => ({ ...prev, academicBackground: e.target.value }))}
            placeholder="Academic background"
            className="min-h-32"
          />

          <Textarea
            value={profile.notes || ""}
            onChange={(e) => setProfile((prev) => ({ ...prev, notes: e.target.value }))}
            placeholder="Additional notes for your counselor"
            className="min-h-28"
          />

          <div className="flex justify-end">
            <Button
              disabled={saving}
              onClick={async () => {
                try {
                  setSaving(true);
                  const response = await studentApi.updateProfile({
                    fullName: profile.fullName,
                    phone: profile.phone,
                    destinationInterests: profile.destinationInterests || [],
                    preferredCountry: profile.preferredCountry,
                    intake: profile.intake,
                    qualification: profile.qualification,
                    examInterest: profile.examInterest,
                    budget: profile.budget,
                    academicBackground: profile.academicBackground,
                    notes: profile.notes,
                  });
                  setProfile(response.data);
                  toast.success("Profile updated.");
                } catch (error: any) {
                  toast.error(error?.response?.data?.message || "Failed to update your profile.");
                } finally {
                  setSaving(false);
                }
              }}
            >
              Save Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
