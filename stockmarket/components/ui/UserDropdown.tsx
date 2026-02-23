'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";
import { Button } from "./button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"; 
const UserDropdown = () => {
    const router = useRouter();
    const handleSignout = () => {
        router.push("/sign-in");
    }

    const user = {name: 'Ibrahim Shatah', email: 'ibrahim.shatah@gmail.com'}

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:yellow-500">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/158064535?s=400&u=330983cccc88762df8057e3670649c58a64aa1a2&v=4" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">{user.name[0]+user.name[1]}</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className='taxt-base font-medium text-grey-400'>
                            {user.name}

                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-grey-400">






                   <DropdownMenuLabel>
                                    <div className="flex relative items-center gap-3 py-2">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/158064535?s=400&u=330983cccc88762df8057e3670649c58a64aa1a2&v=4" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">{user.name[0]+user.name[1]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className='taxt-base font-medium text-grey-400'>
                            {user.name}

                        </span>
                        <span className="text-sm text-gray-500">
                            {user.email}
                        </span>
                    </div>
                </div>
                
                   </DropdownMenuLabel>
                   <DropdownMenuSeparator className="bg-gray-600"/>
                   <DropdownMenuItem onClick={handleSignout} className="text-gray-100 text-md font-medium focus:bg-transparent forcus:text-yellow-500 transition-colors cursor-pointer">
                    <span className="h-4 w-4 mr-2 hidden sm:block">Logout</span>
                   </DropdownMenuItem>
                   <DropdownMenuItem>Billing</DropdownMenuItem>
                   <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
   
}
export default UserDropdown