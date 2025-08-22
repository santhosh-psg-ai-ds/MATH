'use client';
import { useState } from 'react';
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";

const quizQuestions = [
    {
        question: "What is 7 multiplied by 8?",
        options: ["48", "54", "56", "64"],
        answer: "56"
    },
    {
        question: "Which of these is a prime number?",
        options: ["9", "15", "17", "21"],
        answer: "17"
    },
    {
        question: "What is 120 divided by 10?",
        options: ["10", "12", "15", "20"],
        answer: "12"
    },
    {
        question: "If a pizza has 8 slices and you eat 3, what fraction of the pizza is left?",
        options: ["3/8", "5/8", "1/2", "3/5"],
        answer: "5/8"
    }
];

export default function QuizzesPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  
    const handleNext = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedOption(null);
        }
    };

  return (
    <AppShell>
      <div className="flex-1 space-y-8 p-4 md:p-8">
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight font-headline">Math Quiz</h1>
        </div>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
                <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="text-accent" />
                    Question {currentQuestion + 1}
                </CardTitle>
                <CardDescription>Topic: Mixed Review</CardDescription>
            </div>
            <Progress value={progress} className="w-full"/>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold mb-6">{quizQuestions[currentQuestion].question}</p>
            <RadioGroup onValueChange={setSelectedOption} value={selectedOption ?? undefined}>
                {quizQuestions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border has-[:checked]:bg-primary/10 has-[:checked]:border-primary transition-all">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="text-base flex-1 cursor-pointer">{option}</Label>
                    </div>
                ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
            </Button>
             {currentQuestion === quizQuestions.length - 1 ? (
                <Button>Submit Quiz</Button>
            ) : (
                <Button onClick={handleNext}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </AppShell>
  );
}
