import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
// import axios from "axios";
import { useAuth } from "@/ContextApi/AuthContext";


export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) {
  const [isAdminUser, setIsAdminUser] = useState(false);

  const {user} = useAuth();
  useEffect(() => {
    console.log(user)
    if(user?.role_id == 1){
      setIsAdminUser(true);
    }else{
      setIsAdminUser(false);
    } 
  }, []);

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {          
            if ((item.title === "User" || item.title === "TaskAssign" ) && !isAdminUser) {
              return null;
            }
             if ((item.title === "Assigned Tasks" ) && isAdminUser) {
              return null;
            }
            return (
              <SidebarMenuItem key={item.url}>
                <NavLink to={item.url} className="w-full block">
                  <SidebarMenuButton tooltip={item.title} className="p-0">
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </NavLink>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
