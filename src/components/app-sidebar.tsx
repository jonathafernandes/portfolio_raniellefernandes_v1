import {
    Instagram,
    Linkedin,
    Github,
    MessageCircle,
    User,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

// Menu items.
const items = [
    {
        title: "Instagram",
        url: "#",
        icon: Instagram,
    },
    {
        title: "LinkedIn",
        url: "#",
        icon: Linkedin,
    },
    {
        title: "GitHub",
        url: "#",
        icon: Github,
    },
    {
        title: "WhatsApp",
        url: "#",
        icon: MessageCircle,
    },
]

export function AppSidebar() {
    return (
        <Sidebar variant="sidebar" collapsible="icon">
            <SidebarHeader className="flex items-center justify-center py-4">
                <div className="flex flex-col items-center gap-2 px-1">
                    <Image src="/foto-avatar.jpg" alt="Ranielle Fernandes" width={64} height={64} className="rounded-full" />
                    <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                        <span className="truncate font-semibold">Ranielle Fernandes</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <p className="text-center text-xs group-data-[collapsible=icon]:hidden">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, vitae? Cumque, architecto amet veritatis ducimus libero, facere blanditiis, ad fugiat ut officia consequatur natus. Sed possimus velit ut vitae ad!
                </p>
                <SidebarGroup>
                    <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">Contato</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="flex-row flex-wrap gap-2 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:items-center">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild tooltip={item.title}>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span className="sr-only">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton variant="default" className="group-data-[collapsible=icon]:justify-center">
                            <User />
                            <span>
                                Entrar
                            </span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
