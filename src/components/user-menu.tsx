import {
  BookOpenIcon,
  Layers2Icon,
  LogOutIcon,
  UserPenIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  authApi,
  useLogOutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { Link } from "react-router";

export default function UserMenu() {
  const { data, refetch } = useUserInfoQuery(undefined);
  const [logout] = useLogOutMutation();
  const userInfo = data?.data;

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    logout(undefined);
    refetch();
    dispatch(authApi.util.resetApiState());
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto w-auto p-0 hover:bg-transparent focus:ring-0"
        >
          <Avatar className="cursor-pointer border border-muted-foreground/30">
            <AvatarImage
              src={userInfo?.photo || "./avatar.jpg"}
              alt={userInfo?.name || "User"}
            />
            <AvatarFallback>
              {userInfo?.name ? userInfo.name.charAt(0) : "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 rounded-xl shadow-md border bg-background"
        align="end"
      >
        <DropdownMenuLabel className="flex flex-col space-y-0.5">
          <span className="text-sm font-medium truncate">{userInfo?.name}</span>
          <span className="text-xs text-muted-foreground truncate">
            {userInfo?.email}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to="/profile" className="flex items-center gap-2">
              <Layers2Icon size={16} className="opacity-60" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link to="/editProfile" className="flex items-center gap-2">
              <UserPenIcon size={16} className="opacity-60" />
              <span>Edit Profile</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link
              to={userInfo?.role !== "Admin" ? "/user" : "/admin"}
              className="flex items-center gap-2"
            >
              <BookOpenIcon size={16} className="opacity-60" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2 text-red-600 hover:text-red-700"
          >
            <LogOutIcon size={16} />
            <span>Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
