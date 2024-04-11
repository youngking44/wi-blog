import React from "react";
import styles from "./PostUser.module.scss";
import { publicRequest } from "@/utils/axios";
import { getUser } from "@/lib/actions/user/user";

// interface IUser {
//   id: number;
//   name: string;
// }

// const getUser = async (userId: string) => {
//   const res = await publicRequest.get<IUser>(`/users/${userId}`);

//   return res.data;
// };

const PostUser = async ({ userId }: { userId: string }) => {
  /* const user = await getUser(userId.toString()); */
  const user = await getUser(userId);

  console.log("User....", user);

  return (
    <div className={styles.container}>
      <span>Author</span>
      <h4>{user.username}</h4>
    </div>
  );
};

export default PostUser;
