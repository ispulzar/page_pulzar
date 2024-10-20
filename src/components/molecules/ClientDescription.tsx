import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React from "react";

type Props = {};

function ClientDescription({}: Props) {
  return (
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
        <Avatar
          src=""
          className="avatar"
        />
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ClientDescription;
