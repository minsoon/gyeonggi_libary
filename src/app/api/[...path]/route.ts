// src/app/api/[...path]/route.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const BACKEND = 'http://toysmyth-api.toysmythiot.com:8085' // ← 끝 슬래시 X

async function proxy(request: Request, ctx: any): Promise<Response> {
  const segs = ctx?.params?.path
  const parts = Array.isArray(segs) ? segs : typeof segs === 'string' ? [segs] : []
  const tail = parts.join('/')
  const url = new URL(request.url)
  const target = `${BACKEND}/${tail}${url.search}`

  // 30s 타임아웃 + 디버그
  const ac = new AbortController()
  const timeout = setTimeout(() => ac.abort('timeout'), 30_000)

  try {
    const resp = await fetch(target, {
      method: request.method,
      // 필요하면 Host 헤더 주석 해제
      // headers: { Host: 'toysmyth-api.toysmythiot.com' },
      body: request.method === 'GET' || request.method === 'HEAD' ? undefined : await request.arrayBuffer(),
      redirect: 'manual',
      signal: ac.signal,
      cache: 'no-store',
    }).finally(() => clearTimeout(timeout))

    // upstream 상태/헤더를 그대로 전달 + 상태가 200이 아니면 로그
    if (!resp.ok) {
      console.error('upstream non-OK', {
        status: resp.status,
        statusText: resp.statusText,
        target,
        headers: Object.fromEntries(resp.headers.entries()),
      })
    }
    return new Response(resp.body, { status: resp.status, headers: resp.headers })
  } catch (e: any) {
    // 여기 메시지가 핵심 (ENOTFOUND/ECONNREFUSED/ETIMEDOUT/timeout 등)
    const detail = e?.message || String(e)
    console.error('proxy error', { target, detail })

    return new Response(
      JSON.stringify({
        error: 'proxy_failed',
        target,
        detail, // ← 브라우저 네트워크 탭에서 바로 확인 가능
      }),
      {
        status: 502,
        headers: { 'content-type': 'application/json' },
      }
    )
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
