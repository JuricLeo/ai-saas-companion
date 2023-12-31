"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

export const UserAvatar = () => {
  const { user } = useUser();
  return (
    <Avatar className="w-12 h-12">
      <AvatarImage src={user?.imageUrl} />
    </Avatar>
  );
};
