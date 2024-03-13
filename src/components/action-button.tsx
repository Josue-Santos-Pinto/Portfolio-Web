import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import React from 'react'

type Props = {
    title: string;
    Icon: typeof ArrowRightIcon
}

export default function ActionButton({title, Icon}: Props) {
  return (
    <Button className="w-56 h-14 relative flex flex-row justify-center items-center rounded-full my-5 pl-6 pr-16 border-yellow-500 " variant={"outline"}>
        <div className="uppercase font-bold">{title}</div>
        <div className="w-14 h-14 rounded-full bg-yellow-500 absolute -right-2 top-0 bottom-0 flex justify-center items-center">
            <Icon className="w-10 h-10" color="white"/>
        </div>
    </Button>
  )
}
