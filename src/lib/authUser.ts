import { User } from "@prisma/client";
import { prisma } from "./prismaSingleton";
import { compare,hash } from "bcrypt";

interface UserClient {
    id: string,
    email: string,
}

const authUser = async ( email:string, password:string): Promise<UserClient | null> => {
  const user = await prisma.user.findFirst({ where: { email: email } });

  if (!user) return null;

  const isPasswordValid = await compare(password, user.password);

  const { password: pass,id, ...userChecked } = user;

  if (isPasswordValid) return {id: id.toString() ,...userChecked };

  return null;
};

export default authUser;
