import { verify } from "../../utils/jwt.js";

//When using middleware, there are two different styles of fastify router hooks:
//if async function is being used, do not use: done()
//If you use a callback-based function (no async), then call done(err) or done()
//And always use the return at the end of each code block
export async function auth(request, reply) {
  try {
    const rawToken = request.headers.authorization;
    if (!rawToken || !rawToken.startsWith("Bearer ")) {
      return reply.code(401).send({ message: "Unauthorized" });
    }

    const token = rawToken.split(" ")[1];
    const decodedInfo = await verify(token, process.env.JWT_SECRET);
    request.user = decodedInfo;
    return; // ✅ allow request to continue
  } catch (error) {
    return reply.code(401).send({ message: "Unauthorized" });
  }
}
