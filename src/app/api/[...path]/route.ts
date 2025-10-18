// src/app/api/[...path]/route.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const BACKEND = 'http://toysmyth-api.toysmythiot.com:8085'

async function proxy(request: Request, ctx: any): Promise<Response> {
  // path 처리 (string|string[]|undefined 안전하게)
  const segs = ctx?.params?.path
  const parts = Array.isArray(segs) ? segs : typeof segs === 'string' ? [segs] : []
  const tail = parts.join('/')

  const url = new URL(request.url)
  const target = `${BACKEND}/${tail}${url.search}`

  const resp = await fetch(target, {
    method: request.method,
    body: request.method === 'GET' || request.method === 'HEAD' ? undefined : await request.arrayBuffer(),
    redirect: 'manual',
  })

  return new Response(resp.body, {
    status: resp.status,
    headers: resp.headers,
  })
}

export const GET = proxy
export const POST = proxy
export const PUT = proxy
export const PATCH = proxy
export const DELETE = proxy

export async function OPTIONS() {
  return new Response(null, { status: 204 })
}
