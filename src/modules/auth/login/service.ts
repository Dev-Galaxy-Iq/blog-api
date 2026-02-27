import { db } from "../../../lib/db"
import { ApiError } from "../../../lib/global-error"
import { authLoginReqBodySchemaType } from "./model"

export const authLoginService = async (data: authLoginReqBodySchemaType) => {
  // check if this user exists 
  const user = await db.user.findFirst({
    where: {
      email: data.email,
    }
  })

  if (!user?.id) throw new ApiError("this user doesnt exists", 404)

  // compare the password with the db password
  const isMatching = await Bun.password.verify(data.password, user.password)
  if (!isMatching) throw new ApiError("invalid credentials!", 403)

  // the password is matching so return the user data
  return {
    ...user, password: undefined
  }
}
