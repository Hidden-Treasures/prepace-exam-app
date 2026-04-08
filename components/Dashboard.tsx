"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Clock,
  TrendingUp,
  Award,
  ChevronRight,
  Filter,
  Zap,
  BarChart3,
  Home,
  Settings,
  LogOut,
  HelpCircle,
} from "lucide-react";

export default function PrepAceAppPage() {
  const [selectedSubject, setSelectedSubject] = useState("Mathematics");
  const [difficulty, setDifficulty] = useState("Medium");

  // Mock data
  const stats = {
    totalQuestions: 1247,
    correctAnswers: 892,
    accuracy: 71.5,
    studyStreak: 12,
    avgTimePerQuestion: 47, // seconds
  };

  const recentTests = [
    { id: 1, subject: "Mathematics", score: 85, date: "Today", questions: 20 },
    { id: 2, subject: "English", score: 72, date: "Yesterday", questions: 30 },
    { id: 3, subject: "Physics", score: 68, date: "2 days ago", questions: 25 },
  ];

  const recommendedTopics = [
    "Algebra - Quadratic Equations",
    "Grammar - Sentence Correction",
    "Thermodynamics - Laws",
    "Organic Chemistry - Reactions",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      {/* App Header */}
      <header className="sticky top-0 z-30 border-b bg-white dark:bg-zinc-950 dark:border-zinc-800">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">PA</span>
              </div>
              <span className="font-semibold text-lg text-gray-900 dark:text-white">
                PrepAce
              </span>
            </div>
            <nav className="hidden md:flex ml-8 space-x-4">
              <Link
                href="/prep-ace-app"
                className="text-sm font-medium text-blue-600 dark:text-blue-400"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900"
              >
                Practice
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900"
              >
                Mock Exams
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900"
              >
                Progress
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full">
              <HelpCircle className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
              JD
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - hidden on mobile, visible on md+ */}
        <aside className="hidden md:block w-64 border-r bg-white dark:bg-zinc-950 dark:border-zinc-800 min-h-[calc(100vh-4rem)]">
          <div className="p-4 space-y-6">
            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Main
              </p>
              <nav className="space-y-1">
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                >
                  <Home className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
                >
                  <BookOpen className="h-4 w-4" />
                  My Library
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
                >
                  <BarChart3 className="h-4 w-4" />
                  Analytics
                </Link>
              </nav>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Account
              </p>
              <nav className="space-y-1">
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Link>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 space-y-6">
          {/* Welcome banner */}
          <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 md:p-6 text-white">
            <h1 className="text-xl md:text-2xl font-bold">
              Welcome back, James!
            </h1>
            <p className="text-blue-100 mt-1">
              Your next exam is in 14 days. Keep up the momentum.
            </p>
            <Button
              variant="secondary"
              size="sm"
              className="mt-3 bg-white/20 hover:bg-white/30 text-white border-0"
            >
              Continue where you left off
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Total Questions
                  </p>
                  <p className="text-2xl font-bold">
                    {stats.totalQuestions.toLocaleString()}
                  </p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-500" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Accuracy
                  </p>
                  <p className="text-2xl font-bold">{stats.accuracy}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Study Streak
                  </p>
                  <p className="text-2xl font-bold">{stats.studyStreak} days</p>
                </div>
                <Zap className="h-8 w-8 text-yellow-500" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Avg. Time/Question
                  </p>
                  <p className="text-2xl font-bold">
                    {stats.avgTimePerQuestion}s
                  </p>
                </div>
                <Clock className="h-8 w-8 text-purple-500" />
              </CardContent>
            </Card>
          </div>

          {/* Practice Section */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left column - Practice area */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Practice</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <select
                      className="rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1 text-sm"
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                    >
                      <option>Mathematics</option>
                      <option>English</option>
                      <option>Physics</option>
                      <option>Chemistry</option>
                      <option>Biology</option>
                    </select>
                    <select
                      className="rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1 text-sm"
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                    >
                      <option>Easy</option>
                      <option>Medium</option>
                      <option>Hard</option>
                    </select>
                    <Button size="sm" className="ml-auto">
                      Start Practice <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-gray-50 dark:bg-zinc-800/50 p-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Question of the Day
                    </p>
                    <p className="mt-2 text-lg font-medium">
                      Solve for x: 2x² + 5x - 3 = 0
                    </p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm">
                        Show Hint
                      </Button>
                      <Button size="sm">Answer</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Recent Practice Tests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentTests.map((test) => (
                      <div
                        key={test.id}
                        className="flex items-center justify-between border-b pb-2 last:border-0"
                      >
                        <div>
                          <p className="font-medium">{test.subject}</p>
                          <p className="text-xs text-gray-500">
                            {test.date} • {test.questions} questions
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-sm font-semibold ${test.score >= 70 ? "text-green-600" : "text-yellow-600"}`}
                          >
                            {test.score}%
                          </span>
                          <Button variant="ghost" size="sm">
                            Review
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right column - Recommendations & Progress */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recommended for You</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recommendedTopics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm">{topic}</span>
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        Practice
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Exam Readiness</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Overall Progress</span>
                      <span>{stats.accuracy}%</span>
                    </div>
                    <Progress value={stats.accuracy} className="h-2" />
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30">
                    <p className="text-sm font-medium">Target: 85% accuracy</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      You need{" "}
                      {Math.ceil(
                        (0.85 * stats.totalQuestions - stats.correctAnswers) /
                          (1 - 0.85),
                      )}{" "}
                      more correct answers.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Button asChild variant="outline" className="w-full">
                <Link href="/">← Back to Home</Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
