import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ComboboxComponent } from "./combobox-component"


function PersonComponent () {
    return (
        <div className="flex flex-row w-full gap-4 items-center ">
            <Avatar className="mr-3">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <div>Sofia Davis</div>
                <div className="text-muted-foreground">m@example.com</div>
            </div>
            <ComboboxComponent />
        </div>
    )
}

export default PersonComponent