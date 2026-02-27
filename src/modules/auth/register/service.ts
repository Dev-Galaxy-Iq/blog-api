import { authRegisterBodySchemaType } from "./model";
import { db } from "../../../lib/db";
import { ApiError } from "../../../lib/global-error";

export const authRegisterService = async (data: authRegisterBodySchemaType) => {

  // check if user already exists 
  const user = await db.user.findFirst({
    where: {
      OR: [
        { email: data.email },
        { username: data.username }
      ]

    }
  })

  if (user?.id) throw new ApiError("this user already exists!!!", 409)

  try {
    const addUser = await db.user.create({
      data
    })

    return addUser
  } catch (error) {
    throw Error("error happened while registering this user")
  }
}
