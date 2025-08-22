import { AppShell } from "@/components/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText, Upload } from "lucide-react";

const assignments = [
  {
    name: "Chapter 1: Number Fun",
    dueDate: "2024-09-10",
    status: "Graded",
    grade: "A+",
  },
  {
    name: "Chapter 2: Addition Practice",
    dueDate: "2024-09-15",
    status: "Submitted",
    grade: "-",
  },
  {
    name: "Chapter 3: Subtraction Worksheet",
    dueDate: "2024-09-20",
    status: "Upcoming",
    grade: "-",
  },
  {
    name: "Mid-Term Project: Math in Real Life",
    dueDate: "2024-10-05",
    status: "Upcoming",
    grade: "-",
  },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Graded":
      return "default";
    case "Submitted":
      return "secondary";
    case "Upcoming":
      return "outline";
    default:
      return "default";
  }
};

export default function AssignmentsPage() {
  return (
    <AppShell>
      <div className="flex-1 space-y-8 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            My Assignments
          </h1>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Submit New
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Your Homework</CardTitle>
            <CardDescription>
              Keep track of your assignments and grades here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Assignment</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assignments.map((assignment) => (
                  <TableRow key={assignment.name}>
                    <TableCell className="font-medium">
                      {assignment.name}
                    </TableCell>
                    <TableCell>{assignment.dueDate}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(assignment.status)}>
                        {assignment.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-bold text-primary">{assignment.grade}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
