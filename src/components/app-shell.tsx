import Link from "next/link";
import {
  Home,
  Lightbulb,
  ClipboardCheck,
  FileText,
  Gamepad2,
  LogOut,
  Settings,
} from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo } from "@/components/logo";
import { SheetTitle } from "./ui/sheet";

const menuItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: Home,
  },
  {
    href: "/quizzes",
    label: "Quizzes",
    icon: Lightbulb,
  },
  {
    href: "/tasks",
    label: "Tasks",
    icon: ClipboardCheck,
  },
  {
    href: "/assignments",
    label: "Assignments",
    icon: FileText,
  },
  {
    href: "/games",
    label: "Games",
    icon: Gamepad2,
  },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar className="bg-card border-r">
          <SidebarHeader>
            <div className="flex items-center gap-2 p-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-lg font-bold font-headline group-data-[collapsible=icon]:hidden">
                Math Whiz Kids
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
             <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <Link href={item.href}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.label,
                        side: "right",
                        align: "center",
                      }}
                      className="text-base"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-2">
             <SidebarMenu>
              <SidebarMenuItem>
                <Link href="#">
                  <SidebarMenuButton
                    tooltip={{
                      children: "Settings",
                      side: "right",
                      align: "center",
                    }}
                    className="text-base"
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/login">
                  <SidebarMenuButton
                    tooltip={{
                      children: "Logout",
                      side: "right",
                      align: "center",
                    }}
                    className="text-base"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
            <div className="flex items-center gap-3 p-2 rounded-lg bg-background">
               <Avatar>
                <AvatarImage src="https://placehold.co/100x100.png" alt="@alex" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <span className="font-semibold text-sm">Alex</span>
                <span className="text-xs text-muted-foreground">Grade 4</span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1 flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-card px-6 sticky top-0 z-30">
             <div className="md:hidden">
              <SidebarTrigger />
            </div>
            <div className="flex-1">
              {/* Optional Header Content like breadcrumbs can go here */}
            </div>
          </header>
          <main className="flex-1 overflow-y-auto">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}