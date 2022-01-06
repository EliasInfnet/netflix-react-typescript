import { GetSession, PostSessionNew, PostSessionNewPayload } from "../user/user.types";
import axiosInstance from "../../modules/axios/axios.module";
import { Session } from "./session.types";

export default function sessionService() {

  const postSessionNew = (user: PostSessionNewPayload): Promise<PostSessionNew> => axiosInstance.post('session/new', user)

  const getSession = (accessToken: Session['accessToken']): Promise<GetSession> => axiosInstance.get('session', {
    headers: { authorization: accessToken }
  })

  return { postSessionNew, getSession }
}