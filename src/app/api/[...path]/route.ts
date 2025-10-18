// src/app/api/[...path]/route.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
// export const preferredRegion = 'sin1'; // 특정 리전 강제하고 싶으면 사용(선택)

const BACKEND = 'http://toysmyth-api.toysmythiot.com:8085' // 끝 슬래시 없음

async function proxy(request: Request, ctx: any): Promise<Response> {
  try {
    const segs = ctx?.params?.path
    const parts = Array.isArray(segs) ? segs : typeof segs === 'string' ? [segs] : []
    const tail = parts.join('/')

    const url = new URL(request.url)
    const target = `${BACKEND}/${tail}${url.search}`

    // 30s 타임아웃
    const ac = new AbortController()
    const to = setTimeout(() => ac.abort('timeout'), 30000)

    const resp = await fetch(target, {
      method: request.method,
      // Host 헤더가 필요한 백엔드일 경우만 아래 한 줄 활성화
      // headers: { Host: 'toysmyth-api.toysmythiot.com' },
      body: request.method === 'GET' || request.method === 'HEAD' ? undefined : await request.arrayBuffer(),
      redirect: 'manual',
      signal: ac.signal,
      cache: 'no-store',
    }).finally(() => clearTimeout(to))

    // 실패 상태면 상태/헤더 로그
    if (!resp.ok) {
      console.error('proxy upstream non-OK', {
        status: resp.status,
        statusText: resp.statusText,
        target,
      })
    }

    return new Response(resp.body, { status: resp.status, headers: resp.headers })
  } catch (e: any) {
    // 여기 로그 메시지가 핵심 (ENOTFOUND/ECONNREFUSED/ETIMEDOUT 등)
    console.error('proxy error:', e?.message || e)
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
