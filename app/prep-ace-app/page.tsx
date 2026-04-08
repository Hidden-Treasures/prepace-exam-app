import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  Zap,
  Globe,
  Smartphone,
  Brain,
  Users,
  MessageCircle,
  Award,
  Shield,
  WifiOff,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Mobile (Android) download link
const MOBILE_APP_URL = "/downloads/prep-ace-mobile.apk";

export default function PrepAceAppPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-zinc-800 sticky top-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
            PrepAce<span className="text-gray-800 dark:text-white">App</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#offline" className="hover:text-blue-600 transition">
              Offline
            </a>
            <a href="#online" className="hover:text-blue-600 transition">
              Online
            </a>
            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>
            <a href="#pricing" className="hover:text-blue-600 transition">
              Pricing
            </a>
            <a href="#exams" className="hover:text-blue-600 transition">
              Exams
            </a>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/">← Back</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-28 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-blue-900 via-indigo-700 to-blue-600 bg-clip-text text-transparent">
            Ace Your Exams In One Sitting!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Smart, strategic preparation with AI tutoring, decades of past
            questions, and offline freedom. Excellence isn&apos;t just hard work
            — it&apos;s the right tool.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {/* Android download button */}
            <Button
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white gap-2"
              asChild
            >
              <a
                href={MOBILE_APP_URL}
                download="PrepAce_Mobile.apk"
                rel="noopener noreferrer"
              >
                <Smartphone className="w-5 h-5" /> Android APK
              </a>
            </Button>
            {/* Windows "Coming Soon" button (disabled, no link) */}
            <Button
              size="lg"
              variant="outline"
              className="gap-2 cursor-not-allowed opacity-70"
              disabled
            >
              💻 Windows Offline (Coming Soon)
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Globe className="w-5 h-5" /> Explore Online Plan
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" /> 30+ Years Past
              Questions
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" /> 1M+ Practice
              Questions
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" /> 98% User
              Success Rate
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" /> 50+ Exams &
              Recruitment
            </div>
          </div>
        </div>
      </section>

      {/* Offline & Online Cards */}
      <div className="container mx-auto px-4 py-8" id="offline">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Offline Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-200 dark:border-zinc-800 overflow-hidden hover:shadow-2xl transition">
            <div className="p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-semibold">
                <WifiOff className="w-5 h-5" /> OFFLINE · LIFETIME ACCESS
              </div>
              <h2 className="text-2xl font-bold mt-2">PrepAce Offline</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Works without internet — install on Windows, Android.
              </p>
              <div className="mt-4 text-3xl font-bold">
                ₦3,000{" "}
                <span className="text-base font-normal text-gray-500">
                  one-time / device
                </span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <span>
                  <strong>Vast Question Bank</strong> — 30+ years real past
                  questions + model questions, detailed explanations, topic
                  filters.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <span>
                  <strong>Personal AI Tutor</strong> — Snap, draw or upload any
                  question, AI explains step-by-step (syllabus-scoped).
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <span>
                  <strong>Classroom + Study Plan</strong> — Syllabus-based
                  materials, exercises, personalized study plans.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <span>
                  <strong>Science Note & Challenges</strong> — Solve
                  maths/science problems, weekly competitions with prizes.
                </span>
              </div>
              {/* Download buttons: Android works, Windows shows Coming Soon */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button className="flex-1 bg-blue-700 hover:bg-blue-800" asChild>
                  <a
                    href={MOBILE_APP_URL}
                    download="PrepAce_Mobile.apk"
                    rel="noopener noreferrer"
                  >
                    📱 Download for Android
                  </a>
                </Button>
                <Button
                  className="flex-1"
                  variant="outline"
                  disabled
                >
                  💻 Windows (Coming Soon)
                </Button>
              </div>
            </div>
          </div>

          {/* Online Card */}
          <div
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-200 dark:border-zinc-800 overflow-hidden hover:shadow-2xl transition"
            id="online"
          >
            <div className="p-6 bg-linear-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30">
              <div className="flex items-center gap-2 text-teal-700 dark:text-teal-300 font-semibold">
                <Wifi className="w-5 h-5" /> ONLINE · SUBSCRIPTION
              </div>
              <h2 className="text-2xl font-bold mt-2">PrepAce Online</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Any device, any browser — always updated.
              </p>
              <div className="mt-4 text-3xl font-bold">
                ₦1,000{" "}
                <span className="text-base font-normal text-gray-500">
                  / month
                </span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <span>
                  <strong>Large Question Bank</strong> — Authentic past
                  questions + syllabus-based, answers with detailed
                  explanations.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <span>
                  <strong>LearningHub Tutorials</strong> — Free quality video
                  lessons from experienced teachers.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <span>
                  <strong>Flexible Learning Modes</strong> — Customize subjects,
                  topics, quantity, exam duration.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <span>
                  <strong>Insightful Analytics</strong> — Identify strengths,
                  weak areas, track progress.
                </span>
              </div>
              <Button variant="outline" className="w-full mt-2">
                Start 7-Day Free Trial →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Feature Comparison Table */}
      <div className="container mx-auto px-4 py-16" id="features">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Similarities & Differences
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            Both platforms give you elite exam prep, but choose what fits your
            lifestyle.
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-zinc-800 max-w-5xl mx-auto">
          <table className="w-full text-sm md:text-base">
            <thead className="bg-gray-50 dark:bg-zinc-900">
              <tr>
                <th className="p-4 text-left font-semibold">Feature</th>
                <th className="p-4 text-left font-semibold">PrepAce Offline</th>
                <th className="p-4 text-left font-semibold">PrepAce Online</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
              <tr>
                <td className="p-4 font-medium">Internet required</td>
                <td className="p-4">
                  <span className="flex items-center gap-1">
                    <XCircle className="w-4 h-4 text-red-500" /> No (100%
                    offline)
                  </span>
                </td>
                <td className="p-4">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> Yes
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Device compatibility</td>
                <td className="p-4">Windows, Android (installable)</td>
                <td className="p-4">Any browser, any OS</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Pricing model</td>
                <td className="p-4">One-time ₦3,000 (device-locked)</td>
                <td className="p-4">Monthly ₦1,000 (any device login)</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">AI Tutor (snap & solve)</td>
                <td className="p-4">
                  <CheckCircle2 className="w-4 h-4 text-green-600 inline" /> Yes
                  + Science Note
                </td>
                <td className="p-4">
                  <XCircle className="w-4 h-4 text-red-500 inline" /> (Video
                  tutorials instead)
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Gamification / Challenges</td>
                <td className="p-4">
                  <CheckCircle2 className="w-4 h-4 text-green-600 inline" />{" "}
                  Weekly competitions & prizes
                </td>
                <td className="p-4">
                  <XCircle className="w-4 h-4 text-red-500 inline" />{" "}
                  (Performance dashboards)
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Recruitment exam bank</td>
                <td className="p-4">Limited (academic focus)</td>
                <td className="p-4">
                  <CheckCircle2 className="w-4 h-4 text-green-600 inline" />{" "}
                  Army, Navy, Police, FRSC, Customs, etc.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Exams Covered Section */}
      <div className="bg-gray-50 dark:bg-zinc-900/50 py-16" id="exams">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            📚 Exams & Tests Covered
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
                <Smartphone className="w-5 h-5" /> Offline Edition — Academic &
                Professional
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "JAMB UTME",
                  "WAEC SSCE",
                  "NECO BECE",
                  "POST-UTME",
                  "IJMB",
                  "JUPEB",
                  "ICAN",
                  "Cowbellpedia Maths",
                  "NECO Common-Entrance",
                  "LBAR",
                ].map((exam) => (
                  <span
                    key={exam}
                    className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-full text-sm shadow-sm border"
                  >
                    {exam}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5" /> Online Edition — Recruitment &
                Agencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Nigerian Army",
                  "Nigerian Navy",
                  "Air Force",
                  "Police (NPF)",
                  "NSCDC",
                  "FRSC",
                  "Immigration",
                  "Customs",
                  "Prison Service",
                  "ICPC",
                  "NDLEA",
                  "Teachers Recruitment",
                  "TRCN",
                  "INEC",
                ].map((exam) => (
                  <span
                    key={exam}
                    className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-full text-sm shadow-sm border"
                  >
                    {exam}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing & Bulk Discounts */}
      <div className="container mx-auto px-4 py-16" id="pricing">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg border">
            <div className="flex items-center gap-2 text-blue-700">
              <Award className="w-6 h-6" /> Lifetime License
            </div>
            <h3 className="text-2xl font-bold mt-2">
              Offline — One-time payment
            </h3>
            <p className="text-3xl font-bold mt-2">
              ₦3,000 <span className="text-base font-normal">per device</span>
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Device-specific activation key, non-transferable.
            </p>
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
              <p className="font-medium">🎓 Bulk discounts:</p>
              <p>5+ keys → 10% off | 10+ keys → 15% off</p>
            </div>
            <Button className="w-full mt-6">Request Bulk Pricing →</Button>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg border">
            <div className="flex items-center gap-2 text-teal-700">
              <Zap className="w-6 h-6" /> Subscription Pass
            </div>
            <h3 className="text-2xl font-bold mt-2">Online — Monthly plan</h3>
            <p className="text-3xl font-bold mt-2">
              ₦1,000 <span className="text-base font-normal">/ month</span>
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Annual plan: ₦10,000 (save 2 months)
            </p>
            <div className="mt-4 p-3 bg-teal-50 dark:bg-teal-950/30 rounded-lg">
              <p>✅ First 1000 users get 3-day free trial</p>
              <p>✅ Cancel anytime, access on any device</p>
            </div>
            <Button variant="outline" className="w-full mt-6">
              Start Free Trial →
            </Button>
          </div>
        </div>
      </div>

      {/* Why Choose Us / Trust Badges */}
      <div className="bg-white dark:bg-zinc-950 py-12 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="font-bold text-lg mt-3">AI-Powered Strategy</h3>
              <p className="text-gray-500">
                Personalized weak-point analysis & focus areas
              </p>
            </div>
            <div>
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="font-bold text-lg mt-3">100% Syllabus Aligned</h3>
              <p className="text-gray-500">
                No fluff, just exam-focused content
              </p>
            </div>
            <div>
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="font-bold text-lg mt-3">500K+ Trusted Users</h3>
              <p className="text-gray-500">
                Proven track record of exam success
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Message Us CTA */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8">
          <MessageCircle className="w-12 h-12 mx-auto text-blue-700 mb-3" />
          <h3 className="text-2xl font-bold">Still have questions?</h3>
          <p className="mt-2 text-gray-600">
            Our support team replies within 2 hours.
          </p>
          <Button className="mt-4 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-black gap-2">
            <MessageCircle className="w-4 h-4" /> Message Us
          </Button>
        </div>
      </div>
    </div>
  );
}