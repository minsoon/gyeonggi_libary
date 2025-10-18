// src/app/api/[...path]/route.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const BACKEND = 'http://toysmyth-api.toysmythiot.com:8085'

async function proxy(request: Request, ctx: any): Promise<Response> {
  try {
    const segs = ctx?.params?.path
    const parts = Array.isArray(segs) ? segs : typeof segs === 'string' ? [segs] : []
    const tail = parts.join('/')
    const url = new URL(request.url)
    const target = `${BACKEND}/${tail}${url.search}`

    // 타임아웃 보호(예: 10초)
    const ac = new AbortController()
    const t = setTimeout(() => ac.abort('timeout'), 10_000)

    const resp = await fetch(target, {
      method: request.method,
      body: request.method === 'GET' || request.method === 'HEAD' ? undefined : await request.arrayBuffer(),
      redirect: 'manual',
      signal: ac.signal,
      cache: 'no-store',
    }).finally(() => clearTimeout(t))

    return new Response(resp.body, { status: resp.status, headers: resp.headers })
  } catch (e: any) {
    console.error('proxy error:', e?.message || e) // ← Vercel 함수 로그에서 확인
    return new Response(JSON.stringify({ error: 'proxy_failed', detail: String(e?.message || e) }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    })
  }
}

export const GET = proxy
export const POST = proxy
export const PUT = proxy
export const PATCH = proxy
export const DELETE = proxy
export async function OPTIONS() {
  return new Response(null, { status: 204 })
}
