import { Community } from "@/atoms/communitiesAtom";
import React, { useEffect } from "react";

type PostsProps = {
  communityData: Community;
  userId?: string;
};

const Posts: React.FC<PostsProps> = () => {
  const getPosts = async () => {};

  useEffect(() => {}, []);
  return <div>Posts</div>;
};
export default Posts;
