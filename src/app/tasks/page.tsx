import { AppShell } from "@/components/app-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClipboardCheck } from "lucide-react";

const todayTasks = [
  { id: "task1", label: "Watch video on long division" },
  { id: "task2", label: "Complete 10 long division problems" },
  { id: "task3", label: "Play the 'Fraction Flipper' game for 15 minutes" },
];

const upcomingTasks = [
    { id: "task4", label: "Read Chapter 4: Decimals" },
    { id: "task5", label: "Worksheet on adding decimals" },
];

const completedTasks = [
    { id: "task6", label: "Multiplication practice sheet" },
    { id: "task7", label: "Quiz on shapes and angles" },
];

export default function TasksPage() {
    const totalTasks = todayTasks.length + upcomingTasks.length + completedTasks.length;
    const completedCount = completedTasks.length;
    const progressPercentage = (completedCount / totalTasks) * 100;

  return (
    <AppShell>
      <div className="flex-1 space-y-8 p-4 md:p-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Your Tasks
        </h1>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><ClipboardCheck /> Daily Progress</CardTitle>
                <CardDescription>You've completed {completedCount} out of {totalTasks} tasks. Keep it up!</CardDescription>
            </CardHeader>
            <CardContent>
                <Progress value={progressPercentage} />
            </CardContent>
        </Card>

        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-headline">Today's Focus</AccordionTrigger>
            <AccordionContent>
                <div className="space-y-4 pt-2">
                    {todayTasks.map(task => (
                        <div key={task.id} className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
                            <Checkbox id={task.id} />
                            <label
                            htmlFor={task.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                            {task.label}
                            </label>
                        </div>
                    ))}
                </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-headline">Coming Up Next</AccordionTrigger>
            <AccordionContent>
                 <div className="space-y-4 pt-2">
                    {upcomingTasks.map(task => (
                        <div key={task.id} className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
                            <Checkbox id={task.id} />
                            <label
                            htmlFor={task.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                            {task.label}
                            </label>
                        </div>
                    ))}
                </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-headline">Completed</AccordionTrigger>
            <AccordionContent>
                 <div className="space-y-4 pt-2">
                    {completedTasks.map(task => (
                        <div key={task.id} className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg border">
                            <Checkbox id={task.id} checked disabled/>
                            <label
                            htmlFor={task.id}
                            className="text-sm font-medium leading-none text-muted-foreground line-through peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                            {task.label}
                            </label>
                        </div>
                    ))}
                </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </AppShell>
  );
}
