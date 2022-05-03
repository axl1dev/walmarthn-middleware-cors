import { json } from "co-body";

export async function handleCors(ctx: Context) {
  const {clients: { status }} = ctx

  const body = await json(ctx.req);

  const data = await status.getDocuments(body.id, body.internationalPhone)

  ctx.response.body = data
  ctx.state.body = body;
  ctx.status = 200

}
